# NextJS App - Hidden Gems

This is my first NextJS app, a multiple-page application working as a social media platform where users can share their hidden gems. The app is built with fundamental featrues from React and NextJs, realtime database and authentication from Firebase, and mobile responsiveness.

## Table of contents

- [Overview](#overview)
  - [Project background](#project-background)
  - [Website structure](#website-structure)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Why I coded this project](#what-i-coded-this-project)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Project background

The project is built as an pinterest and instagram-like social media platform where users share their hidden gems. The main purposes of building this project are to practise my understanding and skills of React and NextJs, and to give myself a hand-on experience of building a real-life project before my first web developer job.

### Website Structure

The website has 5 pages: Home, Explore, Collection, NewGem and Gemmer, and 1 common layout: navigation.

#### Home

HOME, a default page, has 2 main sections: hero and masonry. Either one of them is shown depending on whether users have logged in or not. Non-logged-in users are all redirected to HOME when visting other pages of the website through URL.

If users have not logged in, hero section will be shown to introduce what the app is all about and has a call-to-action button encouraging users to start discovering the app either by logging in an existing account or creating one.

If users are visiting the website with a valid token stored in cookie and authenticated by Firebase during server-side rendering, then masrony of gem posts will be displayed. Gem posts are, by default, sorted by newest.

#### Explore

EXPLORE allows users to explore gem posts with filters of search term and category. Only gem posts matching with their filtering criteria are shown. If there is none matching, then an instant feedback of "No items currently matching the criteria" will appear to notify users.

#### Collection

COLLECTION is where users can see all the gems posts they have saved up. By default, gem posts are sorted by newest, but users could switch it to category where posts are sorted by alphabetical order of category name.

#### NewGem

NEWGEM provides a form where users can create a new gem post with input fields of image, title, description and category. Once a new gem post is submitted, then users will be redirected to the homepage where they would see the post showing up as the first one.

#### Gemmer

GEMMER serves as a summary of a gemmer's profile. It has dynamic routing and only accepts valid query IDs. It is comprised of 2 parts: gemmer profile and his/her gem post masonry.

In the profile, profile picture, username, biograhpy, no. of gem posts and followers are shown. If the current user visiting the gemmer route has the same user id with the query id, then an edit button will appear to allow editing of his/her profile. If not, then a follow/unfollow button will be shown depending on the following state between the current user and the user with the same id as query id.

In the masonry, all gem posts created by the gemmer are displayed.

#### Navigation

All pages share the same navigation. NAVIGATION enables users switching between pages and signing up or in an account. Only logged-in users have navLinks in the navigation bar perfomring page switching.

### Screenshot

#### Desktop View

![Homepage-Hero](./screenshots/Desktop-home-hero.png)
![Homepage-Masonry](./screenshots/Desktop-home-masonry.png)
![Homepage-Gem](./screenshots/Desktop-home-gem.png)

![Explore](./screenshots/Desktop-explore.png)

![Collection](./screenshots/Desktop-collection.png)

![NewGem](./screenshots/Desktop-newgem.png)

![Gemmer](./screenshots/Desktop-gemmer-self.png)
![Gemmer](./screenshots/Desktop-gemmer-others.png)

#### Mobile View

![Homepage](./screenshots/Mobile-home.png)

### Links

- Live Site URL: [https://next-hidden-gems.vercel.app/](https://next-hidden-gems.vercel.app/)

## My process

### Built with

- React
- Next JS
- Firebase
- Mobile responsiveness

### Why I coded this project

Despite the fact that I am currently striving to be a front-end web developer with primary focus on enhancing my front-end skills, I wanted to get a glimpse of how a full-stack app works in practice and how React works with NextJS as its backend.

### What I learned

#### Next JS

##### Server-side Rendering

getServerSideProps in NextJS enables pre-rendering a page with all the necessary props before component mounting. In this project, because content of some pages needs to be protected from guest users, server-side authentication has to be performed to see if users should be redirected to homepage for signing up or in an account first before viewing protected content. Apart from user authentication, since getServerSideProps fetches all necessary data from Firebase's database in preparation for components being mounted later.

```js
export async function getServerSideProps(context) {
  const authToken = getAuthToken(context);

  const currentUserId = await getUserIdByToken(authToken);
  if (!currentUserId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const gems = await getAllGems();
  const users = await getAllUsers();
  const categories = await getAllCategories();
  const gemmer = await getUserData(currentUserId);
  const collectionGems = await getGemsFromCollection(currentUserId);

  return {
    props: {
      gems,
      gemmer,
      users,
      categories,
      collectionGems,
      currentUserId,
    },
  };
}
```

##### API Routes

With the use of API routes, I masked the URL of the Firebase's authentication, and therefore account authentication only runs on server side and data provided by users will never get exposed to the frontend.

```js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
      res.status(400).json({ response });
    }
    const { idToken } = await response.json();

    // setCookie
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("authToken", idToken, {
        httpOnly: true,
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );
    res.status(200).json({ response });
  }
}
```

#### Firebase

##### Image Hosting

```js
async function uploadImageToFirebase(image, path) {
  const imageRef = ref(storage, `images/${path}/${image.name}`);

  await uploadBytes(imageRef, image);
  const url = await getDownloadURL(imageRef);

  return url;
}
```

##### Database Updating

```js
async function updateGemmerData(newData, gemmerDbKey) {
  const userRef = ref(db, `user/${gemmerDbKey}`);

  // Update DB
  await update(userRef, newData);

  return true;
}
```

## Author

- Email - [Frankie Lam] frankiechunfai@gmail.com
- Instagram - [@frankie\_\_\_lam](https://www.instagram.com/frankie___lam/)
- Facebook - [Frankie Lam](https://www.facebook.com/frankiecflam/)

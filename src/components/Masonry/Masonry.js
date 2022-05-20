import styles from "./Masonry.module.css";
import Masonry from "react-masonry-css";

const DUMMY_DATA = [
  {
    id: "a1",
    title: "Skating in freedom",
    description:
      "When I skate, my brain turns off, no thoughts and just feelings.",
    category: "sports",
    image:
      "https://images.pexels.com/photos/5463089/pexels-photo-5463089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Frankie Lam",
  },
  {
    id: "a2",
    title: "Reading my books",
    description: "Books take me anywhere.",
    category: "books",
    image:
      "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Becky Po",
  },
  {
    id: "a3",
    title: "My new vans",
    description: "Been wanted to buy them for a long time since last year.",
    category: "fashion",
    image:
      "https://images.pexels.com/photos/593163/pexels-photo-593163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Chris Simmons",
  },
  {
    id: "a4",
    title: "A day in Miami",
    description: "Going on a vacation in Miami with my parents.",
    category: "travel",
    image:
      "https://images.pexels.com/photos/3757147/pexels-photo-3757147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Louise Thompson",
  },
  {
    id: "a5",
    title: "Paris never lets you down",
    description: "amazed by the natural beauty of Paris.",
    category: "travel",
    image:
      "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Kate Price",
  },
  {
    id: "a6",
    title: "Beautiful countryside just outside Manchester",
    description:
      "feeling relieved right here, no work, no digitals, just feelings.",
    category: "travel",
    image:
      "https://images.pexels.com/photos/1756325/pexels-photo-1756325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Chelsea Cutler",
  },
  {
    id: "a7",
    title: "Hiking in nature",
    description: "Went on a hike to embrace the nature.",
    category: "sports",
    image:
      "https://images.pexels.com/photos/1194235/pexels-photo-1194235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Jeremy Samson",
  },
  {
    id: "a8",
    title: "Kayak during weekend",
    description: "Feeling embedded in the ocean ",
    category: "sports",
    image:
      "https://images.pexels.com/photos/2230444/pexels-photo-2230444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Jeremy Samson",
  },
  {
    id: "a9",
    title: "Concert in London",
    description:
      "Loved it. Hope you are coming to Manchester again for another live show",
    category: "music",
    image:
      "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Anson Serba",
  },
  {
    id: "a10",
    title: "My new vans",
    description: "Been wanted to buy them for a long time since last year.",
    category: "fashion",
    image:
      "https://images.pexels.com/photos/593163/pexels-photo-593163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Chris Simmons",
  },
  {
    id: "a11",
    title: "A day in Miami",
    description: "Going on a vacation in Miami with my parents.",
    category: "travel",
    image:
      "https://images.pexels.com/photos/3757147/pexels-photo-3757147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Louise Thompson",
  },
  {
    id: "a12",
    title: "Reading my books",
    description: "Books take me anywhere.",
    category: "books",
    image:
      "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Becky Po",
  },
  {
    id: "a13",
    title: "My new vans",
    description: "Been wanted to buy them for a long time since last year.",
    category: "fashion",
    image:
      "https://images.pexels.com/photos/593163/pexels-photo-593163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Chris Simmons",
  },
  {
    id: "a14",
    title: "Beautiful countryside just outside Manchester",
    description:
      "feeling relieved right here, no work, no digitals, just feelings.",
    category: "travel",
    image:
      "https://images.pexels.com/photos/1756325/pexels-photo-1756325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Chelsea Cutler",
  },
  {
    id: "a15",
    title: "Hiking in nature",
    description: "Went on a hike to embrace the nature.",
    category: "sports",
    image:
      "https://images.pexels.com/photos/1194235/pexels-photo-1194235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Jeremy Samson",
  },
  {
    id: "a16",
    title: "Kayak during weekend",
    description: "Feeling embedded in the ocean ",
    category: "sports",
    image:
      "https://images.pexels.com/photos/2230444/pexels-photo-2230444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Jeremy Samson",
  },
  {
    id: "a17",
    title: "Concert in London",
    description:
      "Loved it. Hope you are coming to Manchester again for another live show",
    category: "music",
    image:
      "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdOn: new Date(Date.now()),
    createdBy: "Anson Serba",
  },
];

const breakpointColumnsObj = {
  default: 5,
  992: 4,
  768: 3,
  576: 2,
};

//...

const Masonary = () => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonaryGrid}
      columnClassName={styles.gridColumn}
    >
      {DUMMY_DATA.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} />
          </div>
        );
      })}
    </Masonry>
  );
};

export default Masonary;

import "../../styles/globals.css";
import Layout from "../components/Layout/Layout";
import App from "next/app";
import getUserIdByToken from "../utils/helpers/getUserIdByToken";

function MyApp({ Component, pageProps, currentUserId }) {
  return (
    <Layout currentUserId={currentUserId}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// Get initial authToken from cookies to conditionally render layout components since layout is outside pages
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const authToken = appContext.ctx.req?.cookies.authToken;
  const currentUserId = await getUserIdByToken(authToken);

  return { ...appProps, currentUserId: currentUserId || null };
};

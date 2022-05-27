import "../../styles/globals.css";
import Layout from "../components/Layout/Layout";
import App from "next/app";
import getCurrentUserId from "../utils/helpers/getCurrentUserId";

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
  const currentUserId = await getCurrentUserId(authToken);

  return { ...appProps, currentUserId: currentUserId || null };
};

import "../../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import Store from "../store/Store";
import App from "next/app";
import getCurrentUserId from "../utils/helpers/getCurrentUserId";

function MyApp({ Component, pageProps, currentUserId }) {
  return (
    <Provider store={Store}>
      <Layout currentUserId={currentUserId}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
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

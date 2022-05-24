import "../../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import Store from "../store/Store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

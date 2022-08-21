import { Provider } from 'react-redux';
import Layout from '../Components/Layout/Layout';
import { store } from '../Redux/Store';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import '../styles/globals.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
       <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={true}
        toastStyle={{
          backgroundColor: "black",
          color: "white",
        }}
      />{" "}
    </>
  );
}

export default MyApp

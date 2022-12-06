import React from "react";
import "@/styles/global.scss";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "@/reduxtoolkit/store/store";

const ToastifyProvider = dynamic(
  () => import("@/ui/toastify/ToastifyProvider")
);
const MuiTheme = dynamic(() => import("@/themes/index"),{ssr:true});



export default function App({ Component, pageProps }: AppProps) {
  // fixSSRLayout();
  return (
    <Provider store={store}>
      <ToastifyProvider>
        <MuiTheme>
          <Component {...pageProps} />
        </MuiTheme>
      </ToastifyProvider>
    </Provider>
  );
}

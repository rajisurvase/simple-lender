import React from "react";
import "@/styles/global.scss";
import type { AppContext, AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "@/reduxtoolkit/store/store";
import ToastifyProvider from "@/ui/toastify/ToastifyProvider";
import { checkWindow } from "@/lib/functions/_helpers.lib";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const MuiTheme = dynamic(() => import("@/themes/index"), { ssr: true });

/**
 * It suppresses the useLayoutEffect warning when running in SSR mode
 */
function fixSSRLayout() {
  // suppress useLayoutEffect (and its warnings) when not running in a browser
  // hence when running in SSR mode
  if (!checkWindow()) {
    React.useLayoutEffect = () => {
      // console.log("layout effect")
    };
  }
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  fixSSRLayout();




  return (
    <Provider  store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ToastifyProvider>
            <MuiTheme>
              <Component {...pageProps} />
            </MuiTheme>
          </ToastifyProvider>
        </Hydrate>

        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </Provider>
  );

}

App.getInitialProps=(context:AppContext)=>{
  const {router,ctx}=context;

}
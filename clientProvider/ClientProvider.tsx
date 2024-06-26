"use client";
import { SnackbarProvider } from "notistack";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux-toolkit/store/store";
import RootStyleRegistry from "@/core/emotion";
import LayoutComponent from "@/layout/LayoutComponent";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
   <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RootStyleRegistry>
        <SnackbarProvider>
          <LayoutComponent>
            {children}
            </LayoutComponent>
        </SnackbarProvider>
      </RootStyleRegistry>
    </Provider>
     </QueryClientProvider>
  );
};

export default ClientProvider;

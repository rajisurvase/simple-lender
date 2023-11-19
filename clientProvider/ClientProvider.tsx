"use client";

import RootStyleRegistry from "core/emotion";
import { SnackbarProvider } from "notistack";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/reduxtoolkit/store/store";
import LayoutComponent from "@/layout/LayoutComponent";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <RootStyleRegistry>
        <SnackbarProvider>
          <LayoutComponent>{children}</LayoutComponent>
        </SnackbarProvider>
      </RootStyleRegistry>
    </Provider>
  );
};

export default ClientProvider;

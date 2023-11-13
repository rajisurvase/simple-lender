"use client";

import RootStyleRegistry from "core/emotion";
import { SnackbarProvider } from "notistack";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/reduxtoolkit/store/store";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <RootStyleRegistry>
        <SnackbarProvider>{children}</SnackbarProvider>
      </RootStyleRegistry>
    </Provider>
  );
};

export default ClientProvider;

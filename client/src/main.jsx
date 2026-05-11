import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Toaster } from "react-hot-toast";

import router from "./routes/router";

import "./index.css";
import "./styles/theme.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <Toaster position="top-right" />
    </QueryClientProvider>
  </React.StrictMode>
);
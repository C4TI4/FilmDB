//
// import ReactDOM from "react-dom/client";
// import createRoot from 'react-dom/client';
// import App from "./App.jsx";
// import "./index.css";
// import "./styles.scss";
// import { NextUIProvider } from "@nextui-org/react";
//
// ReactDom.createRoot(document.getElementById('root')).render(
//   <NextUIProvider>
//     <main className="light text-foreground bg-background">
//       <App />
//     </main>
//   </NextUIProvider>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles.scss";
// import "./globals.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.querySelector("#root");

createRoot(rootElement).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);

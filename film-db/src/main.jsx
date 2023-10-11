import {createRoot} from 'react-dom/client';
import App from "./App.jsx";
import "./index.css";
import "./styles.scss";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <main className="light text-foreground bg-background">
      <App />
    </main>
  </NextUIProvider>
);

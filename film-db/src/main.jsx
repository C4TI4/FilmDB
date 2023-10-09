import {StrictMode} from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { NextUIProvider } from "@nextui-org/react";


ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <NextUIProvider>
    <main className="light text-foreground bg-background">
      <App />
    </main>
  </NextUIProvider>
</StrictMode>,
)
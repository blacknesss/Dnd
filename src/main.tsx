import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import StoreProvider from './storeProvider.tsx';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoreProvider>
            <Global/>
            <App />
        </StoreProvider>
    </StrictMode>,
);

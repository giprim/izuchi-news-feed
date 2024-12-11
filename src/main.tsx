import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider.tsx'
import { RouterProvider } from "react-router-dom";
import routers from './routers.ts';
import { AppProvider } from './context/appProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <Provider>
        <RouterProvider router={routers} />
      </Provider>
    </AppProvider>
  </StrictMode>,
)

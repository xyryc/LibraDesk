import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { RouterProvider } from 'react-router';
import router from './Routes/router.tsx';
import { Provider } from 'react-redux';
import store from './store.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>

 <Provider store={store}>
     <RouterProvider router={router}>
            
    </RouterProvider>
 </Provider>
  
  </StrictMode>,
);

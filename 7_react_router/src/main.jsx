import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Contact from './routes/Contact';
// 2 - página de erro
import ErrorPage from './routes/ErrorPage';

// 1 - configurando router
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';

// 3 - componente base
import Home from "./routes/Home";

// 7 - Rota dinâmica
import Product from './routes/Product';

// 8 - Nested route
import Info from './routes/Info';

//9 - Search
import Search from './routes/Search';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
    // 3 - componente base
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      //7 - rota dinâmica
      {
        path: "products/:id",
        element: <Product />
    },
     //8 - nested route
     {
        path: "products/:id/info",
        element: <Info/>
     },
     //9 - Search
     {
      path: "search",
      element: <Search />
     },
     // 10 - Redirect
     {
      path: "teste",
      element: <Navigate to="/" />
     }
    ]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

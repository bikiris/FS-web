import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/*',
    element: <h1> Error Path</h1>
  }
])

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;
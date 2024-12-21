import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

import ErrorPage from './pages/ErrorPage.jsx';
import CharacterPage from './pages/CharacterPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/test',
    element: <h1>Test</h1>
  },
  {
    path: '/character/:id',
    element: <CharacterPage />
  },
  {
    path: '/*',
    element: <ErrorPage />
  }
])

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;
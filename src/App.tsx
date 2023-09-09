import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
}
from 'react-router-dom';
import HomePage from './pages/home'
import RootLayout from './layouts/rootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<RootLayout/>}>
      <Route index element={<HomePage/>}/>
    </Route>
))

function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App

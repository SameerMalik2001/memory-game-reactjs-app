import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root'
import {Route,RouterProvider, createRoutesFromElements, createBrowserRouter} from 'react-router-dom'
import Easy from './components/Easy'
import Medium from './components/Medium'
import Hard from './components/Hard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Easy/>}/>
      <Route path='easy' element={<Easy/>}/>
      <Route path='medium' element={<Medium/>}/>
      <Route path='hard' element={<Hard/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

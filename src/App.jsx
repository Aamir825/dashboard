import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Products from './Pages/Products/Products'
import Transactions from './Pages/Transactions/Transactions'
import CreateProduct from './Pages/CreateProduct/CreateProduct'
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct'
import { GetProductDatas } from './APIs/GetProductData/GetProductData'
import ThemeContextProvider from './Context/ThemeContextProvider'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Login from './Pages/Admin/Login/Login'
import ProtectedRout from './Components/ProtectedRout/ProtectedRout'
import Signup from './Pages/Admin/Signup/Signup'
import { ToastContainer} from 'react-toastify';
// import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "signup",
      element: <Signup/>
    },
    {
      path: "login",
      element: <Login/>
    },
    {
       path: '/',
       element: (<ProtectedRout><Layout/></ProtectedRout>),
       errorElement: <ErrorPage/>,
       children: [
        {
          path: "",
          element: <Dashboard/>
        },
        {
          path: "products",
          element: <Products/>
        },
        {
          path: "createproduct",
          element: <CreateProduct/>
        },
        {
          path: "products/:prodID",
          element: <UpdateProduct/>,
          loader: GetProductDatas
        },
        {
          path: "transactions",
          element: <Transactions/>
        }
       ]
    }
  ])
  return (
    <>
      <ThemeContextProvider>
      <RouterProvider router={router}/>
      <ToastContainer/>
      </ThemeContextProvider>
    </>
  )
}

export default App

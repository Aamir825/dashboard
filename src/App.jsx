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
// import './App.css'

function App() {

  const router = createBrowserRouter([
    {
       path: '/',
       element: <Layout/>,
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
      </ThemeContextProvider>
    </>
  )
}

export default App

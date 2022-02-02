import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import Categories from './views/category/Categories'
import Order from './views/order/Order'
import AccountPayment from './views/payment/AccountPayment'
import TransactionPayment from './views/payment/TransactionPayment'
import Product from './views/product/Product'
import AddProduct from './views/product/AddProduct'


export default function Routes() {
  return useRoutes([
      {path: '/', element: <Navigate to='/dashboard' replace />},
      {
          path: '/dashboard',
          element: <DashboardLayout />,
          children: [
            { path: 'category', element: <Categories /> },
            { path: 'product', element: <Product /> },
            { path: 'product/new', element: <AddProduct /> },
            { path: 'order', element: <Order /> },
            { path: 'payment', element: <AccountPayment /> },
            { path: 'transaction', element: <TransactionPayment /> }
          ]
      },
      { path: '*', element: <Navigate to='/404' replace /> }
  ])
}

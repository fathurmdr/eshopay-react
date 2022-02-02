import React, { Fragment, useState, useEffect } from 'react'
import apiProduct from '../../api/api-product';
import { useNavigate, NavLink, Link, useLocation } from 'react-router-dom';
import Page from '../../components/commons/Page';
import { Dialog, Menu, Transition } from '@headlessui/react'
//theming toast
import { ToastContainer, toast } from 'react-toastify';
import config from '../../config/config';

import {
    DotsVerticalIcon,
    DuplicateIcon,
    PhotographIcon,
    PencilAltIcon,
    TrashIcon,
    UserAddIcon,
} from '@heroicons/react/solid'


const columns = [
    { name: 'Product Name' },
    { name: 'Description' },
    { name: 'Price' },
    { name: 'Stock' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Product() {
  let navigate = useNavigate();

  const { state } = useLocation();

  const [products, setProducts] = useState([]);
  let [refresh, setRefresh] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
      apiProduct.findAll().then(data => {
          setProducts(data)
          setLoading(false)
      }).catch(error => {
          console.log(error.message);
      });

  }, [])

  useEffect(() => {
    apiProduct.findAll().then(data => {
        setProducts(data)
        setLoading(false)
    }).catch(error => {
        console.log(error.message);
    });
    setRefresh(false);

}, [refresh || (state ? state.refresh : null)]);


  const onDelete = async (id) => {
    apiProduct.deleteRow(id).then(() => {
        setRefresh(true)
        toast.success("Data has been deleted.")
    }).catch(error => {
        toast.success(error.message)
    });

  }

  return (
    <>
      <Page title='Product' buttonTitle='Add Product' onClick={() => navigate('/dashboard/product/new')}>
        <div className="mt-8 sm:block">
          <div className="align-middle inline-block min-w-full border-b border-gray-200">
            <table className="min-w-full">
              <thead className="border-y border-gray-900">
                  <tr>
                      {(columns || []).map(column => (
                          <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">
                              <span className="lg:pl-2">{column.name}</span>
                          </th>
                      ))}

                      <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-900 uppercase tracking-wider" />
                  </tr>
              </thead>
              <tbody className="bg-gray-100 divide-y divide-gray-300">
                {products && products.map((data) => (
                    <tr key={data.prod_id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={`${config.urlImage}/${data.prod_url_image}`} alt={`${data.prod_id}`} />

                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{data.prod_name}</div>
                                    <div className="text-sm text-gray-500">{data.category.cate_name}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.prod_desc}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">Rp. {new Intl.NumberFormat('ID').format(data.prod_price)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">{new Intl.NumberFormat('ID').format(data.prod_stock)}</td>
                        <td className="pr-6">
                            <Menu as="div" className="relative flex justify-end items-center">
                                {({ open }) => (
                                    <>
                                        <Menu.Button className="w-8 h-8 bg-gray-100 inline-flex items-center justify-center text-gray-600 rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ">
                                            <span className="sr-only">Open options</span>
                                            <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                                        </Menu.Button>
                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                static
                                                className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-gray-200 ring-1 ring-gray-900 ring-opacity-5 divide-y divide-gray-300 focus:outline-none"
                                            >
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (

                                                            <Link to='#'

                                                              className={classNames(
                                                                active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                'group flex items-center px-4 py-2 text-sm'
                                                              )}>

                                                                <PencilAltIcon
                                                                    className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                                                                    aria-hidden="true"
                                                                />
                                                                Edit
                                                            </Link>
                                                        )}
                                                    </Menu.Item>

                                                </div>
                                                <div className="py-3">
                                                    <Menu.Item>
                                                        {({ active }) => (

                                                            <Link to='#'

                                                                className={classNames(
                                                                  active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                  'group flex items-center px-4 py-2 text-sm'
                                                                )}>

                                                                <PhotographIcon
                                                                    className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                                                                    aria-hidden="true"
                                                                />
                                                                Upload Images
                                                            </Link>
                                                        )}
                                                    </Menu.Item>

                                                </div>
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="#"
                                                                onClick={() => {
                                                                    if (window.confirm("Delete this record ?"))
                                                                        onDelete(data.prod_id)
                                                                }}
                                                                className={classNames(
                                                                  active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                  'group flex items-center px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                <TrashIcon
                                                                    className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                                                                    aria-hidden="true"
                                                                />
                                                                Delete
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </>
                                )}
                            </Menu>
                        </td>

                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Page>
      <ToastContainer autoClose={2000} />
    </>
  )
}

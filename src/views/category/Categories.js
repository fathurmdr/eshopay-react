import React, { Fragment, useState, useEffect } from 'react'
import apiCategory from '../../api/apiCategory'
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react'
import Page from '../../components/commons/Page';
//theming toast
import { ToastContainer, toast } from 'react-toastify';

import {
    DotsVerticalIcon,
    DuplicateIcon,
    PencilAltIcon,
    TrashIcon,
    UserAddIcon,
} from '@heroicons/react/solid'

// views category
import EditCategory from './EditCategory';
import AddCategoryFormik from './AddCategoryFormik';



const columns = [
  { name: 'Category ID'},
  { name: 'Catgeory Name'}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Categories() {
  const [categories, setCategories] = useState([])
  let [refresh, setRefresh] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [isEditOpen, setIsEditOpen] = useState(false);
  const [editPayload, setEditPayload] = useState();


  // phase componentDidMount, hanya di excute satu kali
  useEffect(()=>{
    apiCategory.list().then(data =>{
      setCategories(data)
    })
  },[])

  // fetch data to backend when refresh === true
  useEffect(() => {
      apiCategory.list().then(data => {
          setCategories(data)
      });
      setRefresh(false);
  }, [refresh]);

  const onEdit = async (id) => {
    setEditPayload(id);
    setIsEditOpen(true)

}

const onDelete = async(id) =>{
    apiCategory.deleteRow(id)
        .then(()=>{
            setRefresh(true);
            toast.success("Data has been delete")
        })
        .catch(error => toast.error(error.message))
}

  return (
    <div>
      <Page title='Category' buttonTitle='Add Category' onClick={() => setIsOpen(true)}>
        <table className="min-w-full">
          <thead className="border-y border-gray-900">
              <tr>
                  {
                      (columns || []).map(col => (
                          <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                              <span className="lg:pl-2">{col.name}</span>
                          </th>
                      ))
                  }
                  <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-900 uppercase tracking-wider" />
              </tr>
          </thead>
          <tbody className="bg-gray-100 divide-y divide-gray-300">
            {
              categories && categories.map(cate =>(
                <tr key={cate.cate_id}>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">{cate.cate_id}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">{cate.cate_name}</td>
                  <td>
                      <Menu as="div" className="relative flex justify-end items-center">
                          {({ open }) => (
                              <>
                                  <div>
                                    <Menu.Button className="w-8 h-8 bg-gray-100 inline-flex items-center justify-center text-gray-600 rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ">
                                        <span className="sr-only">Open options</span>
                                        <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                                    </Menu.Button>
                                  </div>
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
                                                          onClick={() => onEdit(cate.cate_id)}
                                                          className={classNames(
                                                              active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                              'group flex items-center px-4 py-2 text-sm'
                                                          )}
                                                          >

                                                          <PencilAltIcon
                                                              className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                                                              aria-hidden="true"
                                                          />
                                                          Edit
                                                      </Link>
                                                  )}
                                              </Menu.Item>

                                          </div>
                                          <div className="py-1">
                                              <Menu.Item>
                                                  {({ active }) => (
                                                      <Link
                                                          to="#"
                                                          onClick={()=> {
                                                              if(window.confirm("Delete this record")){
                                                                  onDelete(cate.cate_id)
                                                              }
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
              ))
            }
          </tbody>
        </table>
      </Page>
      <div className='z-30' >
        <ToastContainer autoClose={2000}/>
      </div>
      {
          isOpen ? <AddCategoryFormik
              isOpen={isOpen}
              closeModal={() => setIsOpen(false)}
              onRefresh={() => setRefresh(true)}
          /> : null
      }

      {
          isEditOpen ? <EditCategory
              isOpen={isEditOpen}
              closeModal={() => setIsEditOpen(false)}
              onRefresh={() => setRefresh(true)}
              id ={editPayload}
          /> : null
      }
    </div>
  )
}

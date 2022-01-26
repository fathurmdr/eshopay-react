import { Menu, Transition } from '@headlessui/react';
import { DotsVerticalIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiCategory from '../../api/apiCategory';
import Page from '../../components/commons/Page';
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
      <Page title='Category' onClick={() => setIsOpen(true)}>
        <table className="min-w-full">
          <thead>
              <tr className="border-t border-blue-400">
                  {
                      (columns || []).map(col => (
                          <th className="px-6 py-3 border-b border-blue-400 bg-blue-300 text-left text-xs font-medium text-blue-900 uppercase tracking-wider">
                              <span className="lg:pl-2">{col.name}</span>
                          </th>
                      ))
                  }
                  <th className="px-6 py-3 border-b border-blue-400 bg-blue-300 text-left text-xs font-medium text-blue-900 uppercase tracking-wider" />
              </tr>
          </thead>
          <tbody className="bg-blue-200 divide-y divide-blue-900">
            {
              categories && categories.map(cate =>(
                <tr key={cate.cate_id}>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-blue-900">{cate.cate_id}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-blue-900">{cate.cate_name}</td>
                  <td>
                      <Menu as="div" className="relative flex justify-end items-center">
                          {({ open }) => (
                              <>
                                  <div>
                                    <Menu.Button className="w-8 h-8 bg-blue-200 inline-flex items-center justify-center text-blue-600 rounded-full hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-100">
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
                                          className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-blue-200 ring-1 ring-blue-900 ring-opacity-5 divide-y divide-blue-300 focus:outline-none"
                                      >
                                          <div className="py-1">
                                              <Menu.Item>
                                                  {({ active }) => (

                                                      <Link to='#'
                                                          // onClick={() => onEdit(cate.cate_id)}
                                                          className={classNames(
                                                              active ? 'bg-blue-300 text-blue-700' : 'text-blue-900',
                                                              'group flex items-center px-4 py-2 text-sm'
                                                          )}
                                                          >

                                                          <PencilAltIcon
                                                              className="mr-3 h-5 w-5 text-blue-900 group-hover:text-blue-500"
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
                                                          // onClick={()=> {
                                                          //     if(window.confirm("Delete this record")){
                                                          //         onDelete(cate.cate_id)
                                                          //     }
                                                          // }}
                                                          className={classNames(
                                                            active ? 'bg-blue-300 text-blue-700' : 'text-blue-900',
                                                            'group flex items-center px-4 py-2 text-sm'
                                                          )}
                                                      >
                                                          <TrashIcon
                                                              className="mr-3 h-5 w-5 text-blue-900 group-hover:text-blue-500"
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
      <ToastContainer autoClose={2000} />
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

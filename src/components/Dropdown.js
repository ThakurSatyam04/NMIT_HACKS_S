import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Datas from '../sponsor_card_data';
import classNames from 'classnames';

const Dropdown = ({users}) => {

// const handleClick=(e)=>{
//    const text = e.target.textContent;
//    Datas.map((data)=>{
//     if(data.title.includes(text)){
//       props.onClick(data);
//     }
//    })
//   }

  users.map((user)=>{
    return (
        user.domain
    )
  })

  return (
    <>
       <Menu as="div" className=" text-center">
      <div>
        <Menu.Button className="inline-flex ml-2 w-[100px] justify-center gap-x-1.5 rounded-md border border-black  text-text-gray-900 px-3 py-2 text-sm font-semibold  shadow-sm ring-2 ring-inset ring-white hover:bg-gray-300 hover:text-white">
          Filter
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-[250px] left-5 z-10 mt-0 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#" 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                    
                  )}
                >
                  {
                    users.map((user)=>{
                        return (
                            user.domain
                        )
                      })
                  }
                </a>
              )}
            </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition><p className='mt-4'/>
    </Menu>
  </>
  )
}

export default Dropdown


import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../assets/logo.png';

const navigation = [
  { name: 'What is Bored Bunny', href: '#', current: false },
  { name: 'Benefits', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Roadmap', href: '#', current: false },
  { name: 'FAQ', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
    return (
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="container">
                <div className="relative flex items-center justify-between py-3">

                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>

                  <div className="flex-1 flex items-center justify-center lg:justify-between">

                    <div className="flex items-center">
                      <img
                        className="block h-20 w-auto"
                        src={Logo}
                        alt="Bored Ape"
                      />
                    </div>

                    <div className="hidden sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={'text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium'}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                          <a
                            href={"/"}
                            className={'block px-4 py-2 rounded-full text-base font-medium text-neutral-50 bg-gradient-to-r bg-zinc-900'}
                          >
                            Discord
                          </a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
    
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={'text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  <Disclosure.Button
                      as="a"
                      href={"/"}
                      className={'block px-4 py-2 rounded-full text-base font-medium text-neutral-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}
                  >
                    Discord
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>

            </>
          )}
        </Disclosure>
    )
}

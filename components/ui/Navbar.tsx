import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ActiveLink } from '../ActiveLink';
import Link from 'next/link';
import Router from 'next/router';


interface Items {
  texto: string,
  href: string,
}

const menuItems: Items[] = [
  {
    texto: 'Home',
    href: '/',
  },
  //{
  //  texto: 'Contacto',
  //  href: '/contacto',
  //},
  //{
  // texto: 'About',
  //  href: '/about',
  //},
  //{
  //  texto: 'Pricing',
  //  href: '/pricing',
  //},
//];

const Navbar = () => {
  const handleClick = () => {
    Router.push('/favoritos');
  }
  return (
    <>
      <Disclosure as="nav" className="bg-bgDark fixed w-full backdrop-filter backdrop-blur-md z-20">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <a>
                        <img
                          className="block lg:hidden h-10 w-auto"
                          src="https://logolook.net/wp-content/uploads/2021/07/Pokemon-Logo.png"
                          alt="Workflow"
                        />
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <img
                          className="hidden lg:block h-10 w-auto"
                          src="https://logolook.net/wp-content/uploads/2021/07/Pokemon-Logo.png"
                          alt="Workflow"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      {menuItems.map(item => (
                        <Fragment key={`key-${item.href}`}>
                          <ActiveLink texto={item.texto} href={item.href} />
                        </Fragment>
                      ))}
                      {/* <ActiveLink href='/' texto='Home' />
                    <ActiveLink href='/about' texto='About' />
                    <ActiveLink href='/contacto' texto='Contacto' />
                    <ActiveLink href='/pricing' texto='Precio' /> */}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      onClick={handleClick}

                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                  </div>
                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6 text-red-600" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6 text-gray-900" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </Disclosure.Button>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">Tom Cook</div>
                    <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    onClick={handleClick}
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default Navbar

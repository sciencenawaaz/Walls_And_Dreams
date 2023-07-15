import { useState } from 'react'
import { Dialog} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

const [nav, setNav] = useState(false);

  return (
    <header className="shadow-md" >
      <nav className="mx-auto flex min-w-fit items-center justify-between px-2 lg:px-14" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Walls And Dreams</span>
            <img className="h-8 w-auto lg:h-20" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex  lg:hidden">
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden transition duration-150 ease-in-out lg:flex lg:gap-x-12">
          <a href="/projects" className="text-lg font-semibold leading-6 px-3 my-0 py-6 text-gray-900 hover:bg-purple-600  hover:text-white lg:text-7xl">
            Projects
          </a>
          <a href="/about" className="text-lg font-semibold leading-6 px-3 py-6 text-gray-900 hover:bg-purple-600  hover:text-white lg:text-7xl">
            About
          </a>
          <a href="/contact" className="text-lg font-semibold leading-6 px-3 py-6 text-gray-900 hover:bg-purple-600  hover:text-white lg:text-7xl">
            Contact
          </a>
        </div>
      </nav>
      <Dialog as="div" className=" lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 py-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/projects"
                  className="-mx-3 bg-zinc-100 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Projects
                </a>
                <a
                  href="/about"
                  className="-mx-3 bg-zinc-100 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="-mx-3 bg-zinc-100 block rounded-lg  px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 Contact
                </a>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

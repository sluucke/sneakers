import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import BurgerSvg from '../assets/icons/burger.svg'
import AccountSvg from '../assets/icons/account.svg'
import ShoppingSvg from '../assets/icons/shopping-bag.svg'
import FacebookSvg from '../assets/icons/facebook-f.svg'
import InstagramSvg from '../assets/icons/instagram.svg'
import YoutubeSvg from '../assets/icons/youtube.svg'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Sneakers | Initial Page' }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <div className="fixed top-0 mt-8 inset-x-0 z-[999] ">
          <div className="xl:mx-auto mx-8 max-w-6xl outline-none bg-white p-4 backdrop-blur bg-opacity-70 rounded-lg flex items-center justify-between">
            <div className="flex items-center ">
              <nav>
                <Menu>
                  <div className="relative">
                    <Menu.Button className="flex outline-none">
                      <Image
                        src={BurgerSvg}
                        width={40}
                        height={23}
                        alt="Vetor Gráfico"
                        draggable={false}
                      />
                      {/* {({ active }) => {
                        <Image
                          src={BurgerSvg}
                          width={40}
                          height={23}
                          alt="Vetor Gráfico"
                        />
                      }} */}
                    </Menu.Button>
                    <Transition
                      as="div"
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Menu.Items className="flex flex-col absolute top-11 -left-12 h-screen w-screen bg-white bg-opacity-60 backdrop-blur">
                        <div className="mx-12 flex flex-col text-2xl">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`${
                                  active && 'bg-black text-white'
                                } z-50 `}
                                href="/account-settings"
                              >
                                Products
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`${
                                  active && 'bg-black text-white'
                                } z-50 `}
                                href="/account-settings"
                              >
                                Products
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`${
                                  active && 'bg-black text-white'
                                } z-[999] `}
                                href="/account-settings"
                              >
                                Products
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </div>
                </Menu>
              </nav>
              <h1 className="ml-4  sm:text-3xl text-2xl  font-bold text-black tracking-widest">
                SNEAKERS
              </h1>
            </div>
            <div className="flex items-center">
              <div>
                <Image
                  src={AccountSvg}
                  width={26}
                  height={26}
                  alt="Vetor Gráfico"
                />
              </div>
              <div className="ml-4">
                <Image
                  src={ShoppingSvg}
                  width={26}
                  height={26}
                  alt="Vetor Gráfico"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-24">{children}</div>
      <footer className="mt-8 border-t border-black border-opacity-40">
        <div className="flex md:flex-row flex-col justify-between mx-8 xl:max-w-6xl py-8">
          <div>
            <h1 className="text-5xl font-bold text-black tracking-widest">
              SNEAKERS
            </h1>
            <p className="font-montserrat">
              Manhattan, NY 10036, United States
            </p>
            <p className="font-montserrat">844-698-6397</p>
          </div>
          <div className="flex">
            <div className="flex-col">
              <p className="text-2xl font-bold">Company</p>
              <ul className="font-montserrat">
                <li>About</li>
                <li>Jobs</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex-col ml-8">
              <p className="text-2xl font-bold">Userful Links</p>
              <ul className="font-montserrat">
                <li>Cookies Policy</li>
                <li>Policy Privacity</li>
              </ul>
            </div>
          </div>
          <div className='flex justify-between w-52 self-center '>
            <a href="#" className="relative group hover:bg-black rounded-full p-2 flex">
              <Image
                width={30}
                height={30}
                src={FacebookSvg}
                alt="Vetor Gráfico"
                className='group-hover:invert'
              />
            </a>
            <a href="#" className="relative group hover:bg-black rounded-full p-2 flex">
              <Image
                width={30}
                height={30}
                src={InstagramSvg}
                alt="Vetor Gráfico"
                className='group-hover:invert'
              />
            </a>
            <a href="#" className="relative group hover:bg-black rounded-full p-2 flex">
              <Image
                width={30}
                height={30}
                src={YoutubeSvg}
                alt="Vetor Gráfico"
                className='group-hover:invert' 
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

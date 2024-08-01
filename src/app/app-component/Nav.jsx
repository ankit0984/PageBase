"use client"
import React, { useState } from 'react'
import { IoLogoBuffer } from 'react-icons/io'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { tabs } from '../data/data'

const tabs = [
  { name: 'Books', path: '/' },
  { name: 'Notes', path: '/notes' },
  { name: 'PPtx', path: '/pptx' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <nav className="w-full sm:w-auto bg-white bg-opacity-80 backdrop-blur-md shadow-lg sm:rounded-full px-4 sm:px-6 py-2 mt-0 sm:mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <IoLogoBuffer className="h-8 w-8 text-indigo-500" />
              <h1 className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                PageBase
              </h1>
            </div>
            <div className="sm:hidden">
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
            <div className="hidden sm:flex sm:space-x-4 ml-6">
              {tabs.map((tab, index) => (
                  <Link
                      key={index}
                      href={tab.path || '#'}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                          pathname === tab.path
                              ? 'bg-indigo-500 text-white'
                              : 'text-gray-700 hover:bg-indigo-100'
                      }`}
                  >
                    {tab.name}
                  </Link>
              ))}
            </div>
          </div>
          {isMenuOpen && (
              <div className="sm:hidden mt-4 space-y-2">
                {tabs.map((tab, index) => (
                    <Link
                        key={index}
                        href={tab.path || '#'}
                        className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            pathname === tab.path
                                ? 'bg-indigo-500 text-white'
                                : 'text-gray-700 hover:bg-indigo-100'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                      {tab.name}
                    </Link>
                ))}
              </div>
          )}
        </nav>
      </div>
  )
}
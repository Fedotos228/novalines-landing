'use client'

import { useNavigation } from '@/hooks/queries/useNavigation'
import useScreenSize from '@/hooks/useScreenSize'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../header.module.scss'
import { INavItems } from './navigation.types'


export default function Navigation() {
  const { data, isFetched } = useNavigation()
  const screenSizes = useScreenSize()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  if (!isFetched) return null

  return (
    <>
      {screenSizes.width > 767 && (
        <nav className="flex gap-6 lg:gap-12">
          {data.map((item: INavItems) => (
            <Link key={item.id} href={item.href} className={`${styles.navItem}`}>
              {item.title}
            </Link>
          ))}
        </nav>
      )}

      {screenSizes.width <= 767 && (
        <nav
          className={`fixed top-0 -right-96 bottom-0 max-w-96 w-full bg-white transition-all duration-300 ${menuOpen ? '!right-0' : ''
            }`}>
          <button onClick={() => setMenuOpen(false)}>
            <XIcon className="absolute w-7 h-7 top-5 right-5" />
          </button>

          <div className="flex flex-col gap-6 p-6">
            {data.map((item: INavItems) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`${styles.navItem} ${item.href === window.location.pathname ? styles.active : ''
                  }`}>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <div className="flex gap-3 lg:gap-4">
        <button className="text-white/50">Ro</button>
        <button className="text-white">En</button>
        {screenSizes.width <= 767 && (
          <button onClick={() => setMenuOpen(true)}>
            <MenuIcon className="text-white w-8 h-8 ml-2 cursor-pointer" />
          </button>
        )}
      </div>
    </>
  )
}
'use client'

<<<<<<< HEAD
import { useLogo } from '@/hooks/queries/useLogo'
import useScreenSize from '@/hooks/useScreenSize'
import Image from 'next/image'
import Link from 'next/link'
import { LogoSizes } from './header.types'
import Navigation from './navigation/Navigation'
=======
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';
import { LogoSizes } from './header.types';
import useScreenSize from '@/hooks/useScreenSize';
import { MenuIcon, XIcon } from 'lucide-react';
import { naviagationItems } from '@/constants/data';
import { useState } from 'react';
>>>>>>> develop

export default function Header() {
    const { data, isFetched } = useLogo()
    const screenSizes = useScreenSize()

    const logoSizes = (): LogoSizes => {
        if (screenSizes.width < 1024 && screenSizes.width >= 767) {
            return {
                width: 130,
                height: 44,
            }
        } else if (screenSizes.width < 767) {
            return {
                width: 96,
                height: 30,
            }
        }

        return {
            width: 156,
            height: 60,
        }
    }

    const [activeItem, setActiveItem] = useState<string>('');

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <header className="fixed w-full z-10 top-0 py-10">
            <div className="container mx-auto flex px-4 items-center justify-between md:px-0 ">
                <Link href="/">
                    {
                        isFetched &&
                        <Image
                            src={process.env.NEXT_PUBLIC_STRAPI_BASE + data}
                            alt='logo'
                            width={logoSizes().width}
                            height={logoSizes().height}
                        />
                    }
                </Link>
<<<<<<< HEAD
                <Navigation />
=======

                {screenSizes.width > 767 && (
                    <nav className="flex gap-6 lg:gap-12">
                        {naviagationItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => handleItemClick(item.href)}
                                className={`${styles.navItem} ${
                                    item.href === activeItem ? styles.active : ''
                                }`}>
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                )}

                {screenSizes.width <= 767 && (
                    <nav
                        className={`fixed top-0 -right-96 bottom-0 max-w-96 w-full bg-white transition-all duration-300 ${
                            menuOpen ? '!right-0' : ''
                        }`}>
                        <button onClick={() => setMenuOpen(false)}>
                            <XIcon className="absolute w-7 h-7 top-6 right-6" />
                        </button>

                        <div className="flex flex-col gap-6 p-6">
                            {naviagationItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => {
                                        setMenuOpen(false);
                                        handleItemClick(item.href);
                                    }}
                                    className={`${styles.navItem} ${
                                        item.href === activeItem ? styles.active : ''
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
>>>>>>> develop
            </div>
        </header>
    )
}

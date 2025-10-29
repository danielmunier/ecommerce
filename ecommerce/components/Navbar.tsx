"use client"
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import NavbarSidebar from './NavbarSidebar';
import { MenuIcon } from 'lucide-react';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700'],
});


interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({href, children, isActive}: NavbarItemProps) => {
    return (
        <Button asChild variant={"outline"}
        className={cn(" border-transparent  bg-transparent font-semibold hover:bg-transparent rounded-full  " + (isActive ? " text-pink-600  hover:text-none " : " text-gray-600 "))}
        >
           <Link href={href}>
            {children}
           </Link>
        </Button>

    )
}


const navbarItems = [
    {href: "/", children: "Home"},
    {href: "/pricing", children: "Pricing"},
    {href: "/about", children: "About"},

]

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const pathName = usePathname()


    return (
        <nav className='h-20 flex border-b justify-between font-medium bg-white items-center'>
           
           <div className='flex items-center h-full justify-center'>
             <Button className='sm:hidden lg:flex' variant={"ghost"} onClick={() => setIsSidebarOpen(true)} >
                <MenuIcon/>
            </Button>
             <Link href="/" className="pl-3 flex items-center gap-2">
            
                <span className={cn("text-4xl font-semibold", poppins.className)}>
                    sandbox
                </span>
            </Link>
           </div>

        <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />


            <div className='items-center gap-4 hidden lg:flex'>
                {navbarItems.map((item) => (
                    <NavbarItem key={item.href} href={item.href} isActive={pathName === item.href}>
                        {item.children}
                    </NavbarItem>
                ))}

            </div>

            <div className='hidden lg:flex h-full'>
                <Button asChild variant={"secondary"} className='border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-white text-lg transition-colors hover:bg-pink-400 font-bold hover:text-white'>
                    <Link href="/signin">
                        Login
                    </Link>
                </Button>
                <Button asChild className='border-l border-t-0 border-r-0 px-12 h-full rounded-none text-lg transition-colors hover:bg-pink-400 font-bold'>
                    <Link href="/signup">
                        Sign Up
                    </Link>
                </Button>


            </div>

                <div className='lg:hidden flex items-center h-full justify-center'>
                    <Button
                    variant={"ghost"}
                    className='size-12 h-full border-transparent bg-white' onClick={() => setIsSidebarOpen(true)}
                    >
                        <MenuIcon />
                    </Button>

                </div>
        </nav>
    )
}

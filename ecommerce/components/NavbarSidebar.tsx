import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { ScrollArea } from './ui/scroll-area';
import Link from 'next/link';
interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function NavbarSidebar({ items, open, onOpenChange }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side='left'
        className='p-0 transition-none'
      >
        <SheetHeader>
          <div className='flex items-center'>
            <SheetTitle>
              Menu
            </SheetTitle>
          </div>

        </SheetHeader>
    <ScrollArea className='flex flex-col overflow-y-auto h-full pb-2'>
    {items.map((item, index) => (
      <Link
        key={index}
        href={item.href}
        className='p-4 border-b hover:bg-gray-100 w-full block'
        onClick={() => onOpenChange(false)}
      >
        {item.children}
      </Link>
    ))}

 

    </ScrollArea>
      </SheetContent>

    </Sheet>
  )
}

"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useState } from "react"

interface ModalProps {
    title: string
    description: string
    isOpen: boolean
    onClose: () => void
    children?: React.ReactNode

}


export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children,
}) => {

    const [open, setOpen]  = useState(isOpen);

    const onOpenChange = (open: boolean) => {
        setOpen(open)
        if(!open) {
            onClose()
        }
    }

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
            </DialogHeader>
            <div>
                {children}
            </div>
        </DialogContent>
      </Dialog>
    )
}
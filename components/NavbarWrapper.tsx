'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetOverlay,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useMediaQuery } from "@/lib/media";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import React from "react";
export default function NavbarWrapper(){
    const sm = useMediaQuery('640')
    const [openSheet, setOpenSheet] = React.useState(false);
    if (sm)return(
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger className="p-4 self-end absolute">
            <Button variant={'outline'}>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent side={'right'} className={cn(
            "px-2 transition-all min-w-[270px] overflow-y-auto bg-[#F7F9FA]",
        )}>
            <Navbar sm={sm} setOpenSheet={setOpenSheet}></Navbar>
        </SheetContent>
    </Sheet>
    )
    return(
        <Navbar sm={sm} classname='hidden sm:flex'></Navbar>

    )
}
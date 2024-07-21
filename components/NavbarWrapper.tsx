'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useMediaQuery } from "@/lib/media";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
export default function NavbarWrapper(){
    const sm = useMediaQuery('640')
    if (sm)return(
        <Sheet>
        <SheetTrigger className="p-4 self-end absolute">
            <Button variant={'outline'}>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent side={'right'} className={cn(
            "flex flex-col gap-y-2  px-2 transition-all min-w-[270px] overflow-y-auto",
        )}>
            <Navbar></Navbar>
        </SheetContent>
    </Sheet>
    )
    return(
        <Navbar></Navbar>

    )
}
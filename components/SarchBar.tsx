'use client'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Search } from "lucide-react"
import React from "react"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function SearchBar() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])
    return (
        <div>
            <div className="flex items-center relative" cmdk-input-wrapper=""
            >
                <Search className=" left-2 absolute h-4 w-4 shrink-0 opacity-50" />
                <Input
                    className={cn(
                        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                        "pl-8 bg-background"
                    )}
                    onClick={() => setOpen(true)}
                    onFocus={(e)=>{e.preventDefault();e.target.blur()}}
                    placeholder="Search"
                />
                <p className="text-sm text-muted-foreground absolute right-2 flex items-center">
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-sm font-bold">⌘ K</span>
                    </kbd>
                </p>
            </div>

            <div className="fixed">
                <CommandDialog open={open} onOpenChange={setOpen}  >
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <Link href={"/clients"}>
                                <CommandItem 
                                className="cursor-pointer"
                                    onSelect={() => setOpen(false)}
                                >
                                    Clients
                                </CommandItem>
                            </Link>
                            <Link href={"/deals"}>
                                <CommandItem
                                    className="cursor-pointer"
                                    onSelect={() => setOpen(false)}
                                >
                                    Deals
                                </CommandItem>
                            </Link>
                        </CommandGroup>
                    </CommandList>
                </CommandDialog>

            </div>

        </div>
    )
}
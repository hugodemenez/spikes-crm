'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react";
import SearchBar from "./SarchBar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Check, ChevronDown, ChevronsUpDown, Search } from "lucide-react"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import React from "react";
import { CommandList } from "cmdk";
import { DataTable } from "./data-table";
import { columns } from "./columns";



function renderStatus(status: string) {
    switch (status) {
        case 'Pending':
            return <div className="bg-yellow-500 h-2 w-2 rounded-full"></div>;
        case 'Cancelled':
            return <div className="bg-red-500 h-2 w-2 rounded-full"></div>;
        case 'Ongoing':
            return <div className="bg-green-500 h-2 w-2 rounded-full"></div>;
        case 'Waiting for Confirmation':
            return <div className="bg-purple-500 h-2 w-2 rounded-full"></div>;
        case 'Completed':
            return <div className="bg-blue-500 h-2 w-2 rounded-full"></div>;
    }
}

export default function DealsTable({ initialDeals }: { initialDeals: Deal[] }) {


    const [deals, setDeals] = useState(initialDeals); // Initialize state with initial deals


    const handleCheckAll = (checked: boolean) => {
        const updatedDeals = deals.map(deal => ({ ...deal, checked }));
        setDeals(updatedDeals);
    };
    const [openObjectSearch, setOpenObjectSearch] = React.useState(false)
    const [objectSearchValue, setObjectSearchValue] = React.useState("")
    const [openCompanySearch, setOpenCompanySearch] = React.useState(false)
    const [companySearchValue, setCompanySearchValue] = React.useState("")
    const [openStatusSearch, setOpenStatusSearch] = React.useState(false)
    const [statusSearchValue, setStatusSearchValue] = React.useState("")


    return (
        <div className="h-full flex flex-col gap-y-2 overflow-hidden">
            <div className="flex justify-between p-2">
                <div className="flex gap-x-2 items-center max-w-2xl">
                    <div className=" flex items-center relative" >
                        <Search className=" left-2 absolute h-4 w-4 shrink-0 opacity-50" />
                        <Input
                            onChange={(event) => {
                                const value = event.target.value
                                // Reset the deals taking statusSearchValue and companySearchValue into account
                                setDeals(initialDeals.filter(deal =>
                                    (deal.status === statusSearchValue || statusSearchValue === "")
                                    &&
                                    (deal.company === companySearchValue || companySearchValue === "")))
                                if (value === "") {
                                    return
                                }
                                setDeals(deals.filter(deal => deal.object.toLowerCase().includes(value.toLowerCase())))
                            }
                            }

                            className={cn(
                                "flex h-10 w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                                "pl-8"
                            )}
                            placeholder="Search"
                        />
                    </div>
                    <Popover open={openObjectSearch} onOpenChange={setOpenObjectSearch}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={openObjectSearch}
                                className="w-[300px] justify-between"
                            >
                                {objectSearchValue
                                    ? initialDeals.find((deal) => deal.object === objectSearchValue)?.object.length ?? 0 > 22 ? `${initialDeals.find((deal) => deal.object === objectSearchValue)?.object.slice(0, 22)}...` : initialDeals.find((deal) => deal.object === objectSearchValue)?.object
                                    : "Object"}
                                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px] p-0">
                            <Command label="search object command">
                                <CommandList>
                                    <CommandInput placeholder="Search object..." />
                                    <CommandEmpty>No deal found.</CommandEmpty>
                                    <CommandGroup>
                                        {deals.map((deal) => (
                                            <CommandItem
                                                key={deal.object}
                                                value={deal.object}
                                                onSelect={(currentValue) => {
                                                    setObjectSearchValue(currentValue === objectSearchValue ? "" : currentValue)
                                                    setOpenObjectSearch(false)
                                                    if (currentValue === objectSearchValue) {
                                                        // Reset the deals taking statusSearchValue and companySearchValue into account
                                                        setDeals(initialDeals.filter(deal =>
                                                            (deal.status === statusSearchValue || statusSearchValue === "")
                                                            &&
                                                            (deal.company === companySearchValue || companySearchValue === "")))
                                                        return
                                                    }
                                                    setDeals(deals.filter(deal => deal.object === currentValue))
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        objectSearchValue === deal.object ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {deal.object}
                                            </CommandItem>
                                        ))}

                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <Popover open={openCompanySearch} onOpenChange={setOpenCompanySearch}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={openCompanySearch}
                                className="w-[300px] justify-between"
                            >
                                {companySearchValue
                                    ? initialDeals.find((deal) => deal.company === companySearchValue)?.company
                                    : "Company"}
                                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px] p-0">
                            <Command>
                                <CommandList>
                                    <CommandInput placeholder="Search company..." />
                                    <CommandEmpty>No deal found.</CommandEmpty>
                                    <CommandGroup>
                                        {deals.map((deal) => (
                                            <CommandItem
                                                key={deal.company}
                                                value={deal.company}
                                                onSelect={(currentValue) => {
                                                    setCompanySearchValue(currentValue === companySearchValue ? "" : currentValue)
                                                    setOpenCompanySearch(false)
                                                    if (currentValue === companySearchValue) {
                                                        // Reset the deals taking statusSearchValue and companySearchValue into account
                                                        setDeals(initialDeals.filter(deal =>
                                                            (deal.status === statusSearchValue || statusSearchValue === "")
                                                            &&
                                                            (deal.object === objectSearchValue || objectSearchValue === "")))
                                                        return
                                                    }
                                                    setDeals(initialDeals.filter(deal => deal.company === currentValue))
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        companySearchValue === deal.company ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {deal.company}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <Popover open={openStatusSearch} onOpenChange={setOpenStatusSearch}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={openStatusSearch}
                                className="w-[300px] justify-between"
                            >
                                {statusSearchValue
                                    ? initialDeals.find((deal) => deal.status === statusSearchValue)?.status.length ?? 0 > 22 ? `${initialDeals.find((deal) => deal.status === statusSearchValue)?.status.slice(0, 22)}...` : initialDeals.find((deal) => deal.status === statusSearchValue)?.status
                                    : "Status"}
                                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px] p-0">
                            <Command label="search status command">
                                <CommandList>
                                    <CommandInput placeholder="Search status..." />
                                    <CommandEmpty>No deal found.</CommandEmpty>
                                    <CommandGroup>
                                        {Array.from(new Set(initialDeals.map(deal => deal.status))).map((status) => (
                                            <CommandItem
                                                key={status}
                                                value={status}
                                                onSelect={(currentValue) => {
                                                    console.log(currentValue)
                                                    setStatusSearchValue(currentValue === statusSearchValue ? "" : currentValue)
                                                    setOpenStatusSearch(false)
                                                    if (currentValue === statusSearchValue) {
                                                        // Reset the deals taking statusSearchValue and companySearchValue into account
                                                        setDeals(deals.filter(deal =>
                                                            (deal.company === companySearchValue || companySearchValue === "")
                                                            &&
                                                            (deal.object === objectSearchValue || objectSearchValue === "")))
                                                        return
                                                    }
                                                    setDeals(initialDeals.filter(deal => deal.status === currentValue))
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        statusSearchValue === status ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {status}
                                            </CommandItem>
                                        ))}

                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {
                        (objectSearchValue !== "" || companySearchValue !== "" || statusSearchValue !== "") &&
                        <Button variant={'ghost'} onClick={() => {
                            setDeals(initialDeals)
                            setObjectSearchValue("")
                            setCompanySearchValue("")
                            setStatusSearchValue("")
                        }}>X</Button>
                    }

                </div>
                <div className="flex gap-x-2">
                    <Button className="flex gap-x-2" variant={'outline'}>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0312 6.125V11.375C11.0312 11.6651 10.916 11.9433 10.7109 12.1484C10.5058 12.3535 10.2276 12.4687 9.9375 12.4687H2.0625C1.77242 12.4687 1.49422 12.3535 1.2891 12.1484C1.08398 11.9433 0.96875 11.6651 0.96875 11.375V6.125C0.96875 5.83492 1.08398 5.55672 1.2891 5.3516C1.49422 5.14648 1.77242 5.03125 2.0625 5.03125H3.15625C3.3303 5.03125 3.49722 5.10039 3.62029 5.22346C3.74336 5.34653 3.8125 5.51345 3.8125 5.6875C3.8125 5.86155 3.74336 6.02847 3.62029 6.15154C3.49722 6.27461 3.3303 6.34375 3.15625 6.34375H2.28125V11.1562H9.71875V6.34375H8.84375C8.6697 6.34375 8.50278 6.27461 8.37971 6.15154C8.25664 6.02847 8.1875 5.86155 8.1875 5.6875C8.1875 5.51345 8.25664 5.34653 8.37971 5.22346C8.50278 5.10039 8.6697 5.03125 8.84375 5.03125H9.9375C10.2276 5.03125 10.5058 5.14648 10.7109 5.3516C10.916 5.55672 11.0312 5.83492 11.0312 6.125ZM4.2768 3.9643L5.34375 2.89844V7.4375C5.34375 7.61155 5.41289 7.77847 5.53596 7.90154C5.65903 8.02461 5.82595 8.09375 6 8.09375C6.17405 8.09375 6.34097 8.02461 6.46404 7.90154C6.58711 7.77847 6.65625 7.61155 6.65625 7.4375V2.89844L7.7232 3.96594C7.78425 4.02698 7.85672 4.0754 7.93648 4.10844C8.01623 4.14148 8.10172 4.15848 8.18805 4.15848C8.27438 4.15848 8.35986 4.14148 8.43962 4.10844C8.51938 4.0754 8.59185 4.02698 8.65289 3.96594C8.71393 3.90489 8.76236 3.83242 8.79539 3.75266C8.82843 3.67291 8.84544 3.58742 8.84544 3.50109C8.84544 3.41476 8.82843 3.32928 8.79539 3.24952C8.76236 3.16976 8.71393 3.09729 8.65289 3.03625L6.46539 0.848749C6.40442 0.787569 6.33198 0.739026 6.25221 0.705903C6.17244 0.672781 6.08692 0.655731 6.00055 0.655731C5.91418 0.655731 5.82865 0.672781 5.74888 0.705903C5.66912 0.739026 5.59667 0.787569 5.5357 0.848749L3.3482 3.03625C3.28716 3.09729 3.23874 3.16976 3.2057 3.24952C3.17266 3.32928 3.15566 3.41476 3.15566 3.50109C3.15566 3.67544 3.22492 3.84265 3.3482 3.96594C3.47149 4.08922 3.6387 4.15848 3.81305 4.15848C3.9874 4.15848 4.15461 4.08922 4.27789 3.96594L4.2768 3.9643Z" fill="#101828" />
                        </svg>
                        Export
                    </Button>
                    <Button className="flex gap-x-2">
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.5 1.75C0.5 1.35218 0.658035 0.970644 0.93934 0.68934C1.22064 0.408035 1.60218 0.25 2 0.25H6.14C6.36483 0.250028 6.58677 0.300594 6.78942 0.397959C6.99206 0.495323 7.17023 0.636996 7.31075 0.8125L8.36075 2.125H14C14.3978 2.125 14.7794 2.28304 15.0607 2.56434C15.342 2.84564 15.5 3.22718 15.5 3.625V12.25C15.5 12.6478 15.342 13.0294 15.0607 13.3107C14.7794 13.592 14.3978 13.75 14 13.75H2C1.60218 13.75 1.22064 13.592 0.93934 13.3107C0.658035 13.0294 0.5 12.6478 0.5 12.25V1.75ZM8 4.75C8.19891 4.75 8.38968 4.82902 8.53033 4.96967C8.67098 5.11032 8.75 5.30109 8.75 5.5V7H10.25C10.4489 7 10.6397 7.07902 10.7803 7.21967C10.921 7.36032 11 7.55109 11 7.75C11 7.94891 10.921 8.13968 10.7803 8.28033C10.6397 8.42098 10.4489 8.5 10.25 8.5H8.75V10C8.75 10.1989 8.67098 10.3897 8.53033 10.5303C8.38968 10.671 8.19891 10.75 8 10.75C7.80109 10.75 7.61032 10.671 7.46967 10.5303C7.32902 10.3897 7.25 10.1989 7.25 10V8.5H5.75C5.55109 8.5 5.36032 8.42098 5.21967 8.28033C5.07902 8.13968 5 7.94891 5 7.75C5 7.55109 5.07902 7.36032 5.21967 7.21967C5.36032 7.07902 5.55109 7 5.75 7H7.25V5.5C7.25 5.30109 7.32902 5.11032 7.46967 4.96967C7.61032 4.82902 7.80109 4.75 8 4.75Z" fill="white" />
                        </svg>
                        New Deals
                    </Button>
                </div>
            </div>
            {/* <DataTable columns={columns} data={deals}></DataTable> */}
            <Table className="w-full h-full relative flex flex-col">
                <TableHeader className="sticky w-full flex">
                    <TableRow className="w-full bg-muted flex items-center">
                        <TableHead className="w-[50px] flex items-center"><Checkbox onCheckedChange={handleCheckAll} /></TableHead>
                        <TableHead className="w-[100px] flex items-center">Add</TableHead>
                        <TableHead className="w-[300px] flex items-center">Object</TableHead>
                        <TableHead className="w-[300px] flex items-center">Company</TableHead>
                        <TableHead className="w-[300px] flex items-center">Status</TableHead>
                        <TableHead className="flex-1 text-right flex items-center self-end">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className=" flex flex-col h-full flex-1 overflow-auto">
                    {
                        deals.map((deal) => (
                            <TableRow key={deal.id} className="">
                                <TableCell className="w-[50px]"><Checkbox checked={deal.checked} /></TableCell>
                                <TableCell className="w-[100px]">{deal.date}</TableCell>
                                <TableCell className="w-[300px]">{deal.object.length > 22 ? `${deal.object.slice(0, 22)}...` : deal.object}</TableCell>
                                <TableCell className="w-[300px]">
                                    <div className="flex items-center gap-x-2">
                                        {deal.companyIcon}{deal.company}
                                    </div>
                                </TableCell>
                                <TableCell className="w-[300px]">
                                    <div className="flex gap-x-2 items-center">
                                        {renderStatus(deal.status)}
                                        {deal.status}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right w-[200px]">{deal.amount}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}


'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import NewDealForm from "./NewDealForm"
import React from "react"


export default function NewDealButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex gap-x-2 max-h-8">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 1.75C0.5 1.35218 0.658035 0.970644 0.93934 0.68934C1.22064 0.408035 1.60218 0.25 2 0.25H6.14C6.36483 0.250028 6.58677 0.300594 6.78942 0.397959C6.99206 0.495323 7.17023 0.636996 7.31075 0.8125L8.36075 2.125H14C14.3978 2.125 14.7794 2.28304 15.0607 2.56434C15.342 2.84564 15.5 3.22718 15.5 3.625V12.25C15.5 12.6478 15.342 13.0294 15.0607 13.3107C14.7794 13.592 14.3978 13.75 14 13.75H2C1.60218 13.75 1.22064 13.592 0.93934 13.3107C0.658035 13.0294 0.5 12.6478 0.5 12.25V1.75ZM8 4.75C8.19891 4.75 8.38968 4.82902 8.53033 4.96967C8.67098 5.11032 8.75 5.30109 8.75 5.5V7H10.25C10.4489 7 10.6397 7.07902 10.7803 7.21967C10.921 7.36032 11 7.55109 11 7.75C11 7.94891 10.921 8.13968 10.7803 8.28033C10.6397 8.42098 10.4489 8.5 10.25 8.5H8.75V10C8.75 10.1989 8.67098 10.3897 8.53033 10.5303C8.38968 10.671 8.19891 10.75 8 10.75C7.80109 10.75 7.61032 10.671 7.46967 10.5303C7.32902 10.3897 7.25 10.1989 7.25 10V8.5H5.75C5.55109 8.5 5.36032 8.42098 5.21967 8.28033C5.07902 8.13968 5 7.94891 5 7.75C5 7.55109 5.07902 7.36032 5.21967 7.21967C5.36032 7.07902 5.55109 7 5.75 7H7.25V5.5C7.25 5.30109 7.32902 5.11032 7.46967 4.96967C7.61032 4.82902 7.80109 4.75 8 4.75Z" fill="white" />
                    </svg>
                    New Deals
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a new table entry</DialogTitle>
                    <DialogDescription>
                        <NewDealForm ></NewDealForm>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
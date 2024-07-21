'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";

import SearchBar from "./SarchBar";
import { cn } from "@/lib/utils";
import NavItem from "./NavItem";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import UserCard from "./UserCard";
import React from "react";


export default function Navbar() {
    const numberOfDeals = 10
    const numberOfLeads = 30

    return (
            <nav
                id="left-pane"
                className={cn(
                    "flex-col gap-y-2  px-2 transition-all",
                    "min-w-[270px] overflow-y-auto hidden sm:flex"
                )}
            >
                <Image src={"/logo.png"} width={42} height={42} alt={"crm logo"}></Image>
                <SearchBar></SearchBar>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-muted-foreground text-sm">Navigation</h2>
                    <NavItem path="home"></NavItem>
                    <NavItem path="clients"></NavItem>
                    <NavItem path="leads"></NavItem>
                    <NavItem path="deals"></NavItem>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-muted-foreground text-sm">Your Lists</h2>
                    <NavItem path="inbound"></NavItem>
                    <NavItem path="outbound"></NavItem>
                    <NavItem path="ads"></NavItem>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-muted-foreground text-sm"></h2>
                    <NavItem path="notifications"></NavItem>
                    <NavItem path="settings"></NavItem>
                </div>

                <div className="flex flex-col justify-between h-full pt-12">
                    <Card className="mb-2">
                        <CardHeader>
                            <CardTitle className="flex gap-x-2 text-sm">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 11.25L6 12.75L9.375 9.375M6 6V3.9C6 3.05992 6 2.63988 6.16349 2.31901C6.3073 2.03677 6.53677 1.8073 6.81901 1.66349C7.13988 1.5 7.55992 1.5 8.4 1.5H14.1C14.9401 1.5 15.3601 1.5 15.681 1.66349C15.9632 1.8073 16.1927 2.03677 16.3365 2.31901C16.5 2.63988 16.5 3.05992 16.5 3.9V9.6C16.5 10.4401 16.5 10.8601 16.3365 11.181C16.1927 11.4632 15.9632 11.6927 15.681 11.8365C15.3601 12 14.9401 12 14.1 12H12M3.9 16.5H9.6C10.4401 16.5 10.8601 16.5 11.181 16.3365C11.4632 16.1927 11.6927 15.9632 11.8365 15.681C12 15.3601 12 14.9401 12 14.1V8.4C12 7.55992 12 7.13988 11.8365 6.81901C11.6927 6.53677 11.4632 6.3073 11.181 6.16349C10.8601 6 10.4401 6 9.6 6H3.9C3.05992 6 2.63988 6 2.31901 6.16349C2.03677 6.3073 1.8073 6.53677 1.66349 6.81901C1.5 7.13988 1.5 7.55992 1.5 8.4V14.1C1.5 14.9401 1.5 15.3601 1.66349 15.681C1.8073 15.9632 2.03677 16.1927 2.31901 16.3365C2.63988 16.5 3.05992 16.5 3.9 16.5Z" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Deals
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent className="text-xs flex flex-col gap-y-2">
                            <Progress className="h-2" value={numberOfDeals} max={numberOfLeads} />
                            <p>{numberOfDeals} Deals left from {numberOfLeads}</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="flex gap-2 w-full">
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.5057 4.43066C21.2931 4.25564 21.0298 4.14422 20.7495 4.11067C20.4691 4.07711 20.1845 4.12296 19.9321 4.24232L15.7719 6.19066L12.2238 0.64982C12.0966 0.451565 11.9171 0.287549 11.7027 0.173691C11.4882 0.0598329 11.246 0 10.9997 0C10.7533 0 10.5111 0.0598329 10.2966 0.173691C10.0822 0.287549 9.90266 0.451565 9.77555 0.64982L6.22741 6.19066L2.06634 4.24316C1.81416 4.1248 1.53033 4.07921 1.25061 4.11213C0.970893 4.14505 0.707804 4.25501 0.494486 4.42814C0.281168 4.60128 0.127164 4.82985 0.051875 5.08507C-0.0234136 5.34029 -0.0166187 5.61073 0.0714038 5.86232L3.35343 15.3082C3.40286 15.4505 3.48566 15.5805 3.59574 15.6888C3.70582 15.797 3.84035 15.8806 3.98942 15.9335C4.13849 15.9864 4.29829 16.0071 4.45704 15.9942C4.61578 15.9813 4.76942 15.9351 4.90662 15.859C4.92791 15.8473 7.12953 14.6665 10.9979 14.6665C14.8662 14.6665 17.0678 15.849 17.0847 15.8582C17.2219 15.9353 17.3758 15.9824 17.5351 15.9959C17.6943 16.0095 17.8547 15.9892 18.0045 15.9365C18.1542 15.8838 18.2894 15.8001 18.4 15.6916C18.5105 15.5831 18.5937 15.4526 18.6432 15.3098L21.9252 5.86899C22.0158 5.61726 22.0243 5.34584 21.9495 5.08956C21.8748 4.83328 21.7202 4.60383 21.5057 4.43066ZM16.988 13.6265C15.8038 13.1998 13.7654 12.6665 10.9979 12.6665C8.23034 12.6665 6.19193 13.2015 5.00774 13.6282L2.61275 6.73566L5.85309 8.24983C6.17512 8.39913 6.54501 8.42966 6.88982 8.33541C7.23463 8.24116 7.52935 8.02896 7.71586 7.74066L10.9979 2.61649L14.2799 7.74149C14.4664 8.0298 14.7612 8.24194 15.106 8.33605C15.4509 8.43016 15.8208 8.39939 16.1427 8.24983L19.3821 6.73316L16.988 13.6265Z" fill="white" />
                                </svg>
                                Upgrade to pro
                            </Button>
                        </CardFooter>
                    </Card>
                    <UserCard></UserCard>
                </div>
            </nav>
    )
}
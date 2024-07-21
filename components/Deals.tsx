'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import DealsTable from "./DealsTable"
import { useLocalStorage } from "@/lib/localStorage"
import { RefreshCcw } from "lucide-react"
import { Button } from "./ui/button"
import { set } from "react-hook-form"


const dealsData: Deal[] = [
    {
        id: 1,
        checked: false,
        date: "Jan. 24",
        object: "Product Design : Payment page",
        company: "Stripe Inc.",
        companyIcon: "/stripe.png",
        status: "Pending",
        amount: "7.800 $USD",
    },
    {
        id: 2,
        checked: false,
        date: "Jan. 24",
        object: "App Redesign : Onboarding",
        company: "Github Corp.",
        companyIcon: "/github.png",
        status: "Cancelled",
        amount: "12.800 $USD",
    },
    {
        id: 3,
        checked: false,
        date: "Dec. 23",
        object: "Pitch Deck B2B",
        company: "Amazon",
        companyIcon: "/amazon.png",
        status: "Ongoing",
        amount: "14.000 $USD",
    },
    {
        id: 4,
        checked: false,
        date: "Oct. 23",
        object: "Mobile App, UX Audit",
        company: "Steam",
        companyIcon: "/steam.png",
        status: "Waiting for Confirmation",
        amount: "2.000 $USD",
    },
    {
        id: 5,
        checked: false,
        date: "Oct. 23",
        object: "Splash Screen Illustrator",
        company: "Adobe LLC.",
        companyIcon: "/adobe.png",
        status: "Completed",
        amount: "5.500 $USD",
    },
    {
        id: 6,
        checked: false,
        date: "Oct. 23",
        object: "Features Add",
        company: "The Browser Company",
        companyIcon: "/arc.png",
        status: "Pending",
        amount: "14.500 $USD",
    },
    {
        id: 7,
        checked: false,
        date: "Sept. 23",
        object: "Brand Guidelines",
        company: "Figma",
        companyIcon: "/figma.png",
        status: "Completed",
        amount: "21.500 $USD",
    },
    {
        id: 8,
        checked: false,
        date: "Sept. 23",
        object: "New messages UX",
        company: "Slack Inc.",
        companyIcon: "/slack.png",
        status: "Ongoing",
        amount: "1.900 $USD",
    },
    {
        id: 9,
        checked: false,
        date: "Sept. 23",
        object: "Landing page",
        company: "Opensea",
        companyIcon: "/opensea.png",
        status: "Pending",
        amount: "2.300 $USD",
    },
]



export default function Deals() {
    const [initialDeals, setInitialDeals] = useLocalStorage<Deal[]>('deals', dealsData)

    return (
        <Card className="h-full flex flex-col w-full border-r-0 rounded-r-none">
            <CardHeader className="flex pb-2">
                <CardTitle>
                    Deals
                </CardTitle>
            </CardHeader>
            <CardContent className="h-full w-full flex flex-col flex-1 box-border overflow-hidden pr-0 pb-0">
                <Tabs defaultValue="all-deals" className="flex flex-col h-full w-full gap-y-9 overflow-clip ">
                    <TabsList className="flex self-start">
                        <TabsTrigger value="all-deals">All Deals</TabsTrigger>
                        <TabsTrigger value="completed">Completed ({initialDeals.filter(deal => deal.status === 'Completed').length})</TabsTrigger>
                        <TabsTrigger value="pending">Pending  ({initialDeals.filter(deal => deal.status === 'Pending').length})</TabsTrigger>
                        <TabsTrigger value="ongoing">Ongoing ({initialDeals.filter(deal => deal.status === 'Ongoing').length})</TabsTrigger>
                        <TabsTrigger value="waiting-for-confirmation">Waiting for Confirmation ({initialDeals.filter(deal => deal.status === 'Waiting for Confirmation').length})</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all-deals" asChild>
                        <DealsTable initialDeals={initialDeals}></DealsTable>
                    </TabsContent>
                    <TabsContent value="completed" className="flex flex-col h-full w-full" asChild>
                        <DealsTable initialDeals={initialDeals.filter(deal => deal.status === 'Completed')}></DealsTable>
                    </TabsContent>
                    <TabsContent value="pending" className="flex flex-col h-full w-full" asChild>
                        <DealsTable initialDeals={initialDeals.filter(deal => deal.status === 'Pending')}></DealsTable>
                    </TabsContent>
                    <TabsContent value="ongoing" className="flex flex-col h-full w-full" asChild>
                        <DealsTable initialDeals={initialDeals.filter(deal => deal.status === 'Ongoing')}></DealsTable>
                    </TabsContent>
                    <TabsContent value="waiting-for-confirmation" className="flex flex-col h-full w-full" asChild>
                        <DealsTable initialDeals={initialDeals.filter(deal => deal.status === 'Waiting for Confirmation')}></DealsTable>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}
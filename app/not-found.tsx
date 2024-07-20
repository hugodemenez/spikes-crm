'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
    return (
        <div className="flex w-full h-full justify-center items-center">
        <Link href={"/deals"}>
          <Button>Navigate to deals page</Button>
        </Link>
        </div>
    );
}
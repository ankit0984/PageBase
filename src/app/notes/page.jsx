import React from 'react'
import Image from "next/image";
import Nav from "@/app/app-component/Nav";

function Page() {
    return (
        <div>
            <Nav/>
            <Image src="/assets/404.json" alt="test" width={400} height={400} />
        </div>
    )
}

export default Page

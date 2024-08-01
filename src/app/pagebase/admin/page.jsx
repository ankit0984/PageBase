"use client"
import Navigation from '@/app/bookdb/admin-component/Navbar'
import React from 'react'
import Tablecomp from "@/app/bookdb/admin-component/Tablecomponent";

function page() {
    return (
        <div>
            <Navigation/>
            <Tablecomp/>
        </div>
    )
}

export default page





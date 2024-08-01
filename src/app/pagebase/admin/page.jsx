"use client"
import React from 'react'
import Navigation from '@/app/pagebase/admin/admin-component/Navbar'

import Tablecomp from "@/app/pagebase/admin/admin-component/Tablecomponent";
import {withAuth} from "@/app/utils/clerk";


function page() {

    return (
        <div>
            <Navigation/>
            <Tablecomp/>
        </div>
    )
}

export default withAuth(page);





"use client"
import React from 'react'
import Navigation from "@/app/pagebase/admin/admin-component/Navbar";
import NotesComp from "@/app/pagebase/admin/admin-component/notesComp";
import {withAuth} from "@/app/utils/clerk";

function Page() {
    return (
        <>
            <Navigation/>
            <NotesComp/>
        </>
    )
}
export default withAuth(Page);
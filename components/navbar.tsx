"use client"

import Link from "next/link"
import Image from "next/image"
import {NavLinks} from "@/constants/index"
import ProfileMenu from "./ProfileMenu"
import {signOut} from "next-auth/react"
import AuthProviders from "./authproviders"
import { GetUser } from "@/lib/session"
const Navbar =  async () =>{
    const session = await GetUser()
    return (
     <nav className=" flexbetween navbar" >
<div className=" flex-1 flexStart gap-10">
    <Link href="/">
<Image 
src="logo.svg"
width={115}
height={45}
alt="flx"
/>
    </Link>
    <ul className=" xl:flex hidden text-small gap-7">
{NavLinks.map((link) =>(
    <Link href={link.href} key={link.key }>
        {link.text}
        </Link>
))}
    </ul>
</div>
<div className=" flexcentre gap-4">
{session?.user ? (
    <>
<ProfileMenu session={session}/>
<Link href="/create-project">
     Share work
     </Link>
     <button type="button" className="text-sm" onClick={() =>signOut}>
        SignOut
     </button>

    </>
):(
<AuthProviders/>
)}

</div>

     </nav>
    )
}
export default Navbar
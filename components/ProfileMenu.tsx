"use client"

import { SessionInterface } from "@/commun.types"
import Link from "next/link"
import Image from "next/image"
const ProfileMenu = ({session } :{session :SessionInterface}) =>{
    return(
        <>
              { session?.user?.image &&(
            <Link href={`profile/${session.user.id}`}>
              <Image 
        src={session?.user?.image}
        alt=""
        width={40}
        height={40}
        />
            </Link>
    
        )
    }
        </>
   
    )
}
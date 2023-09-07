import { Menu } from "@headlessui/react"
import Image from "next/image"
import { Fragment } from "react"
type Props = {
    type? : string
title : string
state :string 
setState : (value :string) => void 
filters :Array<string> 

}
const CustomMenu =({title , setState , state ,filters}:Props) =>{
    return (
        <div className="flexStart flex-col w-full gap-7 relative ">
<label htmlFor={title} className=" w-full text-gray-100" >
    {title}
     </label>
     <Menu as="div" className="self-start relative">
        <div>
        <Menu.Button className="flexCentre custom_menu-btn">
{state ||"Select a category" }
<Image 

src="/arrow-down.svg"
width={10}
height={5}
alt="Arrow down"
/>
</Menu.Button> 

        </div>
        <Menu.Items  className="flexStart custom_menu-items">
            {filters.map((itm) =>(
                <Menu.Item key={itm}>
                    <button type="button" value={itm} className="custom_menu-item" onClick={(e) => setState(e.currentTarget.value)}>
{itm}

                    </button>
                </Menu.Item>
            ))}
        </Menu.Items>
     </Menu>


        </div>
    )
}
export default CustomMenu
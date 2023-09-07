 "use client"
 import Image from "next/image"
 import FormField from "./FormField"
 import { SessionInterface ,FormState } from "@/commun.types"
 import CustomMenu from "./CustomMenu"
 import react , {useState,ChangeEvent , FormEvent } from "react"
interface  Props{
    type :string ,
    userSession : SessionInterface
}

const ProjectForm = ({type , userSession} : Props) =>{
    const [form, setForm] = useState<FormState>({
        title:   "",
        description:  "",
        image: "",
        liveSiteUrl: "",
        githubUrl:  "",
        category:  ""
    })
    const handSubmit = (e  :FormEvent) =>{

    }

    const handleChangeImage =(e :ChangeEvent<HTMLInputElement>) =>{

    }
    const handlestateChange= (name :string , value :string) =>{

    }
    return (
        <form
        onSubmit={handSubmit}
        className="flexStart form"
        >
<div className="flexStart form form_image_container "> 
<label htmlFor="Poster" className="flexcentre form image_label">
{!form.image && "add Image"}

</label>
<input id="Image" 
type="file"
accept="image/*"
required={type === "create"}
className="form_image-input"
onChange={handleChangeImage }
/>
{form.image && (
    <Image 
    src={form.image} 
    className=" sm:p-10 object-contain z-10" 
    fill
    alt=""
    />
)  }
</div>
<FormField
title ="Title"
state ={form.title}
placeHolder ="flexbble"
setState ={(value) => handlestateChange("title" , value)}
isTextArea


/>
<FormField
title ="Descripction"
state ={form.title}
placeHolder ="SHow case and Discover"
setState ={(value) => handlestateChange("descripction" , value)}
isTextArea


/>
<FormField
type="url"
title ="liveStyleUrl"
state ={form.liveStyleUrl}
placeHolder ="https://yutube.com"
setState ={(value) => handlestateChange("liveStyleUrl" , value)}
isTextArea
/>

<FormField
type="url"
title ="githubUrl"
state ={form.githubUrl}
placeHolder ="https://github.com"
setState ={(value) => handlestateChange("githubUrl" , value)}
isTextArea
/>
<CustomMenu 
title="Category"
state={form.}



/>
<div className=" flexStart w-full ">
    <button >Create</button>
</div>
        </form>
    )
}
export default ProjectForm
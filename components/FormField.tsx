
type Props = {
    type? : string
title : string
state :string 
setState : (value :string) => void 
isTextArea :boolean 
placeHolder : string
}

const FormField = ({title,state , isTextArea ,type , setState ,placeHolder  } : Props) =>{
    return (
       <div className=" flexStart flex-col  w-full gap-4 ">
<label className=" w-full text-gray-100">
    {title}
</label>
{isTextArea ? (
    <textarea placeholder={placeHolder} value={state} required className=" form_field-input"
    onChange={(e) => setState(e.target.value)}
    />
) :(
    <input placeholder={placeHolder} value={state} required className=" form_field-input"
    onChange={(e) => setState(e.target.value)}/>
)}

       </div>
    )
}
export default FormField
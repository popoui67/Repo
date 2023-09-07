
import { getUserQuery , createUserMutation } from "@/garphql";
import { GraphQLClient } from "graphql-request";
const isProduction = process.env.NODE_ENV === "production"
const client = new GraphQLClient("apiUrl")
const apiUrl = isProduction  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || "" :
"//// targets"

const apikey  = isProduction ?  process.env.NEXT_PUBLIC_GRAFBASE_API_KEY  || "" :
"NOW"
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : ""


const MakeGraphQLrequest  = async (query :string , variable ={}) => {
try{

return  await client.request(query , variable)
}
catch(err : any) {
    console.log(err)
}
}

export const getUser  =  (email :string) =>{
    client.setHeader("x-api-key" , apikey)
    return MakeGraphQLrequest(getUserQuery ,{email})

}
export const createUser =(name :string , email :string , avatarUrl :string) =>{
    client.setHeader("x-api-key" , apikey)
    const variable  ={
    input :{
        name , email , avatarUrl
    }
}

return MakeGraphQLrequest(createUserMutation , variable)


}
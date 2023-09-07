import {getServerSession} from "next-auth/next"
import {NextAuthOptions , User } from "next-auth"
import {AdapterUser} from "next-auth/adapters"
import GoooleProvider from "next-auth/providers/google"
import jsonwebtoken from "jsonwebtoken"
import { JWT } from "next-auth/jwt"
import { SessionInterface, UserProfile } from "@/commun.types"
import { createUser , getUser } from "./action"
export const authOptions : NextAuthOptions={
    providers:[
        GoooleProvider({
            clientId:"" ,
            clientSecret :''
        } ,)

    ] ,jwt :{
        /*
encode :({secret , token}) =>{

} , 
decode :async ({secret , token}) =>{

} ,
*/},theme :{
        colorScheme :"light" ,
        logo : "logo."
    },
    callbacks :{
        async session ({session}){
return session
        } ,
        async  signIn({user} :{user :AdapterUser | User}) {
             try{ 
                const userExists = await getUser(user?.email as string )  as {user? : UserProfile }
                if(!userExists) {
await createUser( user.name as string , user.email as string , user.image as string)
                }
return true
             }
             catch (err : any) {
                console.log(err)
                return false
             }
         }
    }
}
export async function  GetUser () {
    const session = await getServerSession(authOptions) as SessionInterface
    return session
}
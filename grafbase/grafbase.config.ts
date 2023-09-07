import { g, auth, config } from '@grafbase/sdk'
/*
//@ts-ignore
const User = g.model("User" ,{
  name : g.string().length({min:2 , max: 20}),
  email :g.string().unique() ,
  avatarUrl : g.url() ,
  descripction : g.string() ,
  githubUrl : g.url().optional() ,
  linkedInUrl : g.url().optional() ,
  projects : g.relation( () => Project).list().optional()

}).auth((rules) =>
{rules.public().read()})
//@ts-ignore
const Project =g.model("Projects" ,{
  title : g.string().length({min:3}),
  description :g.string() ,
  image : g.url() ,
  liveSiteUrl : g.url() ,
  githubUrl : g.url().optional() ,
  category : g.string().search() ,
  createBy : g.relation(() => User)
}).auth((rule) => {
  rule.public().create().delete().update()
})
const jwt = auth.JWT({
  issuer :"grafbase" ,
secret :g.env("NEXT_AUTH_TOKEN")  
})
*/

export default config({
  schema: g ,
  /*
auth:{
  providers :[jwt], 
  rules :(rules) => rules.private()
}
*/

})

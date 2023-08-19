// import { g, auth, config } from '@grafbase/sdk'
// import Email from 'next-auth/providers/Email'
// import { rule } from 'postcss'

// const User=g.model('User',{
//   name:g.string().length({min:2,max:20}),
//   Email:g.Email().unique(),
// })

// const Product =g.model('Product',{
//   title: g.string().length({min:3,max:20}),
//   category: g.string().length({min:2}),
//   Image:g.url(),
//   description: g.string().length({min:50,max:2000})
// }).auth((rules)=>{
//   rules.public().read(),
//   rules.private().create().delete().update()
// })
// const jwt =auth.JWT({
//   issuer: 'grafbase',
//   secret : g.env('NEXTAUTH_SECRET'),
// })
// export default config({
//   schema: g,
//   auth:{
//     providers:[jwt],
//     rules: (rules)=> rules.private(),
//   }
// })

import { g, config, auth } from '@grafbase/sdk';

// @ts-ignore
const User = g.model('User', {
  name: g.string().length({ min: 2, max: 100 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
}).auth((rules) => {
  rules.public().read()
})

// @ts-ignore
const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(), 
  image: g.url(),
  category: g.string().search(),
}).auth((rules) => {
  rules.public().read()
  rules.private().create().delete().update()
})

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret:  g.env('NEXTAUTH_SECRET')
})

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private()
  },
})

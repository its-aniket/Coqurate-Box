import { g, auth, config } from '@grafbase/sdk'
import Email from 'next-auth/providers/email'

const User=g.model('User',{
  name:g.string().length({min:2,max:20}),
  Email:g.email().unique(),
})

const Product =g.model('Product',{
  title: g.string().length({min:3,max:20}),
  category: g.string().length({min:2}),
  Image:g.url(),
  description: g.string().length({min:50,max:2000})
})

export default config({
  schema: g
})

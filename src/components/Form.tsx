'use client'

import { createUser } from "@/lib/action"
import { userSchema, UserSchemaData } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


export default function UserForm (){

const {
  register,
  handleSubmit,
  formState: {errors},
} = useForm <UserSchemaData>({
  resolver:zodResolver(userSchema)
})

const onSubmit = async (data: UserSchemaData)=>{
try {
  await createUser(data)
} catch (error) {
  alert(error)
}
}

  return(
    <form onSubmit={handleSubmit(onSubmit)}> 
    <div className="flex flex-col border rounded  p-8 gap-2 bg-sky-300">
    <label >Name</label>
    <input {...register("name")}type="name" placeholder="name here" className="ring-1 rounded p-2"/>
    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
    <label >Name</label>
    <input {...register("email")}type="email" placeholder="email here" className="ring-1 rounded p-2"/>
    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
    <label >Name</label>
    <input {...register("password")}type="password" placeholder="password here" className="ring-1 rounded p-2"/>
    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
    <button type="submit" className="ring-1 p-2 text-white bg-amber-800 rounded ">Submit</button>
    </div>
    </form>
  )
}


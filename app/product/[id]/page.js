"use client"
import SingleProduct from "@/app/components/SingleProduct"
import { useParams } from "next/navigation"
const page = () => {
  const { id } = useParams()

  return (
    <div >
        <SingleProduct  id={id} />

    </div>
  )
}

export default page
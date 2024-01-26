"use client"
import { usePathname } from "next/navigation"
import "./index.scss"

export default function PageInDev() {
    const path = usePathname()
    return(
        <h1 className="in-development">{path} page in development..</h1>
    )
}
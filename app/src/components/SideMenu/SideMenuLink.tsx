"use client"
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import React from 'react'

type SideMenuLinkProps = {
    text: string | any
    svg: React.ReactNode | any
    updateState? : any
}

const  SideMenuLink:FC<SideMenuLinkProps> = ({text, svg, updateState}) => {

    const [active, setActive] = useState(false)
    const path = usePathname()
    const textToLowerCase = text.toLowerCase()

    useEffect(() => {
        if(updateState) {      
            updateState(active)
        }
        if (path === `/${textToLowerCase}`) {
          setActive(true)
        } else {
          setActive(false)
        }
      }, [path, text, updateState])

      const color = active ? "white" : "#9197B3";

    return (
        <li className='list-menu__wrap'>
            <Link href={textToLowerCase}  className={`list-menu__item ${active ? 'active-link': ''}`}>
                <div className="menu-content__wrap"> 
                    {React.cloneElement(svg, { color })}
                    <p className="menu__name" >{text}</p>
                </div>
                <p className='menu__chevron'>&#10095;</p>  
            </Link>
        </li>
    )
}

export default SideMenuLink;
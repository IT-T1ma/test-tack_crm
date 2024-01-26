import Image from 'next/image'
import logoImg from '../../../public/logo.svg'
import './index.scss'

export function Logo () {

    return(
        <>
            <Image src={logoImg} className="logo__icon" alt="Picture of logo icon"/>
            <h1 className="logo__name">Dashboard</h1>
            <p className="logo__version">v.01</p>
        </>
    )
}
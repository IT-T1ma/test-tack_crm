import Image from 'next/image'
import searchImg from '../../../public/search.svg'
import './index.scss'

export default function Search () {

    return (
        <form className='search'>
            <Image src={searchImg} alt="" className='search__icon' />
            <input type="text" className="search__input" placeholder="Search" />
        </form>
    )
}
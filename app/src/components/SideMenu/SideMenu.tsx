"use client"
import Image from 'next/image'
import photoImg from '../../../public/photo.png'
import SideMenuLink from './SideMenuLink'
import {Logo} from '@/ui/Logo/Logo'
import {CustomersSvg} from '@/svg/CustomersSvg'
import {DashboardSvg} from '@/svg/DashboardSvg'
import {ProductSvg} from '@/svg/ProductSvg'
import {IncomeSvg} from '@/svg/IncomeSvg'
import {PromoteSvg} from '@/svg/PromoteSvg'
import {HelpSvg} from '@/svg/HelpSvg'
import './index.scss'
import { FC, useState } from 'react'

const SideMenu: FC = () => {
    const [active, setActive] = useState(false);

    const updateState = (value: boolean) => {
        setActive(value);
    };

    return (
        <div className="side-menu">
            <div className="side-menu__logo logo">
                <Logo />
            </div>
            <ul className="side-menu__list">
                {[
                    { text: 'Dashboard', svg: <DashboardSvg /> },
                    { text: 'Product', svg: <ProductSvg /> },
                    { text: 'Customers', svg: <CustomersSvg /> },
                    { text: 'Income', svg: <IncomeSvg /> },
                    { text: 'Promote', svg: <PromoteSvg /> },
                    { text: 'Help', svg: <HelpSvg /> },
                ].map((menuItem, index) => (
                    <SideMenuLink key={index} updateState={updateState} {...menuItem} />
                ))}
            </ul>
            <div className="side-menu__profile profile">
                <Image src={photoImg} className="profile__photo" alt="profile photo" />
                <div className="profile__info">
                    <div className="profile__name">Evano</div>
                    <div className="profile__position">Project Manager</div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
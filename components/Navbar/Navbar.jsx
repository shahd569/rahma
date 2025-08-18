"use client"
import Link from "next/link";
import Styles from "./Navbar.module.css"
import {links} from "./data"
import Button from '@/components/Button/Button'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import logo from '@/public/image/logo.png'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {faBars} from "@fortawesome/free-solid-svg-icons"


export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
        <header className={Styles.header}>
                   <div className={Styles.container}>
                    <dic className={Styles.logo}>
                     <Image
                      src={logo}
                      alt="logo image"
                      width={60}
                      height={40}
                    />
                     <p className={Styles.logotitle}><span className={Styles.special}>ر</span>حمة</p>
                    </dic>
          <div className={Styles.links}>
            
            {links.map((link) =>(
                <Link key={link.id} href={link.url} className={Styles.link}>{link.title}</Link>
             ))}
           
        </div>
         
        
        <div><DarkModeToggle /></div>
         <button className={Styles.icon} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon className={Styles.Bars} icon={faBars} />
      </button>
         {isOpen && ( <div className={Styles.iconLinks}>

             {links.map((link) =>(
                <Link key={link.id} href={link.url} className={Styles.link}>{link.title}</Link>
             ))}
         </div>
      )}
        <Button />
       </div>
        </header>
        </div>

    )
}
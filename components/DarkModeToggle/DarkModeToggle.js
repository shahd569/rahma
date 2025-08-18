"use client"
import Styles from './DarkModeToggle.module.css'
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemContext'

export default function DarkModeToggle() {
    const {mode, toggle }=useContext(ThemeContext)

    return (
        <div className={Styles.container} onClick={toggle}>
            <div className={Styles.icone}>🌙</div>
            <div className={Styles.icone}>🌚</div>
            <div className={Styles.switcher}
            style={mode==="light" ? {left:"2px"} : {right:"2px"}}
            />
        </div>
    )
}
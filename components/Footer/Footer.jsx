import Image from 'next/image'
import Styles from './Footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return(
        <div>
        <div className={Styles.container}>
           <div className='col'>
               <h1 className={Styles.title}><span className={Styles.special}>ر</span>حمة</h1>
               <p className={Styles.desc}>منصة لكفالة ودعم الأيتام</p>
            </div>
            <div className='col'>
                <p style={{color:"#0a0a5a",fontSize:'20px'}}>راسلونا على اإيميل :</p>
                <Link href="" >rahma@gmail.com</Link>
            </div>
            <div className='col'>
                <p style={{color:"#0a0a5a",fontSize:'20px'}}> تابعونا على :</p>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>

            </div>
            </div>
            <div className={Styles.footer}></div>

        </div>
    )
}
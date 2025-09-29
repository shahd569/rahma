import Image from 'next/image'
import Styles from './Footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return(
        <div>
        <div className={Styles.container}>
           <div className='col'>
               <h1 className={Styles.title}><span className={Styles.special}>ر</span>حمة</h1>
               <p className={Styles.desc}>منصة لكفالة ودعم الأيتام</p>
            </div>
            <div className='col'>
                <p style={{color:"#0a0a5a",fontSize:'20px',fontWeight:'bold'}}>راسلونا على اإيميل :</p>
                <Link href="" >rahma@gmail.com</Link>
            </div>
            <div className='col'>
                <div>
                    <p style={{color:"#0a0a5a",fontSize:'20px',fontWeight:'bold'}}>حساباتنا :</p>
                <div className={Styles.acount}>
                    <p className={Styles.bankNme}>بنك بيموالسعودي الفرنسي:
                        123456789987
                    </p>
                </div>
                <div>
                    <p className={Styles.bankNme}>بنك البركة :
                        1234567890123
                    </p>
                </div>
                <div>
                    <p className={Styles.bankNme}>بنك العودة :
                        987654321123 </p>
                </div>
                </div>
            </div>
            <div className='col'>
                <p style={{color:"#0a0a5a",fontSize:'20px',fontWeight:'bold'}}> تابعونا على :</p>
                <div className={Styles.social}>
                <FontAwesomeIcon className={Styles.icon} icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon className={Styles.icon} icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon className={Styles.icon} icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon className={Styles.icon} icon={faTelegram}></FontAwesomeIcon>
                </div>

            </div>
            </div>
            <div className={Styles.footer}></div>

        </div>
    )
}
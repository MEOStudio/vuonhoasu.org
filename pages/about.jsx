import React from 'react';
import styles from '../styles/about.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons'

const about = () => {
    return(
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.heading}>
                    <div id={styles.Header1}>Vườn Hoa Sứ</div>
                    <div id={styles.Header2}>Về chúng mình</div>
                </div>
                
                <div className = {styles.body}>
                    <div id={styles.Header3}>Giới thiệu nhân sự</div>
                    <div className={styles.containContainer}>
                        <div>
                            <FontAwesomeIcon icon={faQuoteLeft}/>
                        </div>
                        <div className= {styles.content}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lacus diam blandit ipsum, ullamcorper amet, potenti mi sit tempus.
                                Id nibh vestibulum leo mollis non mauris non. Purus, sagittis, facilisis tortor, mi suspendisse
                                cursus commodo turpis hendrerit. Nibh ipsum purus suspendisse amet. Tincidunt leo, nisl, aliquet ac cum.
                                Praesent nibh semper gravida amet dolor. Dolor purus sit quis nunc volutpat enim. Aliquam felis nulla urna,
                                viverra sit turpis. Lectus nibh a, eget vitae.
                            </p>
                            <p>
                                In elit ullamcorper malesuada risus justo nulla dis ut purus. Enim massa et, sed lectus.
                                Malesuada dignissim consectetur odio purus arcu viverra porttitor erat. Cursus netus ac
                                commodo at porta venenatis. Tincidunt in a at imperdiet id sit amet tellus, metus. Pretium
                                cras eu gravida viverra. Tortor sit bibendum condimentum diam. Sem in aliquam vestibulum risus.
                            </p>
                        </div>
                        <div className={styles.reverseColumnContainer}>
                            <FontAwesomeIcon icon={faQuoteRight}/>
                        </div>
                    </div>
                </div>

                <div id={styles.Header4}>Các thành viên</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.block}>
                
                    <div className={styles.reverseRowContainer}>
                        <div id = {styles.Arts} className = {styles.circle}>Ban <br/> Arts</div>
                    </div>
                    <div>
                        <div id = {styles.Content} className = {styles.circle}>Ban <br/> Content</div>
                    </div>
                    <div className={styles.reverseRowContainer}>
                        <div id = {styles.Development} className = {styles.circle}>Ban <br/> Development</div>
                    </div>
            </div>
        </div>
    );
}

export default about
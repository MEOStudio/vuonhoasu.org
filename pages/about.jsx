import React from 'react';
import styles from '../styles/about.module.scss'

const about = () => {
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <div id={styles.header1}>Vườn Hoa Sứ</div>
                <div id={styles.header2}>Về Chúng Mình</div>
            </div>
            <div className = {styles.body}>
                <div id={styles.header3}>Giới thiệu nhân sự</div>
                <div className = {styles.quote} id={styles.openQuote}>&ldquo;</div>
                <div className= {styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lacus diam blandit ipsum, ullamcorper amet, potenti mi sit tempus. 
                    Id nibh vestibulum leo mollis non mauris non. Purus, sagittis, facilisis tortor, mi suspendisse 
                    cursus commodo turpis hendrerit. Nibh ipsum purus suspendisse amet. Tincidunt leo, nisl, aliquet ac cum.
                    Praesent nibh semper gravida amet dolor. Dolor purus sit quis nunc volutpat enim. Aliquam felis nulla urna, 
                    viverra sit turpis. Lectus nibh a, eget vitae.
                    <br/>
                    <br/>   
                    In elit ullamcorper malesuada risus justo nulla dis ut purus. Enim massa et, sed lectus.
                     Malesuada dignissim consectetur odio purus arcu viverra porttitor erat. Cursus netus ac 
                     commodo at porta venenatis. Tincidunt in a at imperdiet id sit amet tellus, metus. Pretium 
                     cras eu gravida viverra. Tortor sit bibendum condimentum diam. Sem in aliquam vestibulum risus.
                </div>
                <div className = {styles.quote} id={styles.closeQuote}>&rdquo;</div>
            </div>
        </div>
    );
}

export default about
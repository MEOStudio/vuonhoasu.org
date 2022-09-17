import React from 'react';
import styles from '../styles/about.module.scss'

const about = () => {
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <div id={styles.Header1}>Vườn Hoa Sứ</div>
                <div id={styles.Header2}>Về Chúng Mình</div>
            </div>
            <div className = {styles.body}>
                <div className={styles.block}>
                    <div id={styles.Header3}>Giới thiệu nhân sự</div>
                    <div className = {styles.quote} id={styles.OpenQuote}>&ldquo;</div>
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
                    <div className = {styles.quote} id={styles.CloseQuote}>&rdquo;</div>
                </div>
                <div className={styles.block}>
                    <div id={styles.Header3}>Các thành viên</div>
                    <div className={styles.container1}>
                        <div id = {styles.Arts}>Ban <br/> Arts</div>
                    </div>
                    <div className={styles.container2}>
                        <div id = {styles.Content}>Ban <br/> Content</div>
                    </div>
                    <div className={styles.container3}>
                        <div id = {styles.Development}>Ban <br/> Development</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about
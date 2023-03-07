import Head from "next/head";
import Image from "next/Image";
import styles from "../styles/Home.module.scss";
import profilePic from "../public/pictures/meo.jpg";
import profilePic2 from "../public/pictures/background.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { COLORS } from "../public/constants.jsx"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VƯỜN HOA SỨ</title>
        <meta
          name="description"
          content="Dự án vũ trụ truyện thuộc MEO Studio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.gridContainer1}>
          <div className={styles.profilePic}>
            <Image className={styles.profilePicStyling} src={profilePic} width={600} height={600}  />
          </div>
          <div className={styles.secondItem}>
            <div style={{fontSize: "40px", fontWeight : "600"}}>Lạc chân vào</div>
            <div style={{color: COLORS.base, fontSize: "60px", fontWeight : "600"}}>Vườn Hoa Sứ</div>
          </div>
        </div>
        <div className={styles.gridContainer2}>
          <div>
            <div className={styles.headingIcon}><FontAwesomeIcon icon={faFire} /></div>
            <div className={styles.componentTitle}>Đầu truyện mới nhất</div>
            <div className={styles.contentBox}>
              <Image src={profilePic2} />
              <div>Chiến binh hoa sứ 2017</div>
              <div style={{color: COLORS.base}} className={styles.sub}>Lễ Đón Học sinh Mới</div>
            </div>
          </div>
          <div className={styles.dashLine}></div>
          <div>
            <div className={styles.headingIcon}><FontAwesomeIcon icon={faStar} /></div>
            <div className={styles.componentTitle}>Vũ trụ hiện tại</div>
            <div className={styles.contentBox} >
              <Image src={profilePic2} />
              <div>Lorem ipsum dolor sit amet</div>
              <div style={{color: COLORS.base}} className={styles.sub}>Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

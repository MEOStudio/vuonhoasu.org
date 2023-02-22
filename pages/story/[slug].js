import styles from "../styles/story.module.scss";
import Image from "next/image";

export default function Story() {
  return (
    <div className={styles.container}>
      <div className={styles.heroImg}>
        <Image
          src="/images/hero.jpg"
          width={1920}
          height={700}
          layout="responsive"
          objectFit="cover"
          alt="Hero Image"
        />
      </div>
      <div className={styles.titleContainer}>
        <h2>Chiến Binh Hoa Sứ 2017</h2>
        <h1>Lễ Đón Học Sinh Mới</h1>
        <h3>Tác giả: Chí Dũng</h3>
      </div>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lacus diam blandit ipsum, ullamcorper amet, potenti mi sit
          tempus. Id nibh vestibulum leo mollis non mauris non. Purus,
          sagittis, facilisis tortor, mi suspendisse cursus commodo
          turpis hendrerit. Nibh ipsum purus suspendisse amet.
          Tincidunt leo, nisl, aliquet ac cum. Praesent nibh semper
          gravida amet dolor. Dolor purus sit quis nunc volutpat enim.
          Aliquam felis nulla urna, viverra sit turpis. Lectus nibh a,
          eget vitae.
        </p>
        <p>
          In elit ullamcorper malesuada risus justo nulla dis ut
          purus. Enim massa et, sed lectus. Malesuada dignissim
          consectetur odio purus arcu viverra porttitor erat. Cursus
          netus ac commodo at porta venenatis. Tincidunt in a at
          imperdiet id sit amet tellus, metus. Pretium cras eu gravida
          viverra. Tortor sit bibendum condimentum diam. Sem in
          aliquam vestibulum risus.
        </p>
        <p>
          Pretium amet mauris sit sed pellentesque iaculis egestas.
          Viverra fusce ut vitae purus sed vitae. Velit dictumst urna
          nunc gravida ac vel id dolor pellentesque. Vel proin enim,
          faucibus non pretium. Tempus hendrerit arcu vitae, tempor
          sapien, enim laoreet at massa. Facilisis et diam pretium
          velit augue risus. Suspendisse sem faucibus lacus tincidunt.
          Senectus pretium, sagittis, enim euismod.
        </p>
        <p>
          Pulvinar facilisis sit faucibus elementum id pellentesque
          blandit sed lorem. Euismod diam rhoncus id ultrices
          scelerisque felis, praesent. Vel, sit id orci, ornare nisi,
          ut mattis convallis hendrerit. Risus eget mauris tortor,
          dictum malesuada ac leo aliquet. Consequat proin eu, vitae
          elementum elementum, morbi quis morbi. Consectetur arcu
          pellentesque imperdiet tellus ante nisl odio tristique.
          Turpis in in auctor euismod fermentum dui amet, purus arcu.
          Quam tincidunt donec nunc dui nibh metus, adipiscing
          interdum.
        </p>
        <p>
          Vulputate nam porta sagittis, blandit tellus sed. Lacus eget
          at cursus sagittis, est et ut. Mi vitae volutpat augue eget
          vitae mauris habitasse. Lacus posuere consectetur
          sollicitudin pretium amet arcu elit. Pretium, et viverra
          tortor venenatis faucibus fermentum pulvinar dolor eros.
          Leo, et dolor egestas congue viverra elementum ultricies
          placerat. Magna viverra ut suspendisse vel nam dolor
          elementum. Sapien nulla dolor elementum, urna odio dictumst.
          Egestas platea cursus lacus, nibh. Maecenas nulla nibh
          semper tempor, diam.
        </p>
      </article>
    </div>
  );
}

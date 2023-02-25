import { getStoriesSlugs } from '../../components/stories/getStories';
import { getStoryContent, getStoryMetadata } from '../../components/stories/getStory';
import styles from './story.module.scss'
import Image from "next/image";

export default function Story(props) {
  const metadata = props.storyMetadata;
  const content = props.storyContent;

  return (
    <div className={styles.container}>
      <div className={styles.heroImg}>
        <Image
          src={metadata.coverImage}
          width={1920}
          height={700}
          layout="responsive"
          objectFit="cover"
          alt="Hero Image"
        />
      </div>
      <div className={styles.titleContainer}>
        <h2>{metadata.story}</h2>
        <h1>{metadata.title}</h1>
        <h3>Tác giả: {metadata.author}</h3>
      </div>
      <article>
        {content}
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const folder = 'stories';
  const stories = getStoriesSlugs(folder);

  const paths = stories.map((story) => {
    return {
      params: {
        slug: story,
      },
    }
  })

  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  const link = params.slug.join('/');
  const storyContent = getStoryContent(link);
  const storyMetadata = getStoryMetadata(link);
  return {props: {storyContent, storyMetadata}}
}
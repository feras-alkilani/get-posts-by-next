import Link from "next/link";
import styles from "./Home.module.css"; // تأكد من المسار الصحيح للملف

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <h1>Hello World</h1>
      <Link href="/posts" className={styles.link}>
        Click here to go to Posts and comments
      </Link>
    </div>
  );
}

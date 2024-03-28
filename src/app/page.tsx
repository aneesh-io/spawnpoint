import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Hello World!</code>
        </p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://aneesh.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            App <span>-&gt;</span>
          </h2>
          <p>This is my app.</p>
        </a>

        <a
          href="https://aneesh.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            App <span>-&gt;</span>
          </h2>
          <p>This is my app.</p>
        </a>

        <a
          href="https://aneesh.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            App <span>-&gt;</span>
          </h2>
          <p>This is my app.</p>
        </a>

        <a
          href="https://aneesh.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            App <span>-&gt;</span>
          </h2>
          <p>This is my app.</p>
        </a>
      </div>
    </main>
  );
}

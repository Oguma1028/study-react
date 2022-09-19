import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import Links from "../components/Links";

export function Headline(props) {
  console.log(props.page);
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{props.page}.js</code>
      </p>
    </div>
  );
}

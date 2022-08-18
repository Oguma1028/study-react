import styles from "./Main.module.css";
import { Headline } from "../Headline/Headline";
import { Links } from "../Links/Links";
import { useEffect } from "react";

export function Main(props) {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Headline page={props.page}>
          <code>pages/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
    </>
  );
}

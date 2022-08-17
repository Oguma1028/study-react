import styles from "./Links.module.css";

const LINKS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    text: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    text: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples",
    title: "Examples →",
    text: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    text: "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export function Links() {
  return (
    <div className={styles.grid}>
      {LINKS.map((link) => {
        return (
          <a href={link.href} className={styles.card} key={link.href}>
            <h2>{link.title}</h2>
            <p>{link.text}</p>
          </a>
        );
      })}

      {/* <a href="https://nextjs.org/docs" className={styles.card}>
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/learn" className={styles.card}>
        <h2>Learn &rarr;</h2>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/canary/examples"
        className={styles.card}
      >
        <h2>Examples &rarr;</h2>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
      >
        <h2>Deploy &rarr;</h2>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a> */}
    </div>
  );
}

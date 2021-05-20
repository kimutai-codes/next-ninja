import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja list" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet libero
          eum debitis sequi, ab a quibusdam at maxime ipsum, molestiae
          distinctio ut possimus aperiam, repudiandae adipisci hic consectetur
          quaerat eos.
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet libero
          eum debitis sequi, ab a quibusdam at maxime ipsum, molestiae
          distinctio ut possimus aperiam, repudiandae adipisci hic consectetur
          quaerat eos.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}

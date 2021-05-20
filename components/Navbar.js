import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Navbar = () => (
  <nav>
    <div className="logo">
      <Link href="/">
        <a>
          <Image src="/images/logo.png" width="100" height="70" />
        </a>
      </Link>
    </div>
    <Link href={"/"}>
      <a>Home</a>
    </Link>
    <Link href={"/about"}>
      <a>About</a>
    </Link>
    <Link href={"/ninjas"}>
      <a>Ninja Listing</a>
    </Link>
  </nav>
);

export default Navbar;

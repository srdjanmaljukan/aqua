import React from "react";
import styles from "./styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Aqua</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="#">Trebovanje - pacijenti</Link>
          </li>
          <li>
            <Link href="#">Trebovanje - apoteka</Link>
          </li>
          <li>
            <Link href="#">Reklamacije</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

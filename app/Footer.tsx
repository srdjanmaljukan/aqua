import React from "react";
import styles from "./styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p>Copyright &copy; SM</p>
        <p>
          <Link href="/about">About This Project</Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;

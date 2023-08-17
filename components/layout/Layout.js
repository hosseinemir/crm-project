import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.maincontainer}>
      <header className={styles.header}>
        <h1>TX group</h1>

        <Link href={"/add-customer"}>Add Customer</Link>
      </header>
      <div className={styles.childDiv}>{children}</div>
      <footer className={styles.footer}>tx group &copy;</footer>
    </div>
  );
}

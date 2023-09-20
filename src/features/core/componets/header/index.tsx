import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

export default function Header() {
	return (
		<header className={`${styles.header} container fluid`}>
			<div className={styles.navigationWrapper}>
				<Link href="/" className={styles.logo}>
					<FaPlayCircle />
					NETFILM
				</Link>
				<nav className={styles.navigationMenu}>
					<Link href="/movies">Movies</Link>
					<Link href="/series">Series</Link>
					<Link href="/kids">Kids</Link>
				</nav>
			</div>
		</header>
	);
}

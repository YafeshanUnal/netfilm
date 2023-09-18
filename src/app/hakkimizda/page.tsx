import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

async function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function HakkimizdaPage() {
	await delay(4000);

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.title}>Hakkımızda</h1>
				<Link href="/">Homepage</Link>
			</div>
		</main>
	);
}

export default HakkimizdaPage;

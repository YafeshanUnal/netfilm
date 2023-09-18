import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

async function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomePage() {
	await delay(4000);
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1>Welcome to My Next.js App</h1>
				<Link href="/hakkimizda">About</Link>
			</div>
		</main>
	);
}

export default HomePage;

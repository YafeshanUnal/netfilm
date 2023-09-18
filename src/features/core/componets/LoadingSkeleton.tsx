"use client";
import React, { useEffect, useState } from "react";
import styles from "./LoadingSkeleton.module.css";
function LoadingSkeleton() {
	const [dots, setDots] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((dots) => (dots + 1) % 4);
		}, 500);

		return () => clearInterval(interval);
	}, [dots]);

	return (
		<main className={styles.main}>
			<div>
				<h1>
					Loading
					{".".repeat(dots)}
				</h1>
			</div>
		</main>
	);
}

export default LoadingSkeleton;

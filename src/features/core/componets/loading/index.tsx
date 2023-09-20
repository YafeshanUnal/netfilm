import React from "react";
import styles from "./styles.module.css"; // CSS dosyasını içe aktarın

function Loading() {
	return (
		<div className={styles.ldsRing}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	); // CSS sınıfını bileşene uygulayın
}

export default Loading;

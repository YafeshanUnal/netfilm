"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Page() {
	const [channel, setChannel] = useState<BroadcastChannel | null>(null);
	const [videoTime, setVideoTime] = useState<number>(0);
	const videoRef = React.useRef<HTMLVideoElement | null>(null);

	// Broadcast Channel oluşturun ve bir kanal adı belirleyin
	useEffect(() => {
		const videoChannel = new BroadcastChannel("video_channel");
		setChannel(videoChannel);

		// Kanaldan gelen mesajları dinleyin
		videoChannel.onmessage = (event) => {
			const currentTime = event.data;
			setVideoTime(currentTime);
			if (videoRef.current) {
				videoRef.current.currentTime = currentTime;
				videoRef.current.play();
			}
		};

		return () => {
			videoChannel.close();
		};
	}, []);

	// Video zamanını değiştirmek için kullanılacak fonksiyon
	const handleVideoTime = (event: React.ChangeEvent<HTMLInputElement>) => {
		const currentTime = Number(event.target.value);
		setVideoTime(currentTime);
		if (videoRef.current) {
			videoRef.current.currentTime = currentTime;
		}
	};

	// Video zamanını diğer sekmeye göndermek için kullanılacak fonksiyon
	const handleSendMessage = () => {
		if (channel) {
			channel.postMessage(videoTime);
		}
	};

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.title}>Video Page</h1>
				<video
					ref={videoRef}
					controls
					className={styles.video}
					onTimeUpdate={(e) => setVideoTime(e.currentTarget.currentTime)}>
					<source
						src="https://www.w3schools.com/html/mov_bbb.mp4"
						type="video/mp4"
					/>
					Your browser does not support HTML video.
				</video>
				<input
					type="range"
					min="0"
					max="100"
					step="1"
					value={videoTime}
					onChange={handleVideoTime}
				/>
				<button onClick={handleSendMessage}>Devam Et</button>
			</div>
		</main>
	);
}

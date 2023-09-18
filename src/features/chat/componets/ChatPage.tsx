"use client";
import React, { useState, useEffect } from "react";

function ChatPage() {
	const [messages, setMessages] = useState<
		{ text: string; incoming: boolean }[]
	>([]);
	const [newMessage, setNewMessage] = useState<string>("");
	const [channel, setChannel] = useState<BroadcastChannel | null>(null);

	useEffect(() => {
		const chatChannel = new BroadcastChannel("chat_channel");

		chatChannel.onmessage = (event) => {
			setMessages((prevMessages) => [
				...prevMessages,
				{ text: event.data, incoming: true },
			]);
		};

		setChannel(chatChannel);

		return () => {
			chatChannel.close();
		};
	}, []);

	const handleSendMessage = () => {
		if (newMessage.trim() !== "") {
			setMessages((prevMessages) => [
				...prevMessages,
				{ text: newMessage, incoming: false },
			]);
			channel?.postMessage(newMessage);
			setNewMessage("");
		}
	};

	return (
		<main>
			<h1>Chat Page</h1>
			<div>
				<div
					style={{
						border: "1px solid #ccc",
						minHeight: "200px",
						padding: "10px",
						display: "flex",
						flexDirection: "column",
					}}>
					{messages.map((message, index) => (
						<div
							key={index}
							style={{
								alignSelf: message.incoming ? "flex-start" : "flex-end",
								backgroundColor: message.incoming ? "gray" : "#0084ff",
								color: message.incoming ? "#000" : "#fff",
								maxWidth: "70%",
								borderRadius: "8px",
								margin: "4px",
								padding: "8px",
							}}>
							{message.text}
						</div>
					))}
				</div>
				<input
					type="text"
					placeholder="Mesajınızı yazın..."
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
				/>
				<button onClick={handleSendMessage}>Gönder</button>
			</div>
		</main>
	);
}

export default ChatPage;

import React from "react";

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: string;
}) {
	console.log("🚀 ~ file: RootLayout.tsx:10 ~ params:", params);
	// is login ? render children : render login page

	const isLogin = true;
	return <div>{isLogin ? <div>{children}</div> : <div>login page</div>}</div>;
}

import "@/styles/reset.css";
import "@/styles/global.css";

import { Inter } from "next/font/google";

import Header from "@/features/core/componets/header";
import Footer from "@/features/core/componets/footer";

const inter = Inter({ subsets: ["latin"] });

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="tr" className={inter.className}>
			<body className="container">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

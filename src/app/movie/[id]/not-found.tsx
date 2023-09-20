import Link from "next/link";
import React from "react";

function MovieNotFound() {
	return (
		<div style={{ textAlign: "center", color: "red" }}>
			<h1>404</h1>
			<h2>Movie Not Found</h2>
			<Link href="/">Go Back Home</Link>
		</div>
	);
}

export default MovieNotFound;

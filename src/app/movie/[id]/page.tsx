import MovieContainer from "@/containers/movie";
import React from "react";

import { notFound } from "next/navigation";

import Movies from "@/mocks/movies.json";

async function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function MoviePage({ params }: { params: { id: string } }) {
	await delay(2000);
	const movieDetail = Movies.results.find(
		(movie) => movie.id.toString() === params.id
	);
	if (!movieDetail) {
		notFound();
	}

	return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;

import React from "react";

import Movies from "@/mocks/movies.json";
import FeaturedMovie from "@/features/core/componets/featuredMovie";
import MoviesSection from "@/features/core/componets/movies-section";
export default function HomeContainer() {
	return (
		<div>
			<FeaturedMovie movie={Movies.results[4]} />

			<MoviesSection
				title="Popular Film"
				movies={Movies.results.slice(0, 5)}
			/>
			<MoviesSection
				title="Your Favorites"
				movies={Movies.results.slice(5, 11)}
			/>
		</div>
	);
}

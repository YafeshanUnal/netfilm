import FeaturedMovie from "@/features/core/componets/featuredMovie";
import React from "react";

export default function MovieContainer({ movie }: { movie: any }) {
	return <FeaturedMovie movie={movie} isCompact={false} />;
}

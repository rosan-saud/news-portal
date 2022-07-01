import Image from "mui-image";
import React from "react";
import { useMakeApiCall } from "./genericApiCallFunction";

const SportsNews = () => {
	const [data] = useMakeApiCall("sports", "en", "1");
	return (
		<div className="article-wrapper">
			<div className="article-list">
				{data &&
					data?.articles?.map((news) => (
						<div className="article1" key={news.id}>
							<h1>{news?.title}</h1>
							<Image src={news?.media} />
							<p>{news?.summary}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default SportsNews;

import axios from "axios";
import Image from "mui-image";
import React, { useEffect, useState } from "react";

const ArticleList = () => {
	const [newsData, setNewsData] = useState([]);
	const options = {
		method: "GET",
		url: "https://api.newscatcherapi.com/v2/search",
		params: { q: "sports", lang: "en", page: "1" },
		headers: {
			"X-api-Key": "SrZgkrznT5IxspS2B_n1quG42qz18K64TAkRdwm1KP4",
		},
	};

	useEffect(() => {
		axios
			.request(options)
			.then(function (response) {
				setNewsData(response?.data);
				console.log(response?.data, "data here");
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	// console.log(newsData, "data here");

	return (
		<div className="article-wrapper">
			<div className="article-list">
				{newsData &&
					newsData?.articles?.map((news) => (
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

export default ArticleList;

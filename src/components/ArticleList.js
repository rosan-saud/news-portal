import axios from "axios";
import Image from "mui-image";
import React, { useEffect, useState } from "react";

const ArticleList = () => {
	const [newsData, setNewsData] = useState([]);
	// const options = {
	// 	method: "GET",
	// 	url: "https://google-news.p.rapidapi.com/v1/top_headlines",
	// 	params: { lang: "en", country: "US" },
	// 	headers: {
	// 		"X-RapidAPI-Key": "48d2ae991c834a6d9f930994df4a3515",
	// 		"X-RapidAPI-Host": "google-news.p.rapidapi.com",
	// 	},
	// };
	console.log(process.env.REACT_APP_API, process.env.NAME, "here api");
	useEffect(() => {
		axios
			.get(
				`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=48d2ae991c834a6d9f930994df4a3515`
			)
			.then(function (response) {
				console.log(response.data, "here");
				setNewsData(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	console.log(newsData, "data here");

	return (
		<div className="article-wrapper">
			<div className="article-list">
				{newsData &&
					newsData?.articles?.map((news, index) => (
						<div className="article1" key={index}>
							<h1>{news?.title}</h1>
							<Image src={news?.urlToImage} />
							<p>{news?.content}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default ArticleList;

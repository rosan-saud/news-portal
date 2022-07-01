import axios from "axios";
import { useEffect, useState } from "react";

export const useMakeApiCall = (query, language, page) => {
	const [data, setData] = useState([]);
	const options = {
		method: "GET",
		url: "https://api.newscatcherapi.com/v2/search",
		params: { q: query, lang: language, page: page },
		headers: {
			"X-api-Key": process.env.REACT_APP_API_KEY,
		},
	};
	useEffect(() => {
		axios
			.request(options)
			.then(function (response) {
				console.log(response?.data, "api data here");
				setData(response?.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, [query, language, page]);
	return [data];
};

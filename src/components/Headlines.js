import Image from "mui-image";
import { useMakeApiCall } from "./genericApiCallFunction";

const ArticleList = () => {
	const [data] = useMakeApiCall("headlines", "en", "1");
	console.log(data, "here is the api data");

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

export default ArticleList;

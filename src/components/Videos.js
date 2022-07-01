import React from "react";
import ReactPlayer from "react-player";
const videoData = [
	{
		url: "https://www.youtube.com/watch?v=ardtvdR28SQ",
		title: "Best Wedding Dance",
		thumbnail: "https://img.youtube.com/vi/ardtvdR28SQ/sddefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=JGIDsE1pCb4",
		title: "Jujutsu kaisen clip",
		thumbnail: "https://i3.ytimg.com/vi/JGIDsE1pCb4/hqdefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=BQqRrlZ67fc",
		title: "Upcomming action movies",
		thumbnail: "https://img.youtube.com/vi/BQqRrlZ67fc/sddefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=79FLXoTrv7w",
		title: "People are awesome",
		thumbnail: "https://i3.ytimg.com/vi/79FLXoTrv7w/hqdefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=ardtvdR28SQ",
		title: "Best Wedding Dance",
		thumbnail: "https://img.youtube.com/vi/ardtvdR28SQ/sddefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=JGIDsE1pCb4",
		title: "Jujutsu kaisen clip",
		thumbnail: "https://i3.ytimg.com/vi/JGIDsE1pCb4/hqdefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=BQqRrlZ67fc",
		title: "Upcomming action movies",
		thumbnail: "https://img.youtube.com/vi/BQqRrlZ67fc/sddefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=79FLXoTrv7w",
		title: "People are awesome",
		thumbnail: "https://i3.ytimg.com/vi/79FLXoTrv7w/hqdefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=ardtvdR28SQ",
		title: "Best Wedding Dance",
		thumbnail: "https://img.youtube.com/vi/ardtvdR28SQ/sddefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=JGIDsE1pCb4",
		title: "Jujutsu kaisen clip",
		thumbnail: "https://i3.ytimg.com/vi/JGIDsE1pCb4/hqdefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=BQqRrlZ67fc",
		title: "Upcomming action movies",
		thumbnail: "https://img.youtube.com/vi/BQqRrlZ67fc/sddefault.jpg",
	},
	{
		url: "https://www.youtube.com/watch?v=79FLXoTrv7w",
		title: "People are awesome",
		thumbnail: "https://i3.ytimg.com/vi/79FLXoTrv7w/hqdefault.jpg",
	},
];

const Videos = () => {
	return (
		<div className="article-wrapper">
			<div className="player-wrapper">
				{videoData.map((video) => (
					<div className="article1 player-wrapper-inner ">
						<h1>{video?.title}</h1>
						<ReactPlayer url={video.url} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Videos;

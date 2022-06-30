import { Card, CardContent, Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";
const mediaUrl = [
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

const MediaList = ({ setModalOpen, setVideoUrl }) => {
	return (
		<div className="media-wrapper">
			<Typography variant="h5">Playlist</Typography>

			<div className="media-list">
				{mediaUrl.map((cardItem) => (
					<Card
						className="card"
						onClick={() => {
							setModalOpen(true);
							setVideoUrl(cardItem.url);
						}}
					>
						<CardContent>
							{cardItem.title}
							<Image src={cardItem?.thumbnail}></Image>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default MediaList;

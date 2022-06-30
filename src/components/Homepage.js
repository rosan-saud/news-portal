import { useState } from "react";
import ArticleList from "./ArticleList";
import MediaList from "./MediaList";
import PlayerModal from "./PlayerModal";

const Homepage = () => {
	const [videoUrl, setVideoUrl] = useState("");
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<MediaList
				setModalOpen={setModalOpen}
				setVideoUrl={setVideoUrl}
			></MediaList>
			<PlayerModal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				videoUrl={videoUrl}
			></PlayerModal>
			<ArticleList></ArticleList>
		</>
	);
};

export default Homepage;

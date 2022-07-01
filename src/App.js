import "./App.css";
import "@mui/material";
import BusinessNews from "./components/BusinessNews";
import Headlines from "./components/Headlines";
import EntertainmentNews from "./components/EntertainmentNews";
import SportsNews from "./components/SportsNews";
import Videos from "./components/Videos";
import { Routes, Route } from "react-router-dom";
import MediaList from "./components/MediaList";
import PlayerModal from "./components/PlayerModal";
import { useState } from "react";

function App() {
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
			<Routes>
				<Route path="/" element={<Headlines />} />
				<Route path="/business" element={<BusinessNews />} />
				<Route path="/entertainment" element={<EntertainmentNews />} />
				<Route path="/sports" element={<SportsNews />} />
				<Route path="/videos" element={<Videos />} />
			</Routes>
		</>
	);
}

export default App;

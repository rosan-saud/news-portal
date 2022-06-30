import { Box, Button, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import ReactPlayer from "react-player";

const PlayerModal = (props) => {
	const { modalOpen, setModalOpen, videoUrl } = props;
	// const handleModalOpen = () => {
	// 	setModalOpen(true);
	// };
	const handleModalClose = () => {
		setModalOpen(false);
	};
	return (
		<>
			<Modal
				open={modalOpen}
				onClose={handleModalClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className="modal-Box">
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography>
					<ReactPlayer url={videoUrl} controls height="100%" width={"100%"} />
					<Button
						style={{
							position: "absolute",
							bottom: "10px",
							right: "10px",
						}}
						variant="text"
						color="secondary"
						onClick={handleModalClose}
					>
						{" "}
						close
					</Button>
				</Box>
			</Modal>
		</>
	);
};

export default PlayerModal;

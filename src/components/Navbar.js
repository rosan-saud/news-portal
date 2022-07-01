// import AppBar from "@material-ui/core/AppBar";
import { Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div position="sticky" style={{ backgroundColor: "#89ABE3FF" }}>
			<Tabs centered>
				<Tab
					style={{ color: "#FCF6F5FF" }}
					onClick={() => navigate("/")}
					label={"Top Headlines"}
				></Tab>
				<Tab
					style={{ color: "#FCF6F5FF" }}
					onClick={() => navigate("/entertainment")}
					label={"Entertainment"}
				></Tab>
				<Tab
					style={{ color: "#FCF6F5FF" }}
					onClick={() => navigate("/business")}
					label={"Business"}
				></Tab>
				<Tab
					style={{ color: "#FCF6F5FF" }}
					onClick={() => navigate("/sports")}
					label={"Sports"}
				></Tab>
				<Tab
					style={{ color: "#FCF6F5FF" }}
					onClick={() => navigate("/videos")}
					label={"Videos"}
				></Tab>
			</Tabs>
		</div>
	);
};

export default Navbar;

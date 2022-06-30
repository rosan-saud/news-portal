import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
// import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const Navbar = () => {
	return (
		<div position="sticky" style={{ backgroundColor: "#89ABE3FF" }}>
			<Toolbar>
				<Typography variant="h6" style={{ color: "#FCF6F5FF" }}>
					News Feed
				</Typography>
			</Toolbar>
		</div>
	);
};

export default Navbar;

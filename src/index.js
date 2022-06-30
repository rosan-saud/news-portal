import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className="wrapperLayout">
			<div className="baseLayout">
				<Navbar />
				<div className="mainLayout">
					<App />
				</div>
			</div>
		</div>
	</React.StrictMode>
);

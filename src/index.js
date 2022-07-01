import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<div className="wrapperLayout">
			<div className="baseLayout">
				{/* <Image src="https://techbullion.com/wp-content/uploads/2022/06/BlakSheep-1000x600.jpg" height={"50px"} width={} /> */}
				<Navbar />
				<div className="mainLayout">
					<App />
				</div>
			</div>
		</div>
	</BrowserRouter>
);

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import TermsPage from "./pages/TermsPage";
import Privacy from "./components/sections/PrivacyAndTerms/Privacy";
import Cookie from "./components/sections/PrivacyAndTerms/Cookies";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/login" element={<Login />} />
			<Route path="/terms" element={<TermsPage />} />
			<Route path="/privacy" element={<Privacy />} />
			<Route path="/cookies" element={<Cookie />} />
		</Routes>
	);
}

export default App;

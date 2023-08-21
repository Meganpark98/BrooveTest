import Navbar from "../components/navigation/navbar";
import SubNavbar from "../components/navigation/subnavbar";

export default function MainLayout({ children }) {
	return (
		<div>
            <Navbar />
			<SubNavbar />
            {children}
		</div>
	);
}

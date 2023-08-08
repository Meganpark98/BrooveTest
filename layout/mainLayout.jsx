import Navbar from "../components/navigation/navbar";
import SubNavbar from "../components/navigation/subnavbar";
import styles from "../styles/Navbar.module.css"

export default function MainLayout({ children }) {
	return (
		<div>
            <Navbar />
			<SubNavbar />
            {children}
		</div>
	);
}

import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
	return (
		<div>
      <Sidebar />
			<Navbar />
			<Outlet />
		</div>
	)
}

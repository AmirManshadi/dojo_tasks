import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
	return (
		<Grid templateColumns="repeat(6, 1fr)" templateRows="80px 80px auto">
			<GridItem
				colStart={[1]}
				colEnd={[7, 3, 2]}
				rowStart={[2, 1]}
				rowEnd={[3, 4]}
			>
				<Sidebar />
			</GridItem>
			<GridItem
				colStart={[1, 3, 2]}
				colEnd={[7]}
				rowStart={[1]}
				rowEnd={[2, null]}
			>
				<Navbar />
			</GridItem>
			<GridItem
				colStart={[1, 3, 2]}
				colEnd={[7]}
				rowStart={[3, 2]}
				rowEnd={[4]}
			>
				<Outlet />
			</GridItem>
		</Grid>
	)
}

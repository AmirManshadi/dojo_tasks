import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"

// layouts and pages
import RootLayout from "./layouts/RootLayout"
import Dashboard, { DashboardLoader } from "./pages/Dashboard"
import Create, { CreateAction } from "./pages/Create"
import Profile from "./pages/Profile"

// router and routes
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Dashboard />} loader={DashboardLoader} />
			<Route path="create" element={<Create />} action={CreateAction} />
			<Route path="profile" element={<Profile />} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App

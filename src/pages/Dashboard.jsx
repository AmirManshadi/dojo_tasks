import { SimpleGrid } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import Task from "../components/Task"

export async function DashboardLoader() {
	const tasks = await fetch("http://localhost:3000/tasks")
	return await tasks.json()
}

export default function Dashboard() {
	const tasks = useLoaderData()

	return (
		<SimpleGrid minChildWidth="60" alignItems={"stretch"} spacing={4} p={4}>
			{tasks.map(task => (
				<Task key={task.id} task={task} />
			))}
		</SimpleGrid>
	)
}

import { SimpleGrid } from "@chakra-ui/react"
import tasks from "../data/db"
import Task from "../components/Task"

export default function Dashboard() {
	return (
		<SimpleGrid minChildWidth="60" alignItems={"stretch"} spacing={4} p={4}>
			{tasks.map(task => (
				<Task key={task.id} task={task} />
			))}
		</SimpleGrid>
	)
}

import { ChatIcon } from "@chakra-ui/icons"
import {
	Avatar,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	SimpleGrid,
	Heading,
	Button,
	Text,
} from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"

export async function DashboardLoader() {
	const tasks = await fetch("http://localhost:3000/tasks")
	return await tasks.json()
}

export default function Dashboard() {
	const tasks = useLoaderData()

	return (
		<SimpleGrid minChildWidth="60" alignItems={"stretch"} spacing={4} p={4}>
			{tasks.map(task => (
				<Card
					key={task.id}
					shadow="base"
					borderTop="4px"
					borderTopColor="blue.400"
					borderBottomLeftRadius="md"
					borderBottomRightRadius="md"
				>
					<CardHeader
						display="flex"
						alignItems="center"
						gap="2"
						color="blackAlpha.800"
					>
						<Avatar name={task.author} src={task.img} />
						<Heading as="h4" fontSize="md">
							{task.title}
						</Heading>
					</CardHeader>
					<CardBody color="blackAlpha.700" fontSize="sm" py="0">
						{task.description}
					</CardBody>
					<CardFooter>
						<Button leftIcon={<ChatIcon />} variant="ghost" fontSize="sm">
							<Text>comment</Text>
						</Button>
					</CardFooter>
				</Card>
			))}
		</SimpleGrid>
	)
}

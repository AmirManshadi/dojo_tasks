import { ChatIcon, EmailIcon, StarIcon } from "@chakra-ui/icons"
import {
	List,
	ListIcon,
	ListItem,
	SimpleGrid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react"
import tasks from "../data/db"
import Task from "../components/Task"

export default function Profile() {
	const userTasks = tasks.filter(task => task.author.toLowerCase() === "mario")
	return (
		<Tabs isLazy colorScheme="blue" variant="enclosed-colored" m="6" p="4">
			<TabList>
				<Tab>Account Info</Tab>
				<Tab>Tasks</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<List spacing={4} color="blue.700">
						<ListItem>
							<ListIcon as={EmailIcon} />
							Email: mario@netninja.dev
						</ListItem>
						<ListItem>
							<ListIcon as={ChatIcon} />
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</ListItem>
						<ListItem>
							<ListIcon as={StarIcon} />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
					</List>
				</TabPanel>
				<TabPanel>
					<SimpleGrid minChildWidth="60" alignItems={"stretch"} spacing={4}>
						{userTasks.map(task => (
							<Task key={task.id} task={task} />
						))}
					</SimpleGrid>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}

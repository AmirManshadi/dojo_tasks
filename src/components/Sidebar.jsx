import { CalendarIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem, Text } from "@chakra-ui/react"

export default function Sidebar() {
	return (
		<List bg="blue.300" display="flex" spacing="4" flexDir="column">
			<ListItem>
				<ListIcon as={CalendarIcon} />
				<Text>Dashboard</Text>
			</ListItem>
			<ListItem>
				<ListIcon as={CalendarIcon} />
				<Text>Dashboard</Text>
			</ListItem>
			<ListItem>
				<ListIcon as={CalendarIcon} />
				<Text>Dashboard</Text>
			</ListItem>
		</List>
	)
}

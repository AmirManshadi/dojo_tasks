import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons"
import { Divider, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function Sidebar() {
	return (
		<List
			as={Flex}
			bg="blue.300"
			p="4"
			color="whiteAlpha.900"
			spacing={[null, "4"]}
			direction={["row", "column"]}
			justify={["space-around", "start"]}
			align={["center", "start"]}
			h={[null, "100vh"]}
			fontSize={["md", null, "lg"]}
		>
			<ListItem
				as={Link}
				to="/"
				display="flex"
				alignItems="center"
				transition="color 200ms"
				_hover={{ color: "blue.900" }}
			>
				<ListIcon as={CalendarIcon} />
				<Text>Dashboard</Text>
			</ListItem>
			<Divider
				transform={["rotate(90deg)", "rotate(0)"]}
				w={["50px", "100%"]}
			/>
			<ListItem
				as={Link}
				to="/create"
				display="flex"
				alignItems="center"
				transition="color 200ms"
				_hover={{ color: "blue.900" }}
			>
				<ListIcon as={EditIcon} />
				<Text>Create</Text>
			</ListItem>
			<Divider
				transform={["rotate(90deg)", "rotate(0)"]}
				w={["50px", "100%"]}
			/>
			<ListItem
				as={Link}
				to="/profile"
				display="flex"
				alignItems="center"
				transition="color 200ms"
				_hover={{ color: "blue.900" }}
			>
				<ListIcon as={AtSignIcon} />
				<Text>Profile</Text>
			</ListItem>
		</List>
	)
}

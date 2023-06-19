import { ChatIcon } from "@chakra-ui/icons"
import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Text,
} from "@chakra-ui/react"

export default function Task({ task }) {
	return (
		<Card
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
	)
}

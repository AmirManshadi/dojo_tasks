import {
	Avatar,
	Button,
	Flex,
	HStack,
	Heading,
	Spacer,
	Text,
} from "@chakra-ui/react"

export default function Navbar() {
	return (
		<Flex align="center" justifyContent="space-around" p={4}>
			<Heading color="blue.700" as="h1">
				Dojo Task
			</Heading>
			<Spacer />
			<HStack spacing={4}>
				<Avatar name="Amir" bg="blue.200" src="/public/img/mario.png"></Avatar>
				<Text>AmirHossein</Text>
				<Button colorScheme="blue">logout</Button>
			</HStack>
		</Flex>
	)
}

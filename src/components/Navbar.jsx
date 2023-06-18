import { UnlockIcon } from "@chakra-ui/icons"
import {
	Avatar,
	Button,
	Flex,
	HStack,
	Heading,
	Spacer,
	Text,
	useToast,
} from "@chakra-ui/react"

export default function Navbar() {
	const toast = useToast()

	function handleClick() {
		toast({
			status: "success",
			title: "Logged out successfully",
			duration: 3000,
			isClosable: true,
			position: "bottom right",
			variant: "subtle",
			colorScheme: "blue",
		})
	}

	return (
		<Flex align="center" justifyContent="space-around" p={4}>
			<Heading color="blue.700" as="h1">
				DojoTask
			</Heading>
			<Spacer />
			<HStack spacing={4}>
				<Avatar name="Amir" bg="blue.200" src="/public/img/mario.png"></Avatar>
				<Text display={["none", null, "block"]} fontWeight="bold">
					AmirHossein
				</Text>
				<Button colorScheme="blue" onClick={handleClick}>
					logout
				</Button>
			</HStack>
		</Flex>
	)
}

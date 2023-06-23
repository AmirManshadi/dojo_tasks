import {
	Button,
	Checkbox,
	FormControl,
	FormHelperText,
	FormLabel,
	Grid,
	HStack,
	Input,
	Textarea,
	VStack,
	useToast,
} from "@chakra-ui/react"
import { useRef } from "react"

export default function Create() {
	const toast = useToast()
	const formRef = useRef()
	const inputRef = useRef()

	function handleClick() {
		toast({
			status: "success",
			title: "task created",
			duration: 3000,
			colorScheme: "blue",
			isClosable: true,
			position: "bottom-right",
			variant: "subtle",
		})
		formRef.current.reset()
		inputRef.current.focus()
	}

	return (
		<Grid
			as={"form"}
			templateColumns={["auto", null, null, "1fr 1fr"]}
			templateRows="repeat(3, auto)"
			p="5"
			ref={formRef}
			onSubmit={e => e.preventDefault()}
		>
			<VStack spacing="4">
				<FormControl
					border="1px"
					borderColor={"blue.300"}
					borderRadius={"md"}
					p={"4"}
					isRequired
				>
					<FormLabel>Title</FormLabel>
					<Input
						type="text"
						placeholder="title of your task"
						autoFocus
						ref={inputRef}
					/>
					<FormHelperText>keep it short and descriptive</FormHelperText>
				</FormControl>
				<FormControl
					border="1px"
					borderColor={"blue.300"}
					borderRadius={"md"}
					p={"4"}
				>
					<FormLabel>Description</FormLabel>
					<Textarea placeholder="describe your task" />
				</FormControl>
				<FormControl
					p={"4"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<VStack gap={"0"}>
						<HStack display="flex" alignItems="center">
							<Checkbox />
							<FormLabel m="0" fontSize="sm" cursor="pointer">
								Is it a priority task
							</FormLabel>
						</HStack>
						<FormHelperText>If true, it will come first</FormHelperText>
					</VStack>
					<Button variant="outline" colorScheme="blue" onClick={handleClick}>
						submit
					</Button>
				</FormControl>
			</VStack>
		</Grid>
	)
}

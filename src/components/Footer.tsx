import {
	Box,
	HStack,
	VStack,
	Image,
	Flex,
	Text,
	Spacer,
	Heading,
	Button,
} from "@chakra-ui/react";

export const Footer = () => {
	return (
		<Box>
			<Flex>
				<Box width={"100%"} height={"30vh"} background={"#000000"}>
					<HStack justifyContent="center" mt={"10vh"}>
						<VStack>
							<HStack>
								<Image src="/icons/logo.png" width={10} height={9} alt="logo" />
								{/* <Image
									src="/icons/solana.svg"
									width={107}
									height={16}
									alt="logo"
								/> */}
								<Text
									fontSize={"48"}
									fontWeight={"500"}
									fontFamily={"Readex Pro"}
								>
									The Gauntlet
								</Text>
							</HStack>
							<Text>© 2023 xAndria</Text>
							<HStack>
								<Image
									src="/icons/twitter.svg"
									onClick={() =>
										window.open("https://twitter.com/xAndriaOnchain", "_blank")
									}
									width={8}
									height={6}
									alt="logo"
								/>
								<Spacer />
								<Image
									src="/icons/discord.svg"
									width={8}
									height={6}
									alt="logo"
								/>
								<Spacer />
								<Image
									src="/icons/linkedin.svg"
									width={8}
									height={6}
									alt="logo"
								/>
							</HStack>

							{/* <Image
								mt={-5}
								src="/icons/copyright.svg"
								width={120}
								height={24}
								alt="logo"
							/> */}
						</VStack>
						{/* <Box ml={"40vh"} mt={10}>
							<HStack spacing={"30vh"}>
								<VStack alignItems={"start"}>
									<Text fontWeight={400} fontSize={16}>
										SOLANA
									</Text>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Website
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Foundation
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Solana Mobile
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Solana Pay
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Grants
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Carrers
									</Button>
								</VStack>
								<VStack alignItems={"start"}>
									<Text fontWeight={400} fontSize={16}>
										DEVELOPERS
									</Text>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Documentation
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Github
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Playground
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Cookbook
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Developer Course
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Unity Game Dev
									</Button>
								</VStack>
								<VStack alignItems={"start"}>
									<Text fontWeight={400} fontSize={16}>
										ECOSYSTEM
									</Text>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										News
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Events
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Realms
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Validators
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Youtube
									</Button>
									<Button
										variant="link"
										fontWeight={400}
										fontSize={15}
										color={"#999999"}
									>
										Twitter
									</Button>
								</VStack>
							</HStack>
						</Box> */}
					</HStack>
				</Box>
			</Flex>
		</Box>
	);
};

import {
	Card,
	Badge,
	HStack,
	Link,
	Text,
	VStack,
	Box,
	Image,
	Wrap,
} from "@chakra-ui/react";
import moment from "moment";
import { FC } from "react";
import { useRouter } from "next/router";

type ChallengeGridViewProps = {
	title?: string;
	content?: string;
	reputation: number;
	tags?: string[];
	id: string;
	authorPubKey: string;
	authorAvatarUrl: string;
	challengeExpiration: number;
	lastActivity?: Date;
};

const categoryColors: { [key: string]: string } = {
	"Physical Infrastructure Networks":
		"linear-gradient(180deg, #D39E00 0%, rgba(17, 17, 17, 0.60) 57.09%)",
	"Artificial Intelligence":
		"linear-gradient(180deg, #D0630F 0%, rgba(17, 17, 17, 0.60) 57.09%)",
	"Finance & Payments":
		"linear-gradient(180deg, #0057BD 0%, rgba(17, 17, 17, 0.60) 57.09%)",
	"Gaming & Entertainment":
		"linear-gradient(180deg,#8D18D6 0%, rgba(17, 17, 17, 0.50) 57.09%)",
	"Mobile Consumer Apps":
		"linear-gradient(180deg, #01837D 0%, rgba(17, 17, 17, 0.60) 57.09%)",
	"Crypto Infrastructure":
		"linear-gradient(180deg, #D12769 0%, rgba(17, 17, 17, 0.60) 57.09%)",
	"DAOs & Network States":
		"linear-gradient(180deg, #FFFFF0 0%, rgba(17, 17, 17, 0.60) 57.09%)",
	"Data & Analytics":
		"linear-gradient(180deg, #d5d5f2 0%, rgba(17, 17, 17, 0.60) 57.09%)",
	NFTs: "linear-gradient(180deg, #CF2129 0%, rgba(17, 17, 17, 0.60) 57.09%)",
	Development:
		"linear-gradient(180deg, #812D06 0%, rgba(17, 17, 17, 0.60) 57.09%)",
	Ideas: "linear-gradient(180deg, #249C66 0%, rgba(17, 17, 17, 0.60) 57.09%)",
	Social: "linear-gradient(180deg,#83c8de 0%, rgba(17, 17, 17, 0.60) 57.09%)",
};

const tagColors: { [key: string]: string } = {
	"Physical Infrastructure Networks": "#6b5104",
	"Artificial Intelligence": "#FD7651",
	"Finance & Payments": " #1b72bf",
	"Gaming & Entertainment": "#AA6CFC",
	"Mobile Consumer Apps": "#5e8583",
	"Crypto Infrastructure": "#E959BB",
	"DAOs & Network States": "#6e6e5d",
	"Data & Analytics": "#2929cf",
	NFTs: "#FF6262",
	Development: "#a86242",
	Ideas: "#2CA870",
	Social: "#427687",
};

const ChallengeGridView: FC<ChallengeGridViewProps> = (props) => {
	const router = useRouter();

	// Determine the background color based on the first tag (assuming each challenge has at least one tag)
	const firstTag = props.tags?.[0] || "";
	const selectedGradient = categoryColors[firstTag] || "";

	// Countdown function
	function unixTimestampToCountdown(targetUnixTimestamp: number): string {
		const currentTime = new Date().getTime();
		const targetTime = targetUnixTimestamp * 1000; // Convert target timestamp to milliseconds

		const timeDifference = targetTime - currentTime;

		if (timeDifference <= 0) {
			return "Challenge Expired";
		}

		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor(
			(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
		);

		const countdownString = `${days}d:${hours}h:${minutes}m`;
		return countdownString;
	}

	const targetTimestamp = props.challengeExpiration;
	const countdown = unixTimestampToCountdown(targetTimestamp);

	return (
		<div onClick={() => router.push(`/challenges/${props.id}`)}>
			{/* <Link href={`/challenges/${props.id}`}> */}
			<Card
				height={"70vh"}
				width={"30vw"}
				bg="#111"
				rounded={"lg"}
				textColor={"white"}
				background={selectedGradient}
				p={6}
			>
				<Wrap width={"auto"}>
					{props?.tags?.map((tag: string, index: number) => (
						<Box
							background={tagColors[tag] || "gray"}
							px={"4"}
							py={"1"}
							key={index}
							borderRadius={"20"}
							fontSize={"14"}
							fontWeight={"400"}
						>
							{tag}
						</Box>
					))}
				</Wrap>

				<VStack mt={"30vh"} alignItems={"flex-start"}>
					<Text fontSize={"20"} fontWeight={"500"} width={"auto"}>
						{props.title}
					</Text>
					<Text fontSize={"20"} fontWeight={"600"} color={"#FF9728"}>
						{props.reputation} Points
					</Text>
				</VStack>
				<HStack mt={"10vh"} spacing={"8"} textColor={"gray.400"}>
					<Text width={"auto"}>
						{props.lastActivity
							? `updated ${moment(props.lastActivity).fromNow()}`
							: ""}
					</Text>
					<Text width={"auto"}>{countdown}</Text>
				</HStack>
			</Card>
			{/* </Link> */}
		</div>
	);
};

export default ChallengeGridView;

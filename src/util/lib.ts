import { Switch } from "@chakra-ui/react";
import { tagValues } from "./challengerSdk";
import { submissionState } from "./challengerSdk";

export const shortenWalletAddress = (address: string) => {
	if (!address || address.length <= 8) {
		return "";
	}

	return `${address.slice(0, 4)}...${address.slice(
		address.length - 4,
		address.length
	)}`;
};

export const getSubmissionStateFromString = (submissionStateString: string) => {
	switch (submissionStateString.toLowerCase()) {
		case "completed":
			return submissionState.Completed;
		case "rejected":
			return submissionState.Rejected;
		default:
			return null;
	}
};

export const getTagFromString = (tagString: string) => {
	switch (tagString.toLowerCase()) {
		case "artificialIntelligence":
			return tagValues.ArtificialIntelligence;
		case "cryptoInfrastructure":
			return tagValues.CryptoInfrastructure;
		case "daosAndNetworkStates":
			return tagValues.DaosAndNetworkStates;
		case "dataAndAnylitics":
			return tagValues.DataAndAnalytics;
		case "development":
			return tagValues.Development;
		case "financeAndPayments":
			return tagValues.FinanceAndPayments;
		case "gamingAndEntertainment":
			return tagValues.GamingAndEntertainment;
		case "Ideas":
			return tagValues.Ideas;
		case "mobileConsumerApps":
			return tagValues.MobileConsumerApps;
		case "nfts":
			return tagValues.Nfts;
		case "physicalInfrastructureNetworks":
			return tagValues.PhysicalInfrastructureNetworks;
		case "social":
			return tagValues.Social;
		default:
			return null;
	}
};

export const getDisplayStringFromTag = (tag: string) => {
	switch (tag.toLowerCase()) {
		case "artificialintelligence":
			return "Artificial Intelligence";
		case "cryptoinfrastructure":
			return "Crypto Infrastructure";
		case "daosandnetworkstates":
			return "DAOs & Network States";
		case "dataandanylitics":
			return "Data & Analytics";
		case "development":
			return "Development";
		case "financeandpayments":
			return "Finance & Payments";
		case "gamingandentertainment":
			return "Gaming & Entertainment";
		case "ideas":
			return "Ideas";
		case "mobileconsumerapps":
			return "Mobile Consumer Apps";
		case "nfts":
			return "NFTs";
		case "physicalinfrastructurenetworks":
			return "Physical Infrastructure Networks";
		case "social":
			return "Social";
		default:
			return null;
	}
};

type FetchApiResponseParams = {
	url: string;
	method?: string;
	body?: any;
	headers?: HeadersInit;
};

export async function fetchApiResponse<ResultType>({
	url,
	method,
	body,
	headers,
}: FetchApiResponseParams): Promise<ResultType | null> {
	const defaultHeaders = {
		"Content-Type": "application/json",
	};

	const response = await fetch(url, {
		method: method ?? "GET",
		headers: headers ?? defaultHeaders,
		body: body ? JSON.stringify(body) : undefined,
	});

	// callers must null check
	return response.status === 404 ? null : await response.json();
}

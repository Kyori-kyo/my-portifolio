import "@/app/globals.css";
import type { GenerateMetadata } from "@/libs/types/metadata";
import { Inter } from "next/font/google";
import { Providers } from "../context/providers";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata: GenerateMetadata = () => {
	return {
		title: {
			default: "Ríchard's Portfolio",
			template: "%s | Ríchard's Portfolio",
		},
		description: "This is my portifolio, and it tells about me and my career.",
		keywords:
			"Ríchard, Portifolio, Ríchard's Portifolio, Ríchard Lucas, Kyori, Kyori kyo, Ríchard Lucas, Ríchard Lucas",
		viewport: "width=device-width, initial-scale=1",
		creator: "Ríchard Lucas",
		publisher: "Ríchard Lucas",
		authors: [{ name: "Ríchard Lucas" }],
		robots: "index, follow",
		themeColor: [
			{ media: "(prefers-color-scheme: light)", color: "white" },
			{ media: "(prefers-color-scheme: dark)", color: "black" },
		],
		openGraph: {
			type: "website",
			locale: "en",
			siteName: "Ríchard's Portifolio",
			url: "https://kyori.tech",
			title: "Ríchard's Portifolio",
			description:
				"This is my portifolio, and it tells about me and my career.",
			images: [
				{
					url: "/assets/images/og.png",
					width: 1300,
					height: 600,
					alt: "Ríchard's Portifolio",
				},
			],
		},
	};
};

export default async function RootLayout({
	children,
	params,
}: {
	readonly children: React.ReactNode;
	readonly params: Promise<{ readonly locale: string }>;
}) {
	const { locale } = await params;

	return (
		<html lang="en">
			<link rel="icon" href="/assets/images/fireplace.jpg" sizes="any" />
			<body className={inter.className}>
				<Providers locale={locale}>{children}</Providers>
			</body>
		</html>
	);
}

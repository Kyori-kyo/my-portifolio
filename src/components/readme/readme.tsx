"use client";
import { useScopedI18n } from "@/app/locales/client";
import Image from "next/image";

const ReadMe = () => {
	const scopedT = useScopedI18n("readme");
	const anos = new Date().getFullYear() - 2021;
	const idade = new Date().getFullYear() - 2000;

	return (
		<div
			id="readme"
			className={
				"flex flex-col md:justify-center mt-96 md:pt-0 content-center items-center gap-10 md:px-64"
			}
		>
			<section className={"flex flex-col justify-center items-center gap-10"}>
				<div
					className={
						"flex flex-col md:flex-row md:gap-10 justify-center items-center glassMorphDiv md:rounded-3xl py-8 md:py-12 md:px-10 mt-14 md:mt-0"
					}
				>
					<Image
						className={"rounded-full shadow-2xl shadow-gray-950 w-48"}
						src="/assets/images/fireplace.jpg"
						alt="a cup filled with capuccino in a table"
						width={"500"}
						height={"300"}
					/>

					<div>
						<h1 className="mx-10 text-xl md:text-4xl border-b-2 border-orange-500 w-fit">
							.README
						</h1>
						<br />
						<div
							className={
								"flex flex-col text-left text-sm md:text-lg px-10 md:px-0"
							}
						>
							<p>{scopedT("description1", { anos, idade })}</p>
							<p>{scopedT("description2")}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export { ReadMe };

import Image from "next/image";

//todo adicionar props:
// prof pic
// data do post
// nome do autor

type Props = {
	post_title: string;
	post_content: string;
	post_image: string;
};

export const BlogPost = (props: Props) => {
	return (
		<div
			id="pog"
			className={
				"flex flex-col text-black bg-slate-100 rounded-md md:rounded-xl "
			}
		>
			<div className={"relative h-64"}>
				<Image
					src={props.post_image}
					alt=""
					className={"object-cover object-center w-full h-32"}
					fill
				/>
			</div>

			<div className={"p-5"}>
				<div>
					<h2 className={"font-bold text-clip"}>{props.post_title}</h2>
					<p>{props.post_content}</p>
				</div>

				{/* info user + data */}
				<div className={"gap-3"}>
					<Image
						src={"/assets/images/profilePic.png"}
						alt=""
						className={"rounded-full"}
						width={50}
						height={50}
					/>
					<div>
						<p>Meu nome</p>
						<p className={"text-xs"}>17 feb</p>
					</div>
				</div>
			</div>
		</div>
	);
};

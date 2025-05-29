"use client";

const BlogNavbar = () => {
	return (
		<div
			className={
				"flex w-full py-5 sticky justify-center top-0 bg-[rgb(22, 22, 22)] dark:bg-black/[0.3] z-20"
			}
			id="navbar"
		>
			<a
				href="#homePage"
				translate="no"
				className={"hover:scale-110 hover:text-orange-500"}
			>
				.Back to Home
			</a>
		</div>
	);
};

export { BlogNavbar };

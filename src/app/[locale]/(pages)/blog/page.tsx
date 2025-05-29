import { blogPostJson } from "@/app/constants/blogPostJson";
import { BlogNavbar } from "@/components/blog-components/blog-navbar/blog-navbar";
import { BlogPost } from "@/components/blog-components/blog-post/blog-post";

export default function Blog() {
	return (
		<main className="flex flex-col items-center border-top gap-6">
			<BlogNavbar />
			<div className={"flex flex-col w-1/3 gap-2"}>
				<p className={"text-2xl border-b"}>Recent posts:</p>
				<div className={"grid gap-5 w-full"}>
					{blogPostJson.map((blogPost) => {
						return <BlogPost key={blogPost.id} {...blogPost} />;
					})}
				</div>
			</div>
		</main>
	);
}

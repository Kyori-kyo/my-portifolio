import { blogPostJson } from "@/app/constants/blogPostJson";
import BlogNavbar from "@/components/blog-components/blog-navbar/blog-navbar";
import { BlogPost } from "@/components/blog-components/blog-post/blog-post"


export default function blog() {

    return (
        <main className="flex flex-col border-top gap-6 items-center">
            <BlogNavbar />
            <div className={'grid gap-5 w-full md:px-96'}>
                {
                    blogPostJson.map((blogPost, index) => {
                        return (
                            <BlogPost
                                key={blogPost.id}
                                {...blogPost}
                            />
                        )
                    })
                }
            </div>
        </main>
    );
}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import slugify from "../lib/slugify";

import { blogs } from "../../.velite";

const BlogsPage = () => {
	const sortedBlogs = [...blogs].sort((a, b) => {
		const aTime = new Date(a.date).getTime();
		const bTime = new Date(b.date).getTime();
		if (Number.isNaN(aTime) || Number.isNaN(bTime)) {
			return String(b.date).localeCompare(String(a.date));
		}
		return bTime - aTime;
	});

	return (
		<div
			id='top'
			className='relative min-h-screen overflow-hidden bg-neutral-950 text-white'
		>
			<Navbar />

			<main className='relative'>
				<section className='mx-auto max-w-400 px-8 pb-16 pt-32 lg:px-16'>
					<div className='inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-xs tracking-[0.3em] text-[#ff8c42]'>
						<span className='h-0.5 w-12 bg-[#ff8c42]' />
						<span>BLOGS</span>
					</div>

					<h1 className='bbh-bartle-regular mt-6 max-w-5xl wrap-break-word text-3xl font-medium leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-5xl'>
						Blogs
					</h1>

					<p className='mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:mt-6 sm:text-base lg:text-lg'>
						Notes, write-ups, and things I’m learning.
					</p>

					{sortedBlogs.length ? (
						<div className='mt-8 grid gap-6 md:grid-cols-2 lg:mt-10 lg:gap-8'>
							{sortedBlogs.map((blog) => (
								<BlogCard key={blog.slug ?? slugify(blog.title)} blog={blog} />
							))}
						</div>
					) : (
						<div className='mt-10 rounded-xl border border-white/10 bg-neutral-900 p-5 text-sm text-white/70 sm:p-6'>
							No posts yet. Add a markdown file under{" "}
							<span className='text-white/90'>content/blog</span>.
						</div>
					)}
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default BlogsPage;

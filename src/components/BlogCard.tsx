import type { Blog } from "../../.velite";
import { Link } from "react-router-dom";
import slugify from "../lib/slugify";

type Props = {
	blog: Pick<Blog, "title" | "slug" | "description" | "date" | "tags">;
};

function formatDate(dateString: string) {
	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) return dateString;
	return date.toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});
}

export default function BlogCard({ blog }: Props) {
	const slug = blog.slug ?? slugify(blog.title);

	return (
		<article className='rounded-2xl border border-white/10 bg-neutral-900/45 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff8c42]/35 sm:p-6'>
			<div className='flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/60'>
				<span className='text-white/70'>{formatDate(blog.date)}</span>
				{blog.tags?.length ? (
					<>
						<span className='text-orange-500/60' aria-hidden='true'>
							/
						</span>
						<div className='flex flex-wrap gap-2'>
							{blog.tags.slice(0, 4).map((tag) => (
								<span key={tag} className='rounded bg-white/5 px-2 py-1'>
									{tag}
								</span>
							))}
						</div>
					</>
				) : null}
			</div>

			<h3 className='bbh-bartle-regular mt-3 text-base font-semibold text-[#ff8c42] sm:text-2xl'>
				<Link
					to={`/blogs/${slug}`}
					className='underline-offset-4 hover:underline'
				>
					{blog.title}
				</Link>
			</h3>

			{blog.description ? (
				<p className='mt-2 text-sm leading-7 text-white/70 sm:text-base'>
					{blog.description}
				</p>
			) : (
				<p className='mt-2 text-sm leading-7 text-white/50 sm:text-base'>
					No description yet.
				</p>
			)}

			<div className='mt-4'>
				<Link
					to={`/blogs/${slug}`}
					className='text-sm text-white/70 underline-offset-4 transition hover:text-orange-500 hover:underline'
				>
					Read →
				</Link>
			</div>
		</article>
	);
}

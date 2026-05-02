import { getScopedI18n } from "@/app/locales/server";

const Contact = async () => {
	const t = await getScopedI18n("contact");
	const year = new Date().getFullYear();

	return (
		<section id="contact" className="py-28 px-6 md:px-12 bg-[#050509]">
			<div className="max-w-3xl mx-auto flex flex-col items-center gap-12">

				{/* Section label */}
				<div className="flex flex-col items-center gap-3">
					<span className="text-amber-500 text-xs uppercase tracking-[0.4em] font-medium">
						{t("section_title")}
					</span>
					<div className="section-divider w-16" />
				</div>

				<p className="text-[#7070909] text-center text-base md:text-lg max-w-md leading-relaxed text-[#80809a]">
					{t("subtitle")}
				</p>

				{/* Contact cards */}
				<div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center">
					<a
						href="mailto:richardlcmoreira@gmail.com"
						className="glassMorphDiv flex items-center gap-4 px-6 py-4 rounded-xl border border-white/[0.05] hover:border-amber-500/25 transition-colors duration-200 group flex-1"
					>
						<div className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#55556a] group-hover:text-amber-500 group-hover:border-amber-500/20 transition-colors text-sm flex-shrink-0">
							@
						</div>
						<div className="min-w-0">
							<p className="text-xs text-[#55556a]">{t("email_label")}</p>
							<p className="text-sm text-white truncate">richardlcmoreira@gmail.com</p>
						</div>
					</a>

					<a
						href="https://www.linkedin.com/in/richardlucascm/"
						target="_blank"
						rel="noopener noreferrer"
						className="glassMorphDiv flex items-center gap-4 px-6 py-4 rounded-xl border border-white/[0.05] hover:border-amber-500/25 transition-colors duration-200 group flex-1"
					>
						<div className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#55556a] group-hover:text-amber-500 group-hover:border-amber-500/20 transition-colors text-xs font-bold flex-shrink-0">
							in
						</div>
						<div>
							<p className="text-xs text-[#55556a]">{t("linkedin_label")}</p>
							<p className="text-sm text-white">richardlucascm</p>
						</div>
					</a>
				</div>

				{/* Resume CTA */}
				<a
					href="/assets/Richard Resume 26.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="px-8 py-3.5 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
				>
					{t("resume")}
				</a>

				{/* Footer */}
				<div className="flex flex-col items-center gap-3 mt-4 w-full">
					<div className="section-divider w-full" />
					<p className="text-xs text-[#35354a]">
						{year} · {t("footer")}
					</p>
				</div>

			</div>
		</section>
	);
};

export { Contact };

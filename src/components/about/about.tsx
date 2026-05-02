import { getScopedI18n } from "@/app/locales/server";

const About = async () => {
	const t = await getScopedI18n("about");

	return (
		<section id="about" className="py-28 px-6 md:px-12">
			<div className="max-w-4xl mx-auto flex flex-col items-center gap-14">

				{/* Section label */}
				<div className="flex flex-col items-center gap-3">
					<span className="text-amber-500 text-xs uppercase tracking-[0.4em] font-medium">
						{t("section_title")}
					</span>
					<div className="section-divider w-16" />
				</div>

				{/* Bio */}
				<div className="flex flex-col gap-5 text-center md:text-left max-w-3xl">
					<p className="text-lg md:text-xl text-[#c0c0d8] leading-relaxed">
						{t("bio1")}
					</p>
					<p className="text-base md:text-lg text-[#7070909] leading-relaxed text-[#80809a]">
						{t("bio2")}
					</p>
				</div>

				{/* Badges */}
				<div className="flex flex-col sm:flex-row gap-4 items-center">
					<div className="glassMorphDiv flex items-center gap-3 px-5 py-3.5 rounded-xl border border-amber-500/20">
						<div className="w-8 h-8 rounded-full bg-[#009EDB]/10 border border-[#009EDB]/20 flex items-center justify-center text-[#009EDB] text-xs font-bold flex-shrink-0">
							SF
						</div>
						<div className="text-left">
							<p className="text-xs text-[#55556a]">{t("cert_label")}</p>
							<p className="text-sm text-white font-medium">{t("cert_name")}</p>
						</div>
					</div>

					<div className="glassMorphDiv flex items-center gap-2.5 px-5 py-3.5 rounded-xl border border-green-500/20">
						<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
						<p className="text-sm text-[#80c080]">{t("available")}</p>
					</div>
				</div>

			</div>
		</section>
	);
};

export { About };

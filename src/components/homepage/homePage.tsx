import Image from "next/image";
import { getScopedI18n } from "../../app/locales/server";

const HomePage = async () => {
	const t = await getScopedI18n("hero");

	return (
		<section id="homePage" className="relative min-h-screen flex items-center hero-bg">
			<div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20 md:py-0">
				<div className="flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20">

					{/* Text content */}
					<div className="flex-1 flex flex-col gap-8 text-center md:text-left">

						<div className="flex flex-col gap-3 fade-in fade-in-delay-1">
							<span className="text-amber-500 text-xs uppercase tracking-[0.4em] font-medium">
								{t("label")}
							</span>
							<h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05]">
								{t("title")}
								<br />
								<span className="text-amber-500">{t("name_highlight")}</span>
							</h1>
							<p className="text-base md:text-xl text-[#8888aa] font-light pt-1">
								{t("subtitle")}
							</p>
						</div>

						<p className="text-[#60607a] max-w-lg text-base leading-relaxed mx-auto md:mx-0 fade-in fade-in-delay-2">
							{t("tagline")}
						</p>

						{/* Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/[0.06] fade-in fade-in-delay-3">
							<div className="flex flex-col items-center md:items-start gap-0.5">
								<span className="text-3xl font-bold text-amber-400">{t("years")}</span>
								<span className="text-xs text-[#55556a] leading-snug">{t("years_label")}</span>
							</div>
							<div className="flex flex-col items-center md:items-start gap-0.5">
								<span className="text-3xl font-bold text-amber-400">{t("triggers")}</span>
								<span className="text-xs text-[#55556a] leading-snug">{t("triggers_label")}</span>
							</div>
							<div className="flex flex-col items-center md:items-start gap-0.5">
								<span className="text-3xl font-bold text-amber-400">{t("components")}</span>
								<span className="text-xs text-[#55556a] leading-snug">{t("components_label")}</span>
							</div>
							<div className="flex flex-col items-center md:items-start gap-0.5">
								<span className="text-3xl font-bold text-amber-400">{t("companies")}</span>
								<span className="text-xs text-[#55556a] leading-snug">{t("companies_label")}</span>
							</div>
						</div>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start fade-in fade-in-delay-4">
							<a
								href="mailto:richardlcmoreira@gmail.com"
								className="px-7 py-3.5 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
							>
								{t("cta_contact")}
							</a>
							<a
								href="/assets/Richard Resume 26.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="px-7 py-3.5 border border-amber-500/40 text-amber-500 font-semibold rounded-lg hover:border-amber-500 hover:bg-amber-500/5 transition-colors text-sm"
							>
								{t("cta_resume")}
							</a>
						</div>
					</div>

					{/* Profile image */}
					<div className="flex-shrink-0 fade-in fade-in-delay-1">
						<div className="relative">
							<div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-[2px] bg-gradient-to-br from-amber-500/50 via-amber-500/15 to-transparent">
								<div className="w-full h-full rounded-full overflow-hidden bg-[#07070d]">
									<Image
										src="/assets/images/richard1.jpg"
										className="w-full h-full object-cover"
										width={256}
										height={256}
										alt="Ríchard Lucas — Salesforce Developer"
										priority
									/>
								</div>
							</div>
							<div className="absolute inset-0 rounded-full border border-amber-500/10 scale-[1.12] pointer-events-none" />
							<div className="absolute inset-0 rounded-full border border-amber-500/5 scale-[1.28] pointer-events-none" />
						</div>
					</div>

				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#07070d] pointer-events-none" />
		</section>
	);
};

export { HomePage };

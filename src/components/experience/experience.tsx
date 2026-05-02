import { getScopedI18n } from "@/app/locales/server";

const experiences = [
	{
		company: "Sodexo",
		companyDesc: "Corporate Services, Food & Facilities",
		location: "Paris, FR",
		role: "Sr. Salesforce Developer & Technical Architect",
		period: "Mar 2024 — Mar 2026",
		bullets: [
			"Spearheaded a critical Salesforce CPQ implementation collaborating with a global team, streamlining processes and achieving significant cost savings.",
			"Optimized multi-million dollar project workflows through rigorous coding practices and proactive issue resolution.",
			"Designed and implemented a complex ecosystem of 45 Salesforce triggers ensuring smooth integrations without unplanned recursions.",
		],
	},
	{
		company: "Sottelli",
		companyDesc: "Salesforce Specialists",
		location: "Remote",
		role: "Sr. Salesforce Developer",
		period: "Jun 2023 — Feb 2024",
		bullets: [
			"Managed the development of 7 projects across diverse companies and industries.",
			"Delivered 25% performance improvements over previous implementations through optimized trigger architecture.",
			"Built 50+ triggers processed over a thousand times daily across multiple client orgs.",
		],
	},
	{
		company: "Datago",
		companyDesc: "Salesforce & Tableau Consulting",
		location: "Espírito Santo, BR",
		role: "Salesforce Developer & Architect",
		period: "Mar 2022 — Jun 2023",
		bullets: [
			"Led end-to-end development of 5 client-facing projects, onboarding developers and defining project architecture.",
			"Automated 30+ processes, reducing project creation time by 80%.",
			"Delivered responsive mobile applications tested across 30+ device configurations.",
		],
	},
	{
		company: "Kyori Technologies",
		companyDesc: "Software Consulting",
		location: "Remote",
		role: "Salesforce Developer",
		period: "Jan 2018 — Mar 2022",
		bullets: [
			"Served as delegate for an international team of 6 on a critical IT resource migration.",
			"Recommended workforce efficiency improvements contributing to over $2 million in labor cost reductions.",
			"Built responsive web and mobile applications proven across 30+ devices.",
		],
	},
];

const Experience = async () => {
	const t = await getScopedI18n("experience");

	return (
		<section id="experience" className="py-28 px-6 md:px-12">
			<div className="max-w-4xl mx-auto flex flex-col gap-16">

				{/* Section label */}
				<div className="flex flex-col items-center gap-3">
					<span className="text-amber-500 text-xs uppercase tracking-[0.4em] font-medium">
						{t("section_title")}
					</span>
					<div className="section-divider w-16" />
				</div>

				{/* Timeline */}
				<div className="flex flex-col gap-0">
					{experiences.map((exp, index) => (
						<div key={exp.company} className="relative flex gap-8 pb-14 last:pb-0">

							{/* Dot + line */}
							<div className="flex flex-col items-center flex-shrink-0 mt-1">
								<div className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-amber-500/10" />
								{index < experiences.length - 1 && (
									<div className="w-px flex-1 mt-2 bg-gradient-to-b from-amber-500/30 to-amber-500/05" />
								)}
							</div>

							{/* Content */}
							<div className="flex-1 flex flex-col gap-3">
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
									<div>
										<h3 className="text-white font-semibold text-base leading-snug">
											{exp.company}
										</h3>
										<p className="text-[#55556a] text-xs mt-0.5">
											{exp.companyDesc} · {exp.location}
										</p>
									</div>
									<span className="text-amber-500/60 text-xs font-mono flex-shrink-0 pt-0.5">
										{exp.period}
									</span>
								</div>

								<p className="text-[#9090b0] text-sm font-medium">{exp.role}</p>

								<ul className="flex flex-col gap-2 mt-1">
									{exp.bullets.map((bullet) => (
										<li
											key={bullet}
											className="flex gap-2.5 text-sm text-[#60607a] leading-relaxed"
										>
											<span className="text-amber-500/50 flex-shrink-0 mt-[3px] text-[10px]">▸</span>
											{bullet}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
};

export { Experience };

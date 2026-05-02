import { getScopedI18n } from "@/app/locales/server";

const clouds = [
	{
		name: "Sales Cloud",
		desc: "CRM automation, opportunity management, lead scoring and pipeline optimization.",
	},
	{
		name: "Service Cloud",
		desc: "Case management, Omni-Channel routing, knowledge base and field service operations.",
	},
	{
		name: "CPQ & Revenue Cloud",
		desc: "Quote-to-cash implementation, pricing rules, contracts and billing automation.",
	},
	{
		name: "Commerce Cloud",
		desc: "B2B & B2C storefronts, product catalog, checkout flows and order management.",
	},
	{
		name: "Agentforce",
		desc: "AI-powered agents, autonomous workflows, prompt templates and intelligent automation.",
	},
];

const techStack = [
	"Apex",
	"LWC",
	"React",
	"Flows",
	"Platform Events",
	"SOQL / SOSL",
	"REST APIs",
	"Triggers",
	"SFDX",
	"Git",
];

const Expertise = async () => {
	const t = await getScopedI18n("expertise");

	return (
		<section id="expertise" className="py-28 px-6 md:px-12 bg-[#050509]">
			<div className="max-w-6xl mx-auto flex flex-col gap-16">

				{/* Section label */}
				<div className="flex flex-col items-center gap-3">
					<span className="text-amber-500 text-xs uppercase tracking-[0.4em] font-medium">
						{t("section_title")}
					</span>
					<div className="section-divider w-16" />
				</div>

				{/* Clouds */}
				<div className="flex flex-col gap-6">
					<h3 className="text-[#8888aa] text-sm uppercase tracking-widest text-center">
						{t("clouds_title")}
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{clouds.map((cloud) => (
							<div
								key={cloud.name}
								className="glassMorphDiv rounded-xl p-6 flex flex-col gap-3 border border-white/[0.04] hover:border-amber-500/20 transition-colors duration-300"
							>
								<div className="w-1 h-4 rounded-full bg-amber-500/60" />
								<h4 className="text-white font-semibold text-sm">{cloud.name}</h4>
								<p className="text-xs text-[#60607a] leading-relaxed">{cloud.desc}</p>
							</div>
						))}
					</div>
				</div>

				{/* Tech stack */}
				<div className="flex flex-col gap-6">
					<h3 className="text-[#8888aa] text-sm uppercase tracking-widest text-center">
						{t("tech_title")}
					</h3>
					<div className="flex flex-wrap gap-3 justify-center">
						{techStack.map((tech) => (
							<span
								key={tech}
								className="px-4 py-2 rounded-full border border-amber-500/20 text-amber-400/70 text-sm font-medium hover:border-amber-500/40 hover:text-amber-400 transition-colors duration-200 cursor-default"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

			</div>
		</section>
	);
};

export { Expertise };

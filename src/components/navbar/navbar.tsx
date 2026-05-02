"use client";

const Navbar = () => {
	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	const navLinks = [
		{ label: ".Home", id: "homePage" },
		{ label: ".About", id: "about" },
		{ label: ".Expertise", id: "expertise" },
		{ label: ".Experience", id: "experience" },
		{ label: ".Contact", id: "contact" },
	];

	return (
		<nav className="flex justify-center items-center gap-6 fixed top-0 h-14 w-full backdrop-blur-md bg-black/30 border-b border-white/[0.04] z-20">
			{navLinks.map((link) => (
				<button
					key={link.id}
					type="button"
					onClick={() => scrollTo(link.id)}
					className="text-sm text-[#7070909] hover:text-amber-400 transition-colors tracking-wide text-[#70708a]"
				>
					{link.label}
				</button>
			))}
		</nav>
	);
};

export { Navbar };

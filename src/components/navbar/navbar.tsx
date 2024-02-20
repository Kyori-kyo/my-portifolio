"use client";

const Navbar = () => {
    const homeNavigationClick = (element: string) => {
        const elem = document.getElementById(element);

        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const navLinks = [
        { label: ".Home", clickNavigation: "homePage" },
        { label: ".Readme", clickNavigation: "readme" },
        { label: ".Projects", clickNavigation: "projects" },
        { label: ".Others", clickNavigation: "others" },
    ];

    return (
        <div
            className={
                "flex justify-center items-center gap-5 fixed top-0 h-16 w-full bg-[rgb(22, 22, 22)] backdrop-blur dark:bg-black/[0.3] z-20"
            }
        >
            {navLinks.map((link) => {
                return (
                    <button
                        key={`id__${link.label}`}
                        type="button"
                        onClick={() => homeNavigationClick(link.clickNavigation)}
                        className={"hover:scale-110 hover:text-orange-500"}
                    >
                        {link.label}
                    </button>
                );
            })}

            {/* <Link href="blog" translate="no" className={'hover:scale-110 text-orange-500 hover:text-gray-400'}>.Blog</Link> */}
        </div>
    );
};

export { Navbar };

"use client";
type Props = {}

const Navbar = (props: Props) => {
    const handleClick = (element: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

        element.preventDefault();

        const href = element.currentTarget.href;
        const targetId = href.replace(/.*#/, "");
        const elem = document.getElementById(targetId);

        elem?.scrollIntoView({
            behavior: "smooth",
        });
    }

    return (
        <div className={'flex justify-center items-center gap-5 fixed top-0 h-16 w-full bg-[rgb(22, 22, 22)] backdrop-blur dark:bg-black/[0.3] z-20'}>
            <a href="#homePage" onClick={(element) => handleClick(element)} translate="no" className={'hover:scale-110 hover:text-orange-500'}>.Home</a>
            <a href="#readMe" onClick={(element) => handleClick(element)} translate="no" className={'hover:scale-110 hover:text-orange-500'}>.Readme</a>
            <a href="#projects" onClick={(element) => handleClick(element)} translate="no" className={'hover:scale-110 hover:text-orange-500'}>.Projects</a>
            <a href="#contact" onClick={(element) => handleClick(element)} translate="no" className={'hover:scale-110 hover:text-orange-500'}>.Others</a>
        </div>
    )
}

export default Navbar;
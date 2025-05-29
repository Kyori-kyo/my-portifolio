import React from "react";

interface Props {
	className?: string;
	"aria-label"?: string;
}

const SvgTwitter = ({
	className,
	"aria-label": ariaLabel,
	...props
}: Props) => {
	return (
		<div className={className || "bg-[#afafaf] rounded-full p-1.5"}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width="25"
				height="25"
				viewBox="0 0 256 256"
				aria-label={ariaLabel || "Twitter / X"}
				role="img"
				{...props}
			>
				<defs />
				<g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
					<path
						d="M 0.219 2.882 l 34.748 46.461 L 0 87.118 h 7.87 l 30.614 -33.073 l 24.735 33.073 H 90 L 53.297 38.043 L 85.844 2.882 h -7.87 L 49.781 33.341 L 27.001 2.882 H 0.219 z M 11.793 8.679 h 12.303 L 78.425 81.32 H 66.122 L 11.793 8.679 z"
						transform=" matrix(1 0 0 1 0 0) "
						strokeLinecap="round"
					/>
				</g>
			</svg>
		</div>
	);
};

export default SvgTwitter;

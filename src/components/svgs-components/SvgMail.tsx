import React from "react";

interface Props {
	className?: string;
	"aria-label"?: string;
}

const SvgMail = ({ className, "aria-label": ariaLabel, ...props }: Props) => {
	return (
		<div className={className || "bg-[#000] rounded-full p-2.5"}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 28 28"
				aria-label={ariaLabel || "Email"}
				role="img"
				{...props}
			>
				<path
					fill="currentColor"
					d="M6.25 5h15.5a3.25 3.25 0 0 1 3.245 3.066L25 8.25v11.5a3.25 3.25 0 0 1-3.066 3.245L21.75 23H6.25a3.25 3.25 0 0 1-3.245-3.066L3 19.75V8.25a3.25 3.25 0 0 1 3.066-3.245L6.25 5h15.5h-15.5Zm17.25 5.905l-9.154 4.76a.75.75 0 0 1-.58.047l-.112-.047l-9.154-4.76v8.845a1.75 1.75 0 0 0 1.606 1.744l.144.006h15.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-8.845ZM21.75 6.5H6.25a1.75 1.75 0 0 0-1.744 1.606L4.5 8.25v.964l9.5 4.94l9.5-4.94V8.25a1.75 1.75 0 0 0-1.607-1.744L21.75 6.5Z"
				/>
			</svg>
		</div>
	);
};

export default SvgMail;

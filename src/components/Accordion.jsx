import { Accordion as RadixAccordion } from "radix-ui";
import * as React from "react";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Accordion = ({children}) => (
	<RadixAccordion.Root
		className="w-full flex flex-col gap-3 bg-mauve6 shadow-[0_2px_10px] shadow-black/5"
		type="multiple"
		collapsible="true"
	>
    {children}
	</RadixAccordion.Root>
);

Accordion.Item = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<RadixAccordion.Item
			className={classNames(
				"overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12",
				className,
			)}
			{...props}
			ref={forwardedRef}
		>
			{children}
		</RadixAccordion.Item>
	),
);

Accordion.Trigger = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<RadixAccordion.Header className="flex">
			<RadixAccordion.Trigger
				className={classNames(
					"group flex h-[45px] flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-[15px] leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2",
					className,
				)}
				{...props}
				ref={forwardedRef}
			>
				{children}
        <ChevronDownIcon
					className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
					aria-hidden
				/>
			</RadixAccordion.Trigger>
		</RadixAccordion.Header>
	),
);

Accordion.Body = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<RadixAccordion.Content
			className={classNames(
				"overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
				className,
			)}
			{...props}
			ref={forwardedRef}
		>
			<div className="px-5 py-[15px] font-normal">{children}</div>
		</RadixAccordion.Content>
	),
);

export default Accordion;

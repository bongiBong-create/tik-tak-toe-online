import clsx from "clsx";

/**
 * @param {{
 *children,
 *className: string,
 *size: "md" | "lg",
 *variant: "primary" | "outline"
 *}} props
 */

export function UiBtn({ children, className, variant, size }) {
  const btnClassName = clsx(
    "transition-colors",
    className,
    {
      md: "text-sm leading-tight rounded px-6 py-2",
      lg: "text-2xl leading-tight rounded-lg px-5 py-2",
    }[size],
    {
      primary: "bg-teal-600 hover:bg-teal-500 text-white ",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );

  return <button className={btnClassName}>{children}</button>;
}

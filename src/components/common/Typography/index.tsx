// import React from "react";

// export type TypographyProps = {
//   readonly component?: React.ElementType;
//   readonly preset?: TextPresets | string | Text | undefined;
//   readonly color?: Color | string;
//   readonly style?: CSSProperties;
//   readonly align?: "left" | "center" | "right";
//   readonly className?: string;
//   readonly onClick?: (...args: any[]) => void;
// };

// export const Typography: React.FC<TypographyProps> = ({
//   children,
//   color = "paragraph",
//   component = "p",
//   preset = "button-text",
//   style,
//   align,
//   className: classNameFromProps,
//   onClick,
// }) => {
//   const className = clsx(
//     styles.root,
//     styles[preset],
//     styles[color],
//     styles[align!],
//     classNameFromProps
//   );

//   return React.createElement(
//     component,
//     { style, className, onClick },
//     children
//   );
// };

import React from "react";
import style from "./style.module.sass";

interface Props {
  tag?: keyof JSX.IntrinsicElements,
  size?: string,
  children: React.ReactNode,
  className?: string
}

const txtFactory = (role: string) => ({
  tag: Tag = "p",
  size = "m",
  children,
  className
}: Props) => (
  <Tag className={[style[role], style[size], className].join(" ")} >
    {children}
  </Tag>
);

export const Txt = txtFactory("black");
export const WhiteTxt = txtFactory("white");

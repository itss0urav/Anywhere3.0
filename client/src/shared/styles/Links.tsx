import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "@/utils/cn";

interface StyledLink extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const Links: React.FC<StyledLink> = ({
  to,
  children,
  className,
  ...props
}) => {
  const classes = cn(
    "bg-gradient-to-r from-slate-50 to-slate-200 bg-clip-text text-transparent",
    className
  );

  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  );
};

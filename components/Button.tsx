import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary: "bg-ink text-white shadow-soft hover:bg-black",
  secondary: "bg-white text-ink ring-1 ring-slate-200 hover:ring-slate-300",
  ghost: "text-slate-700 hover:bg-slate-100"
};

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex h-11 cursor-pointer items-center justify-center rounded-md px-5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      className={cn(
        "inline-flex h-11 cursor-pointer items-center justify-center rounded-md px-5 text-sm font-semibold transition",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

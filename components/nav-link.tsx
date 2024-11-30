"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "nav-item",
        path.startsWith(href) ? "nav-item-active" : undefined
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;

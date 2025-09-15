"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/animation/DockAnimation";

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export default function NavDock({ items, pathname }: { items: NavItem[]; pathname: string }) {
  return (
    <Dock className='items-end pb-3 rounded-full'>
      {items.map((item, idx) => (
        <Link href={item.href} key={idx}>
          <DockItem
            className={cn(
              "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
              pathname === item.href && " bg-gray-100 !border !border-primary-sky"
            )}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon className={cn(pathname === item.href && "text-[#2f7df4]")}>{item.icon}</DockIcon>
          </DockItem>
        </Link>
      ))}
    </Dock>
  );
}


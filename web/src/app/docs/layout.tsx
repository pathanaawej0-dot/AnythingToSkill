"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menu = [
    {
      title: "Getting Started",
      links: [
        { label: "Introduction", href: "/docs" },
        { label: "Installation", href: "/docs/installation" },
        { label: "How to Use", href: "/docs/usage" },
      ],
    },
    {
      title: "Sources",
      links: [
        { label: "YouTube", href: "/docs/sources/youtube" },
        { label: "Websites", href: "/docs/sources/docs" },
        { label: "Source Code", href: "/docs/sources/code" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col lg:flex-row gap-16">
      <aside className="lg:w-64 space-y-12 lg:sticky lg:top-32 h-fit border-b lg:border-b-0 border-surface pb-12 lg:pb-0">
        {menu.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-accent">
              {section.title}
            </h3>
            <ul className="space-y-3 text-sm">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-ink ${
                      pathname === link.href ? "text-ink font-bold" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
      <main className="flex-1 max-w-3xl">
        {children}
      </main>
    </div>
  );
}

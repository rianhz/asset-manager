"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type BreadcrumbItemType = {
  label: string;
  href: string;
};

export function BaseBreadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs?: BreadcrumbItemType[];
}) {
    const dummyBreadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shared", href: "/shared" },
    { label: "Shared Drive", href: "/shared/1234567890" },
    { label: "Files", href: "/shared/1234567890/files" },
    { label: "Settings", href: "/shared/1234567890/settings" },
    { label: "Users", href: "/shared/1234567890/users" },
    { label: "Permissions", href: "/shared/1234567890/permissions" },
    { label: "Sharing", href: "/shared/1234567890/sharing" },
    { label: "Users", href: "/shared/1234567890/users" },
    { label: "Permissions", href: "/shared/1234567890/permissions" },
  ];

  const items = useMemo<BreadcrumbItemType[]>(() => {
    return breadcrumbs || dummyBreadcrumbs;
  }, [breadcrumbs]);



  const shouldCollapse = items?.length > 4;

  const firstItem = items[0];
  const lastItems = shouldCollapse ? items.slice(-2) : items.slice(1);
  const hiddenItems = shouldCollapse ? items.slice(1, -2) : [];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {firstItem && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={firstItem.href}>{firstItem.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {items.length > 1 && <BreadcrumbSeparator />}
          </>
        )}
        {shouldCollapse && (
          <>
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    className="h-8 w-8"
                  >
                    <BreadcrumbEllipsis />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start">
                  <DropdownMenuGroup>
                    {hiddenItems.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
          </>
        )}

        {lastItems.map((item, index) => {
          const isLast = index === lastItems.length - 1;

          return (
            <div key={item.href} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
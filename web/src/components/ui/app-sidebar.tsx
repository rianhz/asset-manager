"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import BaseLogo from "../base/BaseLogo";

import {
  Settings,
  Home,
  Workflow,
  Folders,
  Trash,
} from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();

  const items = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Shared", url: "/shared", icon: Folders },
    { title: "Integrations", url: "/integrations", icon: Workflow },
    { title: "Settings", url: "/settings", icon: Settings },
  ];

  const { isMobile} = useSidebar();

  return (
    <Sidebar variant="sidebar" collapsible={!isMobile ? 'none' : 'offcanvas'}>
      <SidebarHeader>
        <div className="flex justify-center items-center py-2">
          <BaseLogo />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                    >
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/recycle-bin">
                <Trash className="h-4 w-4" />
                <span>Recycle Bin</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
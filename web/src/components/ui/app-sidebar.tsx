import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import BaseLogo from "../base/BaseLogo"

export function AppSidebar() {
  const { open, isMobile } = useSidebar();
  return (
    <Sidebar variant="sidebar" collapsible={isMobile ? "icon" : "none"}>
      <SidebarHeader>
        <div className="flex justify-center items-center py-2">
          <BaseLogo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h1>Dashboard</h1>
          </SidebarGroupLabel>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h1>Dashboard</h1>
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
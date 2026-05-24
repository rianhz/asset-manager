
"use client";

// "use client";
// import { ProfileDropdown } from "../dropdown/ProfileDropdown"
// import BaseLogo from "../base/BaseLogo"
// import { DarkModeToggle } from "../toggler/DarkModeToggle"

// export const BaseLoggedInNavTop = () => {
//     return (
//         <div className="flex items-center justify-between py-2 px-8 border-b border-border">
//             <div className="flex items-center gap-2">
//                 <BaseLogo />
//             </div>
//             <div className="flex items-center gap-6">
//                 <DarkModeToggle />
//                 <ProfileDropdown />
//             </div>
//         </div>
//     )
// }

// components/DashboardNavbar.tsx


interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export default function DashboardNavbar({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) {
  return (
    // <Navbar isBordered maxWidth="full" className="h-16">
    //   {/* Mobile Toggle Button - Hidden on desktop (md and up) */}
    //   <NavbarContent className="md:hidden" justify="start">
    //     <NavbarMenuToggle 
    //       isSelected={isSidebarOpen}
    //       onValueChange={setIsSidebarOpen}
    //     />
    //   </NavbarContent>

    //   {/* Brand Logo */}
    //   <NavbarContent justify="start">
    //     <NavbarBrand>
    //       <p className="font-bold text-inherit text-xl">ACME CORP</p>
    //     </NavbarBrand>
    //   </NavbarContent>

    //   {/* Right Aligned Quick Actions */}
    //   <NavbarContent justify="end">
    //     <NavbarItem>
    //       <Button as={Link} color="primary" href="#" variant="flat" radius="full">
    //         Log Out
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>
    <></>
  );
}
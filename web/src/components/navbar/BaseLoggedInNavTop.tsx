"use client";
import { ProfileDropdown } from "../auth/ProfileDropdown"
import BaseLogo from "../base/BaseLogo"
import { DarkModeToggle } from "../toggler/DarkModeToggle"

export const BaseLoggedInNavTop = () => {
    return (
        <div className="flex items-center justify-between py-2 px-8 border-b border-border">
            <div className="flex items-center gap-2">
                <BaseLogo />
            </div>
            <div className="flex items-center gap-6">
                <DarkModeToggle />
                <ProfileDropdown />
            </div>
        </div>
    )
}
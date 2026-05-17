"use client";

import { Dropdown, Avatar, Label } from "@heroui/react";

export const ProfileDropdown = () => {
  return (
     <Dropdown>
     <Dropdown.Trigger>
        <Avatar>
          <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
     </Dropdown.Trigger>

      <Dropdown.Popover placement="bottom right">
        <Dropdown.Menu
          onAction={(key) => console.log(`Selected: ${key}`)}
        >
          <Dropdown.Item id="profile" textValue="Profile">
            Profile
          </Dropdown.Item>

          <Dropdown.Item id="settings" textValue="Settings">
            Settings
          </Dropdown.Item>

          <Dropdown.Item id="logout" textValue="Logout">
            <Label className="text-danger">Logout</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};
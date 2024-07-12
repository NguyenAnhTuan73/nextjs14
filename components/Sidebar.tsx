"use client";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import UserItem from "./UserItem";
import {
  Bell,
  Cookie,
  CreditCard,
  icons,
  Mail,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";

export default () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Profile",
          icon: <User />,
        },
        {
          link: "/",
          text: "Inbox",
          icon: <Mail />,
        },
        {
          link: "/",
          text: "Billing",
          icon: <CreditCard />,
        },
        {
          link: "/",
          text: "Logs",
          icon: <MessageSquare />,
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "General Settings",
          icon: <Settings />,
        },
        {
          link: "/",
          text: "Privacy",
          icon: <Cookie />,
        },
        {
          link: "/",
          text: "Notifications",
          icon: <Bell />,
        },
      ],
    },
  ];
  return (
    <div
      className="  flex flex-col  w-[300px] min-w-[300px] border-r min-h-screen p-4 gap-4npx shadcn-ui@latest add command
"
    >
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command className="h-full">
          <CommandList>
            {menuList &&
              menuList.map((items: any, index: number) => {
                return (
                  <CommandGroup key={index} heading={items.group}>
                    {items.items.map((item: any, index: number) => {
                      return (
                        <CommandItem
                          key={index}
                          className=" flex gap-2 cursor-pointer"
                        >
                          <span className="">{item.icon}</span>
                          <span className="text-base">{item.text}</span>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                );
              })}
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notifications</div>
    </div>
  );
};

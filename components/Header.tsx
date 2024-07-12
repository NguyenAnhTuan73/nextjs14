"use client";

import { Bell, BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [notification, setNotification] = useState<any>([
    {
      text: "This is a notification",
      date: "12-07-2024",
      read: true,
    },
    {
      text: "This is another notification",
      date: "12-07-2024",
      read: false,
    },
  ]);
  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b ">
      <CommandDemo />
      <div className="flex items-center justify-end relative">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon">
              <div
                className={` absolute  top-1  right-1 h-2 w-2 rounded-full my-1 ${
                  notification.find((x: any) => x.read === true)
                    ? "bg-green-500"
                    : "bg-neutral-300"
                }`}
              ></div>
              <BellIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white " align="end">
            {notification.map((item: any, index: number) => (
              <DropdownMenuItem
                key={index}
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    item.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div className="">
                  <p>{item.text}</p>
                  <p className="text-sm text-neutral-400">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;

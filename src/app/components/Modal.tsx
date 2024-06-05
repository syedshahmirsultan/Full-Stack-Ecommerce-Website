import { Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


export function DropdownMenuDemo({user}:{user:KindeUser|null}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Avatar className="mr-4 cursor-pointer mb-2 lg:mb-1">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>SS</AvatarFallback>
    </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56` mr-6">
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>{user?.given_name}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>{user?.email}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutLink>Log Out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

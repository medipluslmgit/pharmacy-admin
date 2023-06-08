import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/components/layout/navbar/types"
import { cn } from "@/lib/utils"
import Logo from "./navbar-logo"

interface NavOptionsProps {
  items?: NavItem[]
}

export function NavOptions({ items }: NavOptionsProps) {
  return (
    <div className="flex gap-6  md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}

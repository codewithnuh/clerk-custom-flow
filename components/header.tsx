"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useClerk } from "@clerk/nextjs";
const Header = () => {
  const { signOut } = useClerk();
  return (
    <header className="container">
      <nav className="flex justify-between items-center py-4 ">
        <span>CustomFlow</span>
        <ul className="flex space-x-4">
          <li>
            <Link href={"/sign-up"}>Sign Up</Link>
          </li>
          <li>
            <Link href={"/sign-in"}>Sign In</Link>
          </li>
          <li>
            <Button onClick={() => void signOut({ redirectUrl: "/" })}>
              Sign Out
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

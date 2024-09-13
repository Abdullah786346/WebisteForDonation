"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuAlignJustify } from "react-icons/lu";

import { FaBell, FaChevronDown, FaSearch, FaUser } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import SettingsNav from "@/components/SettingsNav";
import Header from "@/components/Header";

export default function LayoutTest({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}

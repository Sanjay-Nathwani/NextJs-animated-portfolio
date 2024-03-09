"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({link}) => {
    const pathName = usePathname();

    return (
        <Link href={link.url} className={`font-semibold rounded p-1 ${pathName === link.url && "bg-black text-white"}`}>{link.title}</Link>
    )
}

export default NavLink;
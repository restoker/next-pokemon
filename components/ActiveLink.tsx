import Link from "next/link"
import {useRouter} from 'next/router';
import React from "react";

interface Props {
    texto: string,
    href: string,
    children?: React.ReactNode | undefined
}

export const ActiveLink = ({texto, href}: Props) => {
  const router = useRouter();
//   console.log(router);
  return (
    <Link href={`${href}`}>
        <a
            className={router.pathname === href ? "bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium underline" : "text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
        >
            {texto}
        </a>
    </Link>
  )
}

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import down from "../../../public/assets/svg/down.svg";

const HomeDown = () => {
    return (
        <Link
            href="#home"
            className="absolute hidden lg:block down-animation infinite bottom-5 w-20 h-20 z-50 inset-x-1/2"
        >
            <Image width={24} height={24} src={down} alt="Down" />
        </Link>
    )
}

export default HomeDown
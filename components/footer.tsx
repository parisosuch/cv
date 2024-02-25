'use client'

import { useRouter } from "next/navigation"

export default function Footer() {
    let year = new Date().getFullYear()
    const router = useRouter();

    return (
        <div className="w-full text-center">
            <p className="text-xs">designed by paris osuch // {year}</p>
            <button onClick={() => { router.back() }} className="underline text-xs">site analytics</button>
        </div>
    )
}
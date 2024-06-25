'use client'
import { Card } from "@/components/modules/Card";
import { ResultPagination } from "@/components/modules/ResultPagination";
import { Noto_Sans_JP } from 'next/font/google';

const nsJpFont = Noto_Sans_JP({
    preload: false,
    variable: "--font-noto-sans-jp",
});

export default function result() {
    return (
        <div className={`${nsJpFont.className} flex flex-col justify-center mt-12 flex-grow`}>
            <Card />
            <ResultPagination />
        </div>
    )
}


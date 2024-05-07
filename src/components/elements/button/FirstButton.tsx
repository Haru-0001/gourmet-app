import Link from "next/link";

const FirstButton= () => {
    return(
        <Link href="/result">
        <button className="flex justify-center items-center rounded-full size-80 ring-4 ring-blue-950">
            <svg className="size-9/12 " width="80" height="80" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M 100 500 Q 100 375 200 350 Q 200 200 350 200 Q 500 50 650 200 Q 800 200 800 350 Q 900 375 900 500 L 950 500 Q 950 850 650 900 L 650 950 350 950 350 900 Q 50 850 50 500 Z" stroke="#000" strokeWidth="75" fill="none" />
            </svg>
            <div className="animate-ping rounded-full absolute size-56 ring-4" ></div>
        </button>
        </Link>
    )
}
export default FirstButton;
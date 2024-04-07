import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
            {/* bg-tarantinoYellow text-offBlack w-fit p-2 */}
            <div className="404 -ml-[25.5px]">
                <h1 className="text-[200px] uppercase leading-[12rem]">
                    404
                </h1>
                <h1 className="text-[150px] uppercase leading-[9rem] w-[80%]">page not found</h1>
                <button className="h3 bg-transparent border-[1.5px] border-blancheWhite text-blancheWhite py-[.8rem] px-8 button hover:bg-tarantinoYellow hover:!text-offBlack hover:border-tarantinoYellow hover:rounded-[.8rem] mt-12 duration-200 ease-in-out">
                    <Link className="hover:!text-offBlack" href={"/"}>
                        go home
                    </Link>
                </button>
            </div>
        </>
    )

}
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { PageSign } from "../elements/sign/PageSign"
import { useAtom, useAtomValue } from "jotai"
import { maxPageAtom, paginationAtom } from "@/store/paginationAtom"
import { themeTime } from "@/features/time/sepHour"
import { themeColor } from "@/store/themes"

const ResultPagination = () => {
    const time = themeTime();
    const theme = themeColor[time].primaryBg;
    const [pageValue , setPageValue] = useAtom(paginationAtom)
    const maxPage = useAtomValue(maxPageAtom)
    const pageDiff = maxPage - pageValue
    const handlePageChange = (page : number) => {
        setPageValue(page);
        window.scrollTo(0,0);
};
    return(
        <>
        {maxPage >= 2 &&  (
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        {pageValue > 1 ? (
                        <PaginationPrevious href="" onClick={() => handlePageChange(pageValue-1)} />
                        ) : (
                        <PaginationPrevious />
                        )}
                    </PaginationItem>
                    {pageValue > 2 ? (
                    <><PaginationItem>
                            <PaginationLink href="" onClick={() => handlePageChange(1)}>{1}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                            <PaginationEllipsis />
                    </PaginationItem></>
                    ):(
                    <><PaginationItem><PaginationLink /></PaginationItem>
                    <PaginationItem><PaginationLink /></PaginationItem></>
                    )
                    }
                    <PaginationItem>
                        {pageValue > 1 ? (
                            <PaginationLink href="" onClick={() => handlePageChange(pageValue-1)}>{pageValue-1} </PaginationLink>
                        ) : (
                            <PaginationLink />
                        )}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className={`text-white ${theme}`}>{pageValue}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        {pageDiff > 0 ? (
                            <PaginationLink href="" onClick={() => handlePageChange(pageValue+1)}>{pageValue+1} </PaginationLink>
                        ) : (
                            <PaginationLink />
                        )}
                    </PaginationItem>
                    {pageDiff > 1 ? (
                        <><PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="" onClick={() => handlePageChange(maxPage)}>{maxPage}</PaginationLink>
                        </PaginationItem></>
                    ):(
                        <><PaginationItem><PaginationLink /></PaginationItem>
                        <PaginationItem><PaginationLink /></PaginationItem></>
                    )}
                    <PaginationItem>
                        {pageDiff > 0 ? (
                        <PaginationNext href="" onClick={() => handlePageChange(pageValue+1)}/>
                        ) : (
                        <PaginationNext />
                        )}
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        )}
        {maxPage !== 0 &&<PageSign />}
        </>
    );
}


export {ResultPagination}
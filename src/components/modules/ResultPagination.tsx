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
import { useAtomValue } from "jotai"
import { maxPageAtom, paginationAtom } from "@/store/paginationAtom"

const ResultPagination = () => {
    const pageValue = useAtomValue(paginationAtom)
    const maxPage = useAtomValue(maxPageAtom)
    return(
        <>
        {
            maxPage >= 2 &&  (
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#"></PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#"></PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">{pageValue}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">{maxPage}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )
        }
        {maxPage !== 0 &&
        <PageSign />
        }
        </>
    );
}


export {ResultPagination}
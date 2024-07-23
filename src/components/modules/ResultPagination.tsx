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
import { maxPageAtom } from "@/store/paginationAtom"

const ResultPagination = () => {
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
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        {maxPage > 2 && (
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        )}
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
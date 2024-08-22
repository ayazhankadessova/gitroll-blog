'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from './ui/pagination'

interface QueryPaginationProps {
  totalPages: number
  className?: string
}

export function CustomPagination({
  totalPages,
  className,
}: QueryPaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 1

  const prevPage = currentPage - 1
  const nextPage = currentPage + 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        <p className='font-bold'>
          Page {currentPage} of {totalPages}{' '}
        </p>

        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(prevPage)}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={
              currentPage <= 1 ? 'pointer-events-none opacity-20' : undefined
            }
          />
        </PaginationItem>

        <PaginationNext
          href={createPageURL(nextPage)}
          aria-disabled={nextPage > totalPages}
          tabIndex={nextPage > totalPages ? -1 : undefined}
          className={
            nextPage > totalPages ? 'pointer-events-none opacity-20' : undefined
          }
        />
      </PaginationContent>
    </Pagination>
  )
}

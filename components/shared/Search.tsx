'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'

export const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [query, setQuery] = useState(searchParams.get('query') || '')

  // Limpiar input si la URL pierde el query (paginación)
  useEffect(() => {
    const urlQuery = searchParams.get('query') || ''
    if (!urlQuery && query) setQuery('')
  }, [searchParams])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      const currentUrlQuery = params.get('query') || ''

      if (query === currentUrlQuery) return

      if (query) {
        params.set('query', query)
        params.delete('page') // reset page al buscar
      } else {
        params.delete('query')
        params.delete('page')
      }

      router.push(`/?${params.toString()}`, { scroll: false })
    }, 300)

    return () => clearTimeout(timeout)
  }, [query, router, searchParams])

  return (
    <div className="search">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />

      <Input
        className="search-field"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

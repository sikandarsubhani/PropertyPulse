// app/properties/[...id]/page.jsx
'use client'
import React from 'react'

import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation'

const PropertyPageId = () => {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  return (
    <div>PropertyPage {params.id} {searchParams.get('name')}
      {pathname}
      <button onClick={() => router.replace('/')}></button>
    </div >

  )
}

export default PropertyPageId
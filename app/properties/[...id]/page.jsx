// // app/properties/[...id]/page.jsx
// // 'use client'
import connectDB from '@/config/database'
import Property from '@/models/Property'
import PropertyHeaderImage from '@/components/PropertyHeaderImage'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import PropertyDetails from '@/components/PropertyDetails'
// import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation'

const PropertyPageId = async ({ params }) => {
  // console.log(params)
  await connectDB()
  const property = await Property.findById(params.id)
  console.log(property);

  // if (!property) return <p>Property not found</p>
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className='mr-2' />
            Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
    </>
  )
}

export default PropertyPageId



// import connectDB from '@/config/database'
// import Property from '@/models/Property'
// import PropertyHeaderImage from '@/components/PropertyHeaderImage'
// import Link from 'next/link'
// import { FaArrowLeft } from 'react-icons/fa'

// export const dynamic = 'force-dynamic' // Ensures Next.js treats it as a dynamic page

// const PropertyPageId = async ({ params }) => {
//   console.log(params)
//   await connectDB()

//   // Use the correct dynamic parameter key
//   const property = await Property.findById(params.id).lean()

//   if (!property) {
//     return <p className="text-center text-red-500 mt-10">Property not found</p>
//   }

//   return (
//     <>
//       <PropertyHeaderImage image={property.images[0]} />
//       <section>
//         <div className="container m-auto py-6 px-6">
//           <Link
//             href="/properties"
//             className="text-blue-500 hover:text-blue-600 flex items-center"
//           >
//             <FaArrowLeft className='mr-2' />
//             Back to Properties
//           </Link>
//         </div>
//       </section>
//       <section className="bg-blue-50">
//         <div className="container m-auto py-10 px-6">
//           <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
//             <div>
//               <h1 className="text-2xl font-bold">{property.name}</h1>
//               <p className="mt-4">{property.description}</p>
//               <p className="mt-2 font-semibold">Price: ${property.price}</p>
//               {/* Add other property details here */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default PropertyPageId

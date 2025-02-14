// app/properties/page.jsx

// import properties from '@/properties.json'
import connect from '@/config/database'
import Property from '@/models/Property'
import PropertyCard from '@/components/PropertyCard'


const PropertiesPage = async () => {
  connect()
  // const db = await connectDB()
  // console.log(db)

  const properties = JSON.parse(JSON.stringify(await Property.find({}).lean()))
  // console.log(properties)
  return (
    <section className='px-4 py-6'>
      <div>
        {properties.length === 0 ? ('No Properties Found') : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
              properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            }
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertiesPage
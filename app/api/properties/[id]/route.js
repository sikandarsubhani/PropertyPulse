// app/api/properties/[id]/route.js
import connectDB from "@/config/database"
import Property from "@/models/Property"

export const GET = async (request, { params }) => {
  try {
    await connectDB()
    const property = await Property.findById(params.id)
    if (!property) return new Response('Property not Found', { status: 400 })

    return new Response(JSON.stringify(property), { status: 200 })

  } catch (error) {
    return new Response('something went wrong', { status: 500 })
  }

}

// app/loading.jsx
'use client'
import { getDisplayName } from "next/dist/shared/lib/utils"
import ClipLoader from "react-spinners/ClipLoader"

const override = {
  display: 'block',
  margin: '100px auto'
}

const loading = () => {
  return <ClipLoader color="#3b83f6" cssOverride={override} size={150} aria-label="Loading Spinner" />
}

export default loading
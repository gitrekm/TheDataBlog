import React from "react"
import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 1234567

function HomePage() {
  return (
    <ConvertKitForm formId={MY_FORM_ID} />
  )
}
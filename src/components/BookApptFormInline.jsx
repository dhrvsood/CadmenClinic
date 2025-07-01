import * as React from "react";
import { PlasmicBookApptFormInline } from "./plasmic/cadmenclinic_migration/PlasmicBookApptFormInline";
import { formToBooking } from "../helpers/form_to_booking";

function BookApptFormInline_(props, ref) {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      firstName,
      lastName,
      email,
      phone
    }

    const selectedService = {
      service: 'Lip Filler',
      serviceId: '52bf840f-fa30-472f-a89e-073cb60bc786',
      serviceTitle: 'Lip Filler'
    }

    formToBooking(formData, selectedService)
  }

  return <PlasmicBookApptFormInline 
    root={{ ref }} {...props} 
    onSubmit={handleSubmit} 
    firstName={{
      onChange: (e) => setFirstName(e.target.value),
      value: firstName
    }}
    lastName={{
      onChange: (e) => setLastName(e.target.value),
      value: lastName
    }}
    phone={{
      onChange: (e) => setPhone(e.target.value),
      value: phone
    }}
    email={{
      onChange: (e) => setEmail(e.target.value),
      value: email
    }}
  />
}

const BookApptFormInline = React.forwardRef(BookApptFormInline_);

export default BookApptFormInline;

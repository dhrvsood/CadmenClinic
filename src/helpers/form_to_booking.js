export const formToBooking = (formData, selectedService) => {  
  const formDataString = JSON.stringify(formData)
  const encodedFormData = encodeURIComponent(formDataString);
  
  const selectedServiceString = JSON.stringify(selectedService)
  const encodedSelectedService = encodeURIComponent(selectedServiceString)

  document.cookie = "formData=" + encodedFormData + "; path=/; max-age=3600; SameSite=Strict"
  document.cookie = "selectedService=" + encodedSelectedService + "; path=/; max-age=3600; SameSite=Strict"
  
  window.location.href = '/book-now'
}

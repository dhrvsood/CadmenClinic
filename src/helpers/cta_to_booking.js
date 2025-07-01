export const ctaToBooking = (selectedService) => {    
  const encodedSelectedService = encodeURIComponent(selectedService)

  document.cookie = "selectedService=" + encodedSelectedService + "; path=/; max-age=3600; SameSite=Strict"
  
  window.location.href = '/book-now'
}

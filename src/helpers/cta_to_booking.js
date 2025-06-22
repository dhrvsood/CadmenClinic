export const ctaToBooking = (selectedService) => {    
  const encodedSelectedService = encodeURIComponent(selectedService)

  document.cookie = "selectedService=" + encodedSelectedService + "; path=/; max-age=3600; SameSite=Strict"
  
  window.location.href = 'https://cadmenclinic.ca.zenoti.com/webstoreNew/services'
}

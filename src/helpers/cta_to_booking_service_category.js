export const ctaToBookingServiceCategory = (selectedCategory) => {    
  const encodedSelectedCategory = encodeURIComponent(selectedCategory)

  document.cookie = "selectedCategory=" + encodedSelectedCategory + "; path=/; max-age=3600; SameSite=Strict"
  
  window.location.href = 'https://cadmenclinic.ca.zenoti.com/webstoreNew/services'
}

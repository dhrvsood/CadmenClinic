export const ctaToBookingServiceCategory = (selectedCategory) => {    
  const encodedSelectedCategory = encodeURIComponent(selectedCategory)

  document.cookie = "selectedCategory=" + encodedSelectedCategory + "; path=/; max-age=3600; SameSite=Strict"
  
  window.location.href = '/book-now'
}

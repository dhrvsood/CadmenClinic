export const getCSTDateTime = () => {
  return new Date(
    new Date().getTime() - (new Date().getTimezoneOffset() - 360) * 60000
  ).toLocaleString()
}

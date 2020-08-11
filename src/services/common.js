export const onSuccess = (response) => {
  return response
}
export const onPending = () => {}
export const onError = ({ status, data }) => {
  return { status, data }
}

const Notification = ({ alertMessage, errorMessage }) => {

  if (alertMessage) {
    return (
      <div className="alert">
        {alertMessage} 
      </div>
    )
  }
  if (errorMessage) {
    return (
      <div className="error">
        {errorMessage}
      </div>
    )
  }
  return null
}
 
 export default Notification
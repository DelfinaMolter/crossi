

export const EmailTemplate = ({
  firstName, lastName, email, phone, reason
}) => (
  <div>
    <h3> Se quieren contatar con ustedes desde la WEB</h3>
    <h1>{firstName} {lastName}</h1>
    <h3>Email: {email} </h3>
    <h3>Telefono: {phone} </h3>
  </div>
);
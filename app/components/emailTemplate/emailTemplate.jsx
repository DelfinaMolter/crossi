

export const EmailTemplate = ({
  firstName, lastName, email, phone, file,reason
}) => (
  <div>
    <h3> Se quieren contatar con ustedes desde la WEB</h3>
    <h1>{firstName} {lastName}</h1>
    <h3>Email: {email} </h3>
    <h3>Telefono: {phone} </h3>
    {(file & reason ==="Trabajar con Nosotros" )  ? 
      <h3><a href={`${file}`}>Link del CV</a>.</h3>
      : <></>
    }
  </div>
);
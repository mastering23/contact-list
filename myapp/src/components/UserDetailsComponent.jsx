 const UserDetailsComponent = ({user, goBack })=> {
  return (
    <div>
      <h3>Details for {user.name}</h3>
      <p>Company:</p>
      <ul>
        <li>Company Name: {user.company.name}</li>
        <li>Company Bs: {user.company.bs}</li>
        <li>Company Catch Phrase: {user.company.catchPhrase}</li>
      </ul>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Address</p>
      <p>Street: {user.address.street}</p>
      <p>City: {user.address.city}</p>
      <p>Suite: {user.address.suite}</p>
      <p>Zip code: {user.address.zipcode}</p>
      <p>geo: Latitude: {user.address.geo.lat} | Logitude : {user.address.geo.lng}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default UserDetailsComponent;
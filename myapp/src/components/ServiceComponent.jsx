
import { useEffect, useState } from 'react';
import UserListComponent from './UserListComponent';
import UserDetailsComponent from './UserDetailsComponent';

const ServiceComponent = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(); 

  useEffect(() => {
    const GetData = async () => {
      const getApiData = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const usersData = await getApiData.json();
      console.log(usersData);
      setData(usersData);
    };
    GetData();
  }, []);


  const handleUserClick = (user) => {
    setSelectedUser(user); 
  };


  const handleGoBack = () => {
    setSelectedUser(); 
  };

  return (
    <div>
      {selectedUser ? (
        <UserDetailsComponent user={selectedUser} goBack={handleGoBack} />
      ) : (
        
        <UserListComponent users={data} onUserClick={handleUserClick} />
      )}
    </div>
  );
}
export default ServiceComponent;
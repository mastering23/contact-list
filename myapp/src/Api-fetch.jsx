import { useEffect, useState } from 'react';

export default function ExampleComponent() {

  const [data, setEngelData] = useState();

  useEffect(() => {
    const GetData = async () => {
      const getApiData = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const usersData = await getApiData.json();
      console.log(usersData);
      setEngelData(usersData);
      
    }
    GetData();

  }, []);

  
  return (
    <div>
      {data ? (
        data.map((user) => (
          <div key={user.id}>
            <h3>Name : {user.name}</h3>     
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

}




import { useEffect } from 'react';

export default function ExampleComponent() {
  useEffect(() => {
    console.log('fetching Api...');
    GetData();

  }, []);

  return <div></div>;

}

export const GetData = async () => {
  console.log('fetching Api... inside GetData........');
  const getApiData = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
  const x = getApiData.json();
  console.log(x);
  console.log('ending fetching Api...');
}


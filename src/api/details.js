export const getNameWithCity = async () => {
    const response = await fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8");
    const json = await response.json();
    return json;
  };

export const getUsers = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json()
    return json;
}
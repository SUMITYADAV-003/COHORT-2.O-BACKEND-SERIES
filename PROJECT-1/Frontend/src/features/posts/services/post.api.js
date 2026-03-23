import axios  from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/post",
   withCredentials: true,
  
})

export  async  function getAllFeed() {
  const response = await api.get("/feed");

  return response.data;

}
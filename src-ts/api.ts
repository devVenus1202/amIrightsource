import { DataItem } from "./interfaces";

const API_URL = "http://localhost:3000";
export const searchData = async (query: string) : Promise<{query: string,results: Array<DataItem>}> => {
  const res = await fetch(`${API_URL}/search?query=${query}`);
  const jsonData = await res.json();
  return {...jsonData, query};
} 
import axios from "axios";
import { baseUrl } from "../../settings";

export async function getBooks() {
  let url = `${baseUrl.v1}/books/`;
  console.log(url)

  const response = await axios.get(url);
  console.log(response.data)
  return response.data;
}

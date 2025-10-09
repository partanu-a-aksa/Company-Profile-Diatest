import axios from "axios";

const BASE_URL = "https://sturdysense-us.backendless.app/api/data/blogs";
interface IArticle {
  objectId: string;
  title: string;
  content: string;
  author: string;
  imgurl: string;
}

export async function getNewsHeadline(): Promise<IArticle[]> {
  try {
    const res = await axios.get(`${BASE_URL}`);

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getNewsDetail(objectId: string) {
  try {
    const res = await axios.get(`${BASE_URL}/${objectId}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

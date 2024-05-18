import { defer } from "react-router-dom";
// import apiRequest from "./apiRequest";
import axios from "axios"

export const singlePageLoader = async ({ request, params }) => {
  const res = await axios.get("http://localhost:6900/api/posts/" + params.id, {withCredentials:true});
  return res.data;
};
export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = axios.get("http://localhost:6900/api/posts?" + query, {withCredentials:true});
  return defer({
    postResponse: postPromise
  })
};

export const profilePageLoader = async () => {
  const postPromise = axios.get("http://localhost:6900/api/users/profilePosts", {withCredentials:true});
  return defer({
    postResponse: postPromise,
  });
};
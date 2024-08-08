import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import React from "react";
export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const postId = search.get("postId");
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(res.data)
    return { postId, title: res.data.title, body: res.data.body };
  } catch (err) {
    console.error(err);
    return redirect("/");
  }
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div>
   {/*
      <h2>{data.title}</h2>
      <h4>{data.body}</h4>
      <h1>{data.postId}</h1>
      */}
    </div>
  );
}

/*
import axios from "axios";
import { useLoaderData, redirect } from "remix";
import React from "react";
export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const postId = search.get("postId");
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  console.log(res.data)
    return { postId, title: res.data.title, body: res.data.body };
  } catch (err) {
    console.error(err);
    redirect("/");
    return {};
  }
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div>
      <h1>{data.postId}</h1>
      <h2>{data.title}</h2>
      <h4>{data.body}</h4>
    </div>
  );
}

*/



/*
import axios from "axios";
import { useLoaderData, redirect } from "remix";

export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const postId = search.get("postId");
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  console.log(res.data)
    return { postId, title: res.data.title, body: res.data.body };
  } catch (err) {
    console.error(err);
    redirect("/");
    return {};
  }
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div>
      <h1>{data.postId}</h1>
      <h2>{data.title}</h2>
      <h4>{data.body}</h4>
    </div>
  );
}
  */
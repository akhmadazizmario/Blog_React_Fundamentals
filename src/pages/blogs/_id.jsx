// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SinglePost() {
//   const params = useParams();
//   const [post, setPosts] = useState(null);

const post = useLoaderData();


//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//       .then((response) => response.json())
//       .then((json) => setPosts(json));
//   }, [params.id]); 

  return (
    <>
      <h2>{post?.title}</h2>
      <div>{post?.body}</div>
    </>
  );
}

export default SinglePost;







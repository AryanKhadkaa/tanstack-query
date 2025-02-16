import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { useState } from "react";

function App() {
  // Conditional Querying: We know that we cannot call hooks in react conditionally
  // So conditional querying is not made easy with normal react,
  // So in react query with useQuery hook, we can do kind of conditional querying

  // we set a stat on like an on/off switch, we can adjust our querying in such a way that it runs only when useQuery is on i.e the state on is true
  // we can easily do this by "enabled: " property in useQuery as shown below.
  const [postId, setPostId] = useState(1);
  const [on, setOn] = useState(true);

  const { data, isPending, refetch, isFetching, error } = useQuery({
    queryKey: ["todos", postId], // queryKey is an array and must be unique, as different quieries cannot have same keys to identify them
    queryFn: () => getTodos(postId), //we're not calling the fucnction there so we dont need the paranthesis[()], we're just passing the function

    enabled: on,
    //This is applicable in situations when we have multuple useQueries in the same compoenent and we only need certain ones depending on some states on your compoenet.
  });
  if (error) alert("err occured");

  return (
    <div>
      <h1>Getting started with tanstack query.</h1>
      <div>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          <p>{JSON.stringify(data?.slice(0, 10))}</p>
        )}{" "}
        <button onClick={() => refetch()}>Refetch</button>
        <button onClick={() => setPostId((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setPostId(1)}>Reset</button>
      </div>
    </div>
  );
}

const getTodos = async (postId: number) => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/todos"); //using a mock api
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return await response.json(); //returns the parsed json data when called
};

export default App;

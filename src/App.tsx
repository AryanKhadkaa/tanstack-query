import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  const { data, isPending, refetch, isFetching, error } = useQuery({
    // the core of the tanstack query is the use of the useQuery hook.
    // Thats how we actually query for data.
    // This fn takes one primary argument that is an object, this object need two properties to work properly,
    // first is queryKey and second is queryFn (function)

    queryKey: ["todos"], // queryKey is an array and must be unique, as different quieries cannot have same keys to identify them
    queryFn: getTodos, //we're not calling the fucnction there so we dont need the paranthesis[()], we're just passing the function
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
      </div>
    </div>
  );
}

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos"); //using a mock api
  return await response.json(); //returns the parsed json data when called
};

export default App;

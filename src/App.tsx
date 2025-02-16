import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import "./App.css";
import { createTodoQueryOptions } from "./queryOptions/createTodoQueryOptions";
import Card from "./components/card";
import { Suspense } from "react";
import Loading from "./components/loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      {/*Here, Suspense component from react is wrapping our Card compoenent, so
      if the card compoenent is using any SuspenseQueries hook, then it will
      render the fallback compoennet if the query is not resolved, so if the
      query in the card compentn is resolved it will render the card compoent. */}
      <Card />
    </Suspense>
  );
}

export default App;

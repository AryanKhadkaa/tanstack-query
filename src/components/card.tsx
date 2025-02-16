import { useSuspenseQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { createTodoQueryOptions } from "../queryOptions/createTodoQueryOptions";

const Card = () => {
  const { data } = useSuspenseQuery(createTodoQueryOptions());

  // one thing about Suspense queires is that it does not allow the use of enabled property so you cannot perfom the conditonal querying
  return (
    <div>
      <div>{JSON.stringify(data?.slice(0, 10))}</div>
    </div>
  );
};

export default Card;

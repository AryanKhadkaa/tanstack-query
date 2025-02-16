// As out useQuery hook can we long and bulky and a little lengthy which may not be pleassing to see,
// we can rather create a different file and create a function in it to handle querying and resue it in other compoenents

// this will make it reusable and well managed

import { queryOptions } from "@tanstack/react-query";

export function createTodoQueryOptions() {

    return queryOptions({
         
    queryKey: ["todos"], // queryKey is an array and must be unique, as different quieries cannot have same keys to identify them
    queryFn: () => getTodos, //we're not calling the fucnction there so we dont need the paranthesis[()], we're just passing the function

    enabled: true,
        //This is applicable in situations when we have multuple useQueries in the same compoenent and we only need certain ones depending on some states on your compoenent
    })    
}

const getTodos = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/todos"); //using a mock api
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${1}`
  );
  return await response.json(); //returns the parsed json data when called
};
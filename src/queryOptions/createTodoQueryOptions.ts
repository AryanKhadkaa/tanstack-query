import { queryOptions } from "@tanstack/react-query";



export function createTodoQueryOptions(postId:number,on:boolean) {

    return queryOptions({
         
    queryKey: ["todos", postId], // queryKey is an array and must be unique, as different quieries cannot have same keys to identify them
    queryFn: () => getTodos(postId), //we're not calling the fucnction there so we dont need the paranthesis[()], we're just passing the function


    enabled: on,
        //This is applicable in situations when we have multuple useQueries in the same compoenent and we only need certain ones depending on some states on your compoenent
    })    
}

const getTodos = async (postId: number) => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/todos"); //using a mock api
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return await response.json(); //returns the parsed json data when called
};
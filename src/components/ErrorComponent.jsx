import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError(); //it will gives all the errors in our path, react-router-dom will catch and give this to us in the form of object
  console.log('err is ......',err)
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h2>Something went wrong - own custom error page!</h2>
      <h3>{err.status} : {err.statusText}</h3>
    </div>
  );
};

export default Error;

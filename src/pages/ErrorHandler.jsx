import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorHandler = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1>Que falla!</h1>
      <p>Está página no es parte de la app.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

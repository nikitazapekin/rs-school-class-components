import React from "react"; 


import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import NotFound from "../NotFound";

export function CatchBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div>
    <NotFound />
        </div>
      );
    }
   
  }
 
  return <div>An unexpected error occurred</div>;
}

 
import React from "react";
import { render, screen } from "@testing-library/react";
import NotFoundPage from "./not-found";  
 
 
jest.mock("./components/NotFound", () => () => <div>Not Found Component Mock</div>);

test("renders NotFoundPage with NotFoundComponent", () => {
  render(<NotFoundPage />);
   
  const notFoundText = screen.getByText(/Not Found Component Mock/i);
  expect(notFoundText).toBeInTheDocument();
});

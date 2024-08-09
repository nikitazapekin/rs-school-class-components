 
import { render, screen } from "@testing-library/react";
import Greeting from "./greet";
  import React from "react";
describe("Greeting component", () => {
  test("renders the correct greeting message", () => {
    render(<Greeting name="John" />);

    // Проверяем, что компонент отобразил правильное сообщение
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  test("renders correctly with different name", () => {
    render(<Greeting name="Jane" />);

    // Проверяем, что компонент отображает правильное сообщение для другого имени
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
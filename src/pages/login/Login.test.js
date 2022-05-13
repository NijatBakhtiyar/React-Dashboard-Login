import { render, screen } from "@testing-library/react";
import Login from "./Login";

it(("test"), () => {
  render(<Login />);
  const inputUsername = screen.getByPlaceholderText(/username/i);
  expect(inputUsername).toBeInTheDocument();
});

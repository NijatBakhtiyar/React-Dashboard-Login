import { render, screen } from "../../setupTest";
import { it } from "vitest";
import Login from "./Login";

it("test", () => {
  render(<Login />);
  const inputUsername = screen.getByPlaceholderText(/username/i);
  expect(inputUsername).toBeInTheDocument();
});

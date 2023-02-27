import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a button component", () => {
  describe("When it renders with a text 'a button'", () => {
    test("Then it should show have a text 'a button'", () => {
      render(<Button text={"a button"} />);

      const button = screen.getByRole("button", { name: "a button" });

      expect(button).toBeInTheDocument();
    });
  });
});

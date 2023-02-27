import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a button component", () => {
  describe("When it renders with a text 'a button'", () => {
    test("Then it should show have a text 'a button'", () => {
      const mockText = "a button";
      render(<Button text={mockText} />);

      const button = screen.getByRole("button", { name: mockText });

      expect(button).toBeInTheDocument();
    });
  });
});

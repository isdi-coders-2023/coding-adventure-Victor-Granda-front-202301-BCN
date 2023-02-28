import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../Theme/theme";
import Button from "./Button";

describe("Given a button component", () => {
  describe("When it renders with a text 'a button'", () => {
    test("Then it should show have a text 'a button'", () => {
      const expectedText = "a button";
      render(
        <ThemeProvider theme={theme}>
          <Button text={expectedText} />;
        </ThemeProvider>
      );

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});

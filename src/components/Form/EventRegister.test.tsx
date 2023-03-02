import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../Theme/theme";
import EventRegister from "./EventRegister";

describe("Given a EventRegister component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field for an email address", () => {
      const expectedLabelText = /email/i;

      render(
        <ThemeProvider theme={theme}>
          <EventRegister />
        </ThemeProvider>
      );

      const inputField = screen.getByLabelText(expectedLabelText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field for a password", () => {
      const expectedLabelText = /password/i;

      render(
        <ThemeProvider theme={theme}>
          <EventRegister />
        </ThemeProvider>
      );

      const inputField = screen.getByLabelText(expectedLabelText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field for an image file", () => {
      const expectedLabelText = /image/i;

      render(
        <ThemeProvider theme={theme}>
          <EventRegister />
        </ThemeProvider>
      );

      const inputField = screen.getByLabelText(expectedLabelText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show a submit button with text 'Sign up'", () => {
      const expectedButtonText = /sign up/i;

      render(
        <ThemeProvider theme={theme}>
          <EventRegister />
        </ThemeProvider>
      );

      const submitButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(submitButton).toBeInTheDocument();
    });
  });
});

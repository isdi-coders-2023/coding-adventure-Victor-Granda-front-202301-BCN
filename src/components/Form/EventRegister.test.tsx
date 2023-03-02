import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../Theme/theme";
import EventRegister from "./EventRegister";

describe("Given an EventRegister form", () => {
  describe("When it renders", () => {
    test("Then it should render with 'email' input label for an email address", () => {});
    render(
      <ThemeProvider theme={theme}>
        <EventRegister />
      </ThemeProvider>
    );
    const inputLabel = "email";

    expect(inputLabel).toHaveAttribute(inputLabel);
  });
});

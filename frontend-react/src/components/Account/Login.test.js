import React from "react";
import { render } from '@testing-library/react'
import Login from "./Login";
import "@testing-library/jest-dom/extend-expect"

test("Emails starts null", () => {
    const { getByTestId } = render(<Login></Login>);
    const email = getByTestId("email");

    expect(email.textContent).toBe(undefined);
})

test("Password starts null", () => {
    const { getByTestId } = render(<Login></Login>);
    const password = getByTestId("password");

    expect(password.textContent).toBe(undefined);
})

test("Button label to be Logi sisse", () => {
    const { getByTestId } = render(<Login></Login>);
    const logIn = getByTestId("button");

    expect(logIn.textContent).toBe("Logi sisse");
})
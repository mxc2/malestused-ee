import React from "react";
import { render } from '@testing-library/react'
import Changename from "./Changename";
import "@testing-library/jest-dom/extend-expect"

test("Firstname starts null", () => {
    const { getByTestId } = render(<Changename></Changename>);
    const firstName = getByTestId("first-name");

    expect(firstName.textContent).toBe(undefined);
})

test("Lastname starts null", () => {
    const { getByTestId } = render(<Changename></Changename>);
    const lastName = getByTestId("last-name");

    expect(lastName.textContent).toBe(undefined);
})

test("Email starts null", () => {
    const { getByTestId } = render(<Changename></Changename>);
    const email = getByTestId("email");

    expect(email.textContent).toBe(undefined);
})

test("Phone starts null", () => {
    const { getByTestId } = render(<Changename></Changename>);
    const phone = getByTestId("phone");

    expect(phone.textContent).toBe(undefined);
})
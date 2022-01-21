import React from "react";
import { render } from '@testing-library/react'
import Changename from "./Changename";
import "@testing-library/jest-dom/extend-expect"

test("Firstname starts null", () => {
    const { getByTestId } = render(<Changename></Changename>);
    const firstName = getByTestId("first-name");

    expect(firstName.textContent).toBe(undefined);
})
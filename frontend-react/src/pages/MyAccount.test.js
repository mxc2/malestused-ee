import React from "react";
import { render } from '@testing-library/react'
import MyAccount from "./MyAccount";
import "@testing-library/jest-dom/extend-expect"

test("Have Log out button", () => {
    const { getByTestId } = render(<MyAccount></MyAccount>);
    const button = getByTestId("logout-button");

    expect(button.textContent).toBe("Logi välja");
})
import React from "react";
import { render } from '@testing-library/react'
import Checkout from "./Checkout";
import "@testing-library/jest-dom/extend-expect"

test("There is a button to order", () => {
    const { getByTestId } = render(<Checkout></Checkout>);
    const Button = getByTestId("button");

    expect(Button.textContent).toBe("Esita tellimus");
})

test("There is payment information", () => {
    const { getByTestId } = render(<Checkout></Checkout>);
    const IBAN = getByTestId("iBAN-number");

    expect(IBAN.textContent).toBe("EE467700771005735625");
})

test("There is payment information", () => {
    const { getByTestId } = render(<Checkout></Checkout>);
    const Name = getByTestId("account-name");

    expect(Name.textContent).toBe("Mälestused.ee või Marcus-Indrek Simmer");
})


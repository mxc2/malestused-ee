import React from "react";
import { render } from '@testing-library/react'
import Header from "./Header";
import "@testing-library/jest-dom/extend-expect"

test("Login button is an image", () => {
    const { getByTestId } = render(<Header></Header>);
    const login = getByTestId("login-button");

    expect(login.textContent).toBe("Mida meie kliendid arvavad?:");
})

est("Img to be anything", () => {
    const { getByAltText } = render(<Header/>);
    const cart = getByAltText("cart-button");
    

    expect(cart.src).toBeCalledWith(expect.anything());
})
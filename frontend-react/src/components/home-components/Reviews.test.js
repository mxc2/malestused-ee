import React from "react";
import { render } from '@testing-library/react'
import Reviews from "./Reviews";
import "@testing-library/jest-dom/extend-expect"

test("Title to be right text", () => {
    const { getByTestId } = render(<Reviews></Reviews>);
    const header = getByTestId("header");

    expect(header.textContent).toBe("Mida meie kliendid arvavad?:");
})

test("Quote has some text", () => {
    const { getByTestId } = render(<Reviews></Reviews>);
    const quote = getByTestId("quote");

    expect(quote.textContent).toBeCalledWith(expect.anything());
})

test("Author has some text", () => {
    const { getByTestId } = render(<Reviews></Reviews>);
    const author = getByTestId("author");

    expect(author.textContent).toBeCalledWith(expect.anything());
})



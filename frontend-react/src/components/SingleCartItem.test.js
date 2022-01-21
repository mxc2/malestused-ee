import React from "react";
import { render } from '@testing-library/react'
import SingleCartItem from "./SingleCartItem";
import "@testing-library/jest-dom/extend-expect"

test("Firstname starts null", () => {
    const { getByTestId } = render(<SingleCartItem></SingleCartItem>);
    const summary = getByTestId("collage-total");

    expect(summary.textContent).toBeCalledWith(expect.anything());
})
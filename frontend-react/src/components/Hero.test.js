import React from "react";
import { render } from '@testing-library/react'
import Hero from "./Hero";
import "@testing-library/jest-dom/extend-expect"

test("H3 to have correct text", () => {
    const { getByTestId } = render(<Hero></Hero>);
    const h3 = getByTestId("h3-pitch-line");

    expect(h3.textContent).toBe("Teie soovidele disainitud kollaažid");
})
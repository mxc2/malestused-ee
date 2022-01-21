import React from "react";
import { render } from '@testing-library/react'
import Footer from "./Footer";
import "@testing-library/jest-dom/extend-expect"

test("Right authors", () => {
    const { getByTestId } = render(<Footer></Footer>);
    const Authors = getByTestId("footer-authors");

    expect(Authors.textContent).toBe("Marcus-Indrek Simmer and Margen Peterson 2022");
})


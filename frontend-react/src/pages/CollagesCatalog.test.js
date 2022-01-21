import React from "react";
import { render } from '@testing-library/react'
import CollagesCatalog from "./CollagesCatalog";
import "@testing-library/jest-dom/extend-expect"

test("Collage styles title", () => {
    const { getByTestId } = render(<CollagesCatalog></CollagesCatalog>);
    const header = getByTestId("header");

    expect(header.textContent).toBe("Kollaažide stiilid");
})

test("Collage styles description", () => {
    const { getByTestId } = render(<CollagesCatalog></CollagesCatalog>);
    const description = getByTestId("description");

    expect(description.textContent).toBe("Et alustada tellimust palun valige üks kollaaži stiil.");
})
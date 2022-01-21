import React from "react";
import { render } from '@testing-library/react'
import DesignService from "./DesignService";
import "@testing-library/jest-dom/extend-expect"

test("Title to be right text", () => {
    const { getByTestId } = render(<DesignService></DesignService>);
    const header = getByTestId("header");

    expect(header.textContent).toBe("Kujundusteenus:");
})

test("Button to be in correct text", () => {
    const { getByTestId } = render(<DesignService></DesignService>);
    const button = getByTestId("button");

    expect(button.textContent).toBe("Edasi");
})

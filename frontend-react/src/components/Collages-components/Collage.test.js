import React from "react";
import { render } from '@testing-library/react'
import Collage from "./Collage";
import "@testing-library/jest-dom/extend-expect"

test("Img to be anything", () => {
    const { getByAltText } = render(<Collage/>);
    const imgID = getByAltText("Collage");
    

    expect(imgID.src).toBeCalledWith(expect.anything());
})
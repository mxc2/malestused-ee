import React from "react";
import { render } from '@testing-library/react'
import Info from "./Info";
import "@testing-library/jest-dom/extend-expect"

est("Img to be anything", () => {
    const { getByAltText } = render(<Info/>);
    const imgID = getByAltText("describing-image");
    

    expect(imgID.src).toBeCalledWith(expect.anything());
})
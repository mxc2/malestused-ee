import React from "react";
import {render, fireEvent} from '@testing-library/react'
import Changename from "./Changename";

it("renders correctly", ()=>{
    const {queryByPlaceholderText} = render( <Changename></Changename>)

    expect(queryByPlaceholderText("Search")).toBeTruthy()
})

describe("Input value", () => {
    it("updates on change", () => {

    const {queryByPlaceholderText} = render()

    const searchInput = queryByPlaceholderText('Eesnimi');

    fireEvent.change( searchInput, {target: {value: "test"}}),

    expect(searchInput.value).toBe("test")
    })
})
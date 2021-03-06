// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Card from "./MyCard"

describe("it should work",()=>{
        const {  queryByTestId} = render(
        <Card />
        );
        const buttonHandles = queryByTestId("handleChangeId");
        console.log(buttonHandles)
        fireEvent.click(buttonHandles)
})

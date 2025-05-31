import {render, screen} from "@testing-library/react";
import HelloWorld from "./HelloWorld";

test("renders correctly", () => {
   render(<HelloWorld/>);

   const helloWorldLabel: HTMLElement = screen.getByText(/Hello World!/);

   expect(helloWorldLabel).toBeDefined();
});
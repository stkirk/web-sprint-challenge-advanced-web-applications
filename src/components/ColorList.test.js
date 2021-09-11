import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={[]} />);
});

const fakeColors = [
  { color: "blue", code: { hex: "123" }, id: 1 },
  { color: "red", code: { hex: "456" }, id: 2 },
  { color: "green", code: { hex: "789" }, id: 3 },
];

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={fakeColors} />);

  const colors = screen.getAllByTestId("color");

  expect(colors).toHaveLength(3);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  render(<ColorList colors={fakeColors} editing={true} />);

  const editForm = screen.getByTestId("edit_menu");

  expect(editForm).toBeInTheDocument();
  expect(editForm).toBeVisible();
});

import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

test("Renders without errors with blank color passed into component", () => {
  const fakeColor = {
    color: "",
    code: { hex: "" },
  };
  render(<Color color={fakeColor} />);
});

const fakeColor = {
  color: "fake",
  code: { hex: "abc123" },
};

test("Renders the color passed into component", () => {
  render(<Color color={fakeColor} />);

  const renderedColor = screen.getByText(/fake/i);

  expect(renderedColor).toBeInTheDocument();
  expect(renderedColor).toBeVisible();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  const fakeDeleteColor = jest.fn();
  const fakeToggleEdit = jest.fn();

  render(
    <Color
      color={fakeColor}
      deleteColor={fakeDeleteColor}
      toggleEdit={fakeToggleEdit}
    />
  );

  const deleteButton = screen.getByTestId("delete");
  userEvent.click(deleteButton);

  expect(fakeDeleteColor).toHaveBeenCalled();
  expect(fakeToggleEdit).toHaveBeenCalled();
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
  const fakeSetEditColor = jest.fn();
  const faketoggleEdit = jest.fn();

  render(
    <Color
      color={fakeColor}
      setEditColor={fakeSetEditColor}
      toggleEdit={faketoggleEdit}
    />
  );

  const editDiv = screen.getByTestId("color");
  userEvent.click(editDiv);

  expect(fakeSetEditColor).toHaveBeenCalled();
  expect(faketoggleEdit).toHaveBeenCalled();
});

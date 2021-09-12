import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchColorService as mockFetchColorService } from "../services/fetchColorService";
jest.mock("../services/fetchColorService");

test("Renders without errors", () => {
  mockFetchColorService.mockResolvedValueOnce({
    data: [
      { color: "blue", code: { hex: "123" }, id: 1 },
      { color: "red", code: { hex: "456" }, id: 2 },
      { color: "green", code: { hex: "789" }, id: 3 },
    ],
  });

  render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async () => {
  //Keep in mind that our service is called on mount for this component.

  mockFetchColorService.mockResolvedValueOnce({
    data: [
      { color: "blue", code: { hex: "123" }, id: 1 },
      { color: "red", code: { hex: "456" }, id: 2 },
      { color: "green", code: { hex: "789" }, id: 3 },
    ],
  });

  render(<BubblePage />);

  await waitFor(() => {
    expect(screen.getAllByTestId("color")).toHaveLength(3);
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { MainBar } from "./MainBar";

describe("MainBar", () => {
  test("should render with the correct value", () => {
    render(
      <MainBar
        value="Test value"
        onChange={() => {}}
        placeholder="Enter text"
      />
    );

    const inputElement = screen.getByPlaceholderText(
      "Enter text"
    ) as HTMLInputElement;
    expect(inputElement.value).toBe("Test value");
  });

  test("should call onChange when typing", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <MainBar value="" onChange={onChangeMock} placeholder="Enter text" />
    );

    const inputElement = getByPlaceholderText("Enter text");

    fireEvent.change(inputElement, { target: { value: "New text" } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);

    expect(onChangeMock.mock.calls[0][0].target.value).toBe("");
  });

  test("should respect maxLength of input", () => {
    render(
      <MainBar value="Test" onChange={() => {}} placeholder="Enter text" />
    );

    const inputElement = screen.getByPlaceholderText(
      "Enter text"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: "Test text longer than 120 characters".repeat(10) },
    });

    expect(inputElement.value.length).toBeLessThanOrEqual(120);
  });
});

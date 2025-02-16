import { render, screen, fireEvent } from "@testing-library/react";
import { HeaderBar } from "./HeaderBar";
import { usePhrase } from "../../context/PhraseContext/usePhrase";

jest.mock("../../context/PhraseContext/usePhrase");

describe("HeaderBar Component", () => {
  let addPhraseMock: jest.Mock;
  let editPhraseMock: jest.Mock;
  let setNewPhraseMock: jest.Mock;
  let stopEditingMock: jest.Mock;

  beforeEach(() => {
    addPhraseMock = jest.fn();
    editPhraseMock = jest.fn();
    setNewPhraseMock = jest.fn();
    stopEditingMock = jest.fn();

    (usePhrase as jest.Mock).mockReturnValue({
      newPhrase: "",
      setNewPhrase: setNewPhraseMock,
      editId: null,
      addPhrase: addPhraseMock,
      editPhrase: editPhraseMock,
      stopEditing: stopEditingMock,
    });
  });

  it("renders with initial state", () => {
    render(<HeaderBar />);
    const input = screen.queryByPlaceholderText("Agregar frase");
    const addButton = screen.queryByTestId("save-button");

    expect(input).not.toBeNull();
    expect(addButton).not.toBeNull();
  });

  it("toggles search bar visibility", () => {
    render(<HeaderBar />);
    const toggleSearchButton = screen.getByTestId("toggle-search-button");

    fireEvent.click(toggleSearchButton);
    expect(screen.queryByPlaceholderText("Buscar")).not.toBeNull();

    fireEvent.click(toggleSearchButton);
    expect(screen.queryByPlaceholderText("Buscar")).toBeNull();
  });

  it("adds a new phrase", () => {
    render(<HeaderBar />);
    const input = screen.getByPlaceholderText("Agregar frase");

    fireEvent.change(input, { target: { value: "Test Phrase" } });
    expect(setNewPhraseMock).toHaveBeenCalledWith("Test Phrase");
  });

  it("edits an existing phrase", () => {
    (usePhrase as jest.Mock).mockReturnValue({
      newPhrase: "Test Phrase",
      setNewPhrase: setNewPhraseMock,
      editId: "1",
      addPhrase: addPhraseMock,
      editPhrase: editPhraseMock,
      stopEditing: stopEditingMock,
    });

    render(<HeaderBar />);
    const saveButton = screen.getByTestId("save-button");

    fireEvent.click(saveButton);
    expect(editPhraseMock).toHaveBeenCalledWith("1", "Test Phrase");
    expect(stopEditingMock).toHaveBeenCalled();
    expect(setNewPhraseMock).toHaveBeenCalledWith("");
  });
});

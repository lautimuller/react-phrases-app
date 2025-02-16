import { render, screen } from "@testing-library/react";
import { PhraseManager } from "./PhraseManager";
import { usePhrase } from "../../context/PhraseContext/usePhrase";

jest.mock("../../context/PhraseContext/usePhrase");

describe("PhraseManager Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders CardList when there are search results", () => {
    (usePhrase as jest.Mock).mockReturnValue({
      phrases: [
        { id: "1", text: "Hello World" },
        { id: "2", text: "React Testing" },
      ],
      query: "",
      setQuery: jest.fn(),
    });

    render(<PhraseManager />);

    expect(screen.getByText("Gestor de Frases 💬")).toBeTruthy();
    expect(screen.queryByTestId("no-results")).toBeNull();
  });

  it("renders NoResults when there are no search results", () => {
    (usePhrase as jest.Mock).mockReturnValue({
      phrases: [],
      query: "",
      setQuery: jest.fn(),
    });

    render(<PhraseManager />);

    expect(screen.getByText("Gestor de Frases 💬")).toBeTruthy();
    expect(screen.queryByTestId("card-list")).toBeNull();
    expect(screen.getByTestId("no-results")).toBeTruthy();
  });
});

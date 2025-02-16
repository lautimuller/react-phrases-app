import { render, screen } from "@testing-library/react";
import { CardList } from "./CardList";
import { usePhrase } from "../../context/PhraseContext/usePhrase";

jest.mock("../../context/PhraseContext/usePhrase");

describe("CardList Component", () => {
  it("renders a list of phrases", () => {
    (usePhrase as jest.Mock).mockReturnValue({
      phrases: [
        { id: 1, text: "First phrase" },
        { id: 2, text: "Second phrase" },
      ],
    });

    render(<CardList />);

    const cards = screen.getAllByTestId(/^card-/);
    expect(cards).toHaveLength(2);
    expect(screen.getByText("First phrase")).toBeTruthy();
    expect(screen.getByText("Second phrase")).toBeTruthy();
  });
});

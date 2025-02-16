import { render, screen, fireEvent } from "@testing-library/react";
import { PhraseSearch } from "./PhraseSearch";
import { usePhrase } from "../context/PhraseContext/usePhrase";
import { Phrase } from "../context/PhraseContext/PhraseContext.types";

jest.mock("../context/PhraseContext/usePhrase");

type ChildComponentProps = {
  results: Array<{ id: string; text: string }>;
  handleSearch: (query: string) => void;
};

describe("PhraseSearch Component", () => {
  it("renders children with filtered results", () => {
    (usePhrase as jest.Mock).mockReturnValue({
      phrases: [
        { id: "1", text: "Hello World" },
        { id: "2", text: "React Testing" },
        { id: "3", text: "Phrase 3" },
      ],
    });

    const ChildComponent: React.FC<ChildComponentProps> = ({
      results,
      handleSearch,
    }) => (
      <div>
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          data-testid="search-input"
        />
        <div data-testid="results">
          {results.map((phrase: Phrase) => (
            <p key={phrase.id}>{phrase.text}</p>
          ))}
        </div>
      </div>
    );

    render(
      <PhraseSearch>
        {(results, handleSearch) => (
          <ChildComponent results={results} handleSearch={handleSearch} />
        )}
      </PhraseSearch>
    );

    expect(screen.getByTestId("results").children).toHaveLength(3);

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "Hello" },
    });

    expect(screen.getByTestId("results").children).toHaveLength(1);
    expect(screen.getByTestId("results").textContent).toBe("Hello World");
  });
});

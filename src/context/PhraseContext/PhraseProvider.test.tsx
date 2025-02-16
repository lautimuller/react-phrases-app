import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PhraseProvider } from "./PhraseProvider";
import { usePhrase } from "./usePhrase";

const TestComponent: React.FC = () => {
  const { phrases, addPhrase, removePhrase, setQuery, query } = usePhrase();

  return (
    <div>
      <button onClick={() => addPhrase("Test Phrase One")}>
        Add Phrase One
      </button>
      <button onClick={() => removePhrase(phrases[0]?.id || "")}>
        Remove Phrase
      </button>
      <button onClick={() => setQuery("One")}>Set Query</button>
      <div data-testid="phraselist">
        {phrases.map((phrase) => (
          <span key={phrase.id} data-testid="phrase-text">
            {phrase.text}
          </span>
        ))}
      </div>
      <span data-testid="query">{query}</span>
    </div>
  );
};

describe("PhraseProvider", () => {
  it("provides default context values", () => {
    render(
      <PhraseProvider>
        <TestComponent />
      </PhraseProvider>
    );

    expect(screen.queryByTestId("phrase-text")).toBeNull();
    expect(screen.getByTestId("query").textContent).toBe("");
  });

  it("adds and removes a phrase correctly", () => {
    render(
      <PhraseProvider>
        <TestComponent />
      </PhraseProvider>
    );

    fireEvent.click(screen.getByText("Add Phrase One"));
    expect(screen.getAllByTestId("phrase-text").length).toBe(1);
    expect(screen.getByTestId("phrase-text").textContent).toBe(
      "Test Phrase One"
    );

    fireEvent.click(screen.getByText("Remove Phrase"));
    expect(screen.queryByTestId("phrase-text")).toBeNull();
  });

  it("filters phrases based on query", () => {
    render(
      <PhraseProvider>
        <TestComponent />
      </PhraseProvider>
    );

    fireEvent.click(screen.getByText("Add Phrase One"));
    fireEvent.click(screen.getByText("Add Phrase One"));
    fireEvent.click(screen.getByText("Set Query"));

    const displayedPhrases = screen
      .getAllByTestId("phrase-text")
      .map((el) => el.textContent);

    expect(displayedPhrases).toEqual(["Test Phrase One", "Test Phrase One"]);
  });
});

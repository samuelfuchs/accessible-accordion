import { render, screen, fireEvent } from "@testing-library/react";
import { Accordion } from "@/components/Accordion";

const items = [
  { title: "First", content: "First content" },
  { title: "Second", content: "Second content" },
];

describe("Accordion", () => {
  it("renders all accordion buttons", () => {
    render(<Accordion items={items} />);
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("toggles content on click", () => {
    render(<Accordion items={items} />);
    const button = screen.getByText("First");
    fireEvent.click(button);

    const content = screen.getByText("First content");
    expect(content).toBeVisible();

    fireEvent.click(button);
    expect(content).not.toBeVisible();
  });

  it("sets aria-expanded correctly", () => {
    render(<Accordion items={items} />);
    const button = screen.getByRole("button", { name: "First" });
    expect(button).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

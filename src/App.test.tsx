import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import App from "./App";

describe("LeaseReel landing page", () => {
  it("renders the core offer and canonical CTAs", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Turn listing photos into leasing videos in 48 business hours.");
    expect(screen.getAllByText("Request a $149 pilot").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Manual accuracy review").length).toBeGreaterThan(0);
  });

  it("switches demo tabs and keeps accessible tab state", async () => {
    const user = userEvent.setup();
    render(<App />);

    const storyTab = screen.getByRole("tab", { name: /Story \/ Ad Cut/i });
    await user.click(storyTab);

    expect(storyTab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("8-12 seconds");
  });

  it("opens and closes the mobile menu with Escape", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));
    expect(screen.getByRole("dialog", { name: /mobile navigation/i })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog", { name: /mobile navigation/i })).not.toBeInTheDocument();
  });

  it("toggles FAQ state", async () => {
    const user = userEvent.setup();
    render(<App />);

    const question = screen.getByRole("button", { name: /Will AI change the appearance/i });
    await user.click(question);
    expect(question).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/restrained camera motion/i)).toBeInTheDocument();
  });

  it("validates the email handoff form before opening mail", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Continue in email app/i }));
    expect(screen.getByText(/Add your name, company/i)).toBeInTheDocument();
  });

  it("renders reduced-motion compatible content", () => {
    vi.mocked(window.matchMedia).mockImplementation((query: string) => ({
      matches: query.includes("prefers-reduced-motion"),
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn()
    }));

    render(<App />);
    expect(screen.getByText("Interactive concept preview")).toBeInTheDocument();
  });
});

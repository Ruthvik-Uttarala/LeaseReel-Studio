import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import App from "./App";

describe("LeaseReel landing page", () => {
  it("renders the core offer and canonical CTAs", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Turn listing photos into ready-to-post property videos.");
    expect(screen.getAllByText(/\$149/).length).toBeGreaterThan(0);
    expect(screen.getAllByText("Manual accuracy review").length).toBeGreaterThan(0);
  });

  it("switches the interactive hero format by pointer and keyboard", async () => {
    const user = userEvent.setup();
    render(<App />);

    const reelTab = screen.getByRole("tab", { name: /Reel 9:16/i });
    const websiteTab = screen.getByRole("tab", { name: /Website 16:9/i });
    await user.click(websiteTab);

    expect(websiteTab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Landscape website cut")).toBeInTheDocument();

    await user.keyboard("{Home}");
    expect(reelTab).toHaveAttribute("aria-selected", "true");
  });

  it("switches demo tabs and keeps accessible tab state", async () => {
    const user = userEvent.setup();
    render(<App />);

    const storyTab = screen.getByRole("tab", { name: /Story \/ Ad Cut/i });
    await user.click(storyTab);

    expect(storyTab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel", { name: /Story \/ Ad Cut/i })).toHaveTextContent("8–12 seconds");
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

  it("renders a clear email handoff", () => {
    render(<App />);

    const contactLinks = screen.getAllByRole("link", { name: "hello@leasereelstudio.com" });
    expect(contactLinks.length).toBeGreaterThan(0);
    expect(contactLinks[0]).toHaveAttribute("href", "mailto:hello@leasereelstudio.com");
    expect(screen.getByRole("button", { name: /Copy email address/i })).toBeInTheDocument();
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

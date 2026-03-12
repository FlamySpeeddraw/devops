import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Le compteur démarre à 0", () => {
    render(<App />);
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
});

test("Le compteur augmente au clic", async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();

    for (const _ of Array(8)) {
        await user.click(button);
    }
    expect(screen.getByText(/count is 9/i)).toBeInTheDocument();
});
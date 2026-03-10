import App from "../App";
import { render, screen } from "@testing-library/react";

test("Le compteur démarre à 0", () => {
    render(<App />);
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
});
import Home from "@/app/page";
import { render } from "@testing-library/react";

it("renders a Home component", () => {
  const home = render(<Home />);
  expect(home).toBeDefined();
});

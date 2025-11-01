import { render, screen } from "@testing-library/react";
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";

describe("User Account", () => {
  it("should render user name", () => {
    const user: User = { id: 1, name: "Rafay" };
    render(<UserAccount user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render edit button if admin", () => {
    const user2: User = { id: 2, name: "Baqar", isAdmin: true };
    render(<UserAccount user={user2} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
  it("should not render edit button if not admin", () => {
    const user2: User = { id: 2, name: "Baqar", isAdmin: false };
    render(<UserAccount user={user2} />);
    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });
  // const user3: User = {id:2, name: "Faris"};
});

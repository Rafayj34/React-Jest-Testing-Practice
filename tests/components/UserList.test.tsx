import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("User List", () => {
  it("should render no users on empty array", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no user/i)).toBeInTheDocument();
  });

  it("should render list of users", () => {
    const users: User[] = [
      { id: 1, name: "Rafay" },
      { id: 2, name: "Jamal" },
    ];
    render(<UserList users={users} />);
    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href',`/users/${user.id}`)

    });
  });
});

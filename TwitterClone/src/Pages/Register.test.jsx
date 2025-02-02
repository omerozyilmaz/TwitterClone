import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./Register";

describe("Register Component", () => {
  test("renders Register component", () => {
    render(<Register />);
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  test("shows error when username is less than 5 characters", () => {
    render(<Register />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "123" },
    });
    fireEvent.blur(screen.getByLabelText(/username/i));
    expect(
      screen.getByText("Username must be at least 5 characters")
    ).toBeInTheDocument();
  });

  test("shows error when email is invalid", () => {
    render(<Register />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.blur(screen.getByLabelText(/email/i));
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
  });

  test("shows error when phone number is invalid", () => {
    render(<Register />);
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "123" },
    });
    fireEvent.blur(screen.getByLabelText(/phone number/i));
    expect(screen.getByText("Invalid phone number")).toBeInTheDocument();
  });

  test("submits form when all fields are valid", () => {
    render(<Register />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "validUsername" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "email@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    });
    fireEvent.click(screen.getByText(/register/i));
    expect(
      screen.queryByText("Username must be at least 5 characters")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Invalid email address")).not.toBeInTheDocument();
    expect(screen.queryByText("Invalid phone number")).not.toBeInTheDocument();
  });
});

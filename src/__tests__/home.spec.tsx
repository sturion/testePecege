/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import { useQuery } from 'react-query';
import Home from "../pages/home";
import "@testing-library/jest-dom";


jest.mock("react-query", () => ({
  useQuery: jest.fn(),
  useMutation: jest.fn(),
}));

describe("Home Component", () => {
  const mockData = [
    {
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
    },
  ];

  beforeEach(() => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockData,
    });
  });

  it("Renderiza a table", () => {
    render(<Home />);

    const userNames = screen.getAllByText(/John Doe/i);
    expect(userNames).toHaveLength(mockData.length);

  });

  it("Filtra Nome pelo input", () => {
    render(<Home />);

    const searchInput = screen.getByPlaceholderText("Insira o nome");
    fireEvent.change(searchInput, { target: { value: "John" } });

    const userNames = screen.getAllByText(/John/i);
    expect(userNames).toHaveLength(mockData.length);

  });

  it('abre modal de adicionar', () => {
    render(<Home />);

    fireEvent.click(screen.getByText("Adicionar"));

    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  it("Ordena por nome", () => {
    render(<Home />);

    const sortCheckbox = screen.getByLabelText("Ordenar Usuarios");
    fireEvent.click(sortCheckbox);

  });

});

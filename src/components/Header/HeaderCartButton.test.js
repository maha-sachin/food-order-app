import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import { render, screen, fireEvent } from "@testing-library/react";
import CartContext from "../../store/cart-context";

import '@testing-library/jest-dom'

const CustomRender = (ui, { providerProps }) => {
	return render(<CartContext.Provider value={providerProps}>{ui}</CartContext.Provider>)

}

describe("render headercartbutton component", () => {
	it("span element displays your cart ", () => {
		const { queryByText } = render(<HeaderCartButton />);
		const el = queryByText("Your Cart")
		expect(el).toBeTruthy()
	});

	it("renders <CartIcon/> ", () => {
		const { queryByTestId } = render(<HeaderCartButton />);
		const CartIcon = queryByTestId('cart-icon')
		expect(CartIcon).toBeInTheDocument()
	})

	it("click function 'onClickHeaderCartBtn' gets called", () => {
		const clickMock = jest.fn()
		render(<HeaderCartButton onClickHeaderCartBtn={clickMock} />);

		fireEvent.click(screen.getByText("Your Cart"))
		expect(clickMock).toHaveBeenCalledTimes(1)
	});

	// TODO add tests for item count
	test(" check if numberOfCartItems present", () => {
		render(<HeaderCartButton />)

		const element = screen.queryByDisplayValue("numberOfCartItems")
		expect(element).toBeDefined()

	})
})

describe("Test badge", () => {
	//Tesing cartcontext

	let contextProvider;
	beforeEach(() => {
		contextProvider = {
			items: [
				{ amount: 1 }, { amount: 1 }
			]
		}
	})
	test("should render the items that are added to the cart", () => {
		CustomRender(<HeaderCartButton />, { providerProps: contextProvider })
		// fireEvent.click(screen.getByText("Your Cart2"))
		expect(screen.getByTestId('cart-badge')).toHaveTextContent(
			2
		);
	});
	
});
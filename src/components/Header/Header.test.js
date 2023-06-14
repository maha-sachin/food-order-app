import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Header from './Header'
import CartContext from '../../store/cart-context';




describe("Header Component", () => {
	it('loads and displays "YummyTreat"', async () => {
		// ARRANGE
		render(<Header />)

		// ASSERT
		expect(screen.getByRole('heading')).toHaveTextContent('YummyTreat')
	})

	// TODO test render HeaderCartButton
	it("renders <HeaderCartButton/> ", () => {
		const { queryByTestId } = render(<Header />);
		const CartButton = queryByTestId('cart-button')
		expect(CartButton).toBeInTheDocument()
	})

	// TODO test render MainImage

	it("renders <MainImage /> ", () => {
		const { queryByTestId } = render(<Header />);
		const img = queryByTestId('main-img')
		expect(img).toBeInTheDocument()
	})


});
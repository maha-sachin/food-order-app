
import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MainImage from "./MainImage";


describe("MainImage Component", () => {
	it("Renders correct alt text and right image", () => {
		// ARRANGE
		const { getByAltText } = render(<MainImage />)

		// ASSERT
		const image = getByAltText("A Table Full Of Delicious Food!.");
		expect(image).toHaveAttribute('src', 'meals.jpeg');
	});
})
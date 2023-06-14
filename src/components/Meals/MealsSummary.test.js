import React from 'react';
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import MealsSummary from './MealsSummary';


describe("renders Mealsummary Component",()=>{
    test("displays header content",()=>{
        render(<MealsSummary/>)
        const element=screen.getByRole("heading")
        expect(element).toHaveTextContent("Delicious Food, Delivered To You")
    })
    test("displays paragraph content",()=>{
        render(<MealsSummary/>)
        const paragraphElement=screen.getByTestId("meal-summary1")
        expect(paragraphElement).toBeInTheDocument()
    })
    test("displays paragraph content",()=>{
        render(<MealsSummary/>)
        const paragraphElement=screen.getByTestId("meal-summary2")
        expect(paragraphElement).toBeInTheDocument()
    })
    
})
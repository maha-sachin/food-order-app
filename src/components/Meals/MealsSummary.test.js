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
    
})
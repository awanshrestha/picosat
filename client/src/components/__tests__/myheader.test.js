import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import MyHeader from '../myheader'

afterEach(() => {
    cleanup();
})

test('renders Header', () => {
    render(<MyHeader />);
    const header = screen.getByTestId('my-header')
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('2021');
});
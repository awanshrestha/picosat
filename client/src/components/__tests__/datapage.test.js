import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import DataPage from '../../pages/data/data'

afterEach(() => {
    cleanup();
})

test('renders Data Page', () => {
    render(<DataPage />);
    const dataPage = screen.getByTestId('data-page')
    expect(dataPage).toBeInTheDocument();
    expect(dataPage).toHaveTextContent('Number');
});

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import About from '../../pages/about/about'

afterEach(() => {
    cleanup();
})

test('renders About Page', () => {
    render(<About />);
    const aboutPage = screen.getByTestId('about-page')
    expect(aboutPage).toBeInTheDocument();
    expect(aboutPage).toHaveTextContent('En Sat');
});


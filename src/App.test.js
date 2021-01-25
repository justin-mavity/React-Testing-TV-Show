
import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import App from './App';
import { fetchShows as mockFetchShows } from './api/fetchShows';
import userEvent from "@testing-library/user-event";

jest.mock('./api/fetchShows');

test('render w/o errors', () => {
    render(<App />);
});

test('Fetches and renders episodes data', async()=>{
    mockFetchShows.mockResolvedValueOnce();
})


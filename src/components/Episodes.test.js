
import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

test('Will episodes render without errors', () => {
    render(<Episodes episodes={[]}/>);
})

const episodes = [
    {name: 'Episode 1', id: 1},
    {name: 'Episode 2', id: 2}
]

test('Will rerender correctly when passing in new episode data', () => {
    const { rerender } = render(<Episodes episodes={[]} />);

    let episodeObjects = screen.queryAllByTestId('episode');
    expect(episodeObjects).toStrictEqual([]);

    rerender(<Episodes episodes={episodes} />);

    episodeObjects = screen.queryAllByTestId('episode');
    expect(episodeObjects).toHaveLength(2);
});
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';
import App from './App';

// eslint-disable-next-line no-undef
beforeEach(() => {
  // Mock fetch to return a fake notes list
  // eslint-disable-next-line no-undef
  global.fetch = jest.fn(() =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, text: 'Test note' }]),
    })
  );
});

// eslint-disable-next-line no-undef
afterEach(() => {
  // eslint-disable-next-line no-undef
  jest.restoreAllMocks();
});

// eslint-disable-next-line no-undef
test('renders Notes header and shows notes list', async () => {
  render(<App />);

  // Header is rendered
  // eslint-disable-next-line no-undef
  expect(screen.getByText(/Notes/i)).toBeInTheDocument();

  // Wait for list items
  const items = await screen.findAllByRole('listitem');
  // eslint-disable-next-line no-undef
  expect(items.length).toBeGreaterThan(0);
  // eslint-disable-next-line no-undef
  expect(items[0]).toHaveTextContent('Test note');

  // Log like backend
  // eslint-disable-next-line arrow-parens
  console.log('Notes:', items.map(li => li.textContent));
});

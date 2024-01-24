import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '../src/app/page';

test('Home', () => {
  render(<Home />);
  const main = within(screen.getByRole('main'));
  expect(main.getByText('Get started by editing')).toBeDefined();
});

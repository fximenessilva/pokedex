import { List } from './List';
import renderWithRouter from '../../testUtils/renderWithRouter';

describe('List', () => {
  it('should render', () => {
    renderWithRouter(<List />);
  });
});

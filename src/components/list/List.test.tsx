import { About } from './List';
import renderWithRouter from '../../testUtils/renderWithRouter';

describe('About', () => {
  it('should render', () => {
    renderWithRouter(<About />);
  });
});

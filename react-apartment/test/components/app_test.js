import { renderComponent , expect } from '../test_helper';
import Employee from '../../src/components/employee';

describe('Employee' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Employee);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});

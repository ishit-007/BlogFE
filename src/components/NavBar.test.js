import { render } from '@testing-library/react';
import NavBar from './NavBar';
import renderer from 'react-test-renderer';
describe('NavBar', () => {
    it('should render the NavBar component', async() => {
        const tree=renderer.create(<NavBar/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
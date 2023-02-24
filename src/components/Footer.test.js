import Footer from './Footer'
import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('Footer', () => {
    it('should render the Footer component', async() => {
        const tree=renderer.create(<Footer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
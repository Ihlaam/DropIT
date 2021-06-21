import React from 'react';
import renderer from 'react-test-renderer';
import AppButton from '../app/components/AppButton';

it('renders correctly', () => {
    const tree = renderer
      .create(<AppButton></AppButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
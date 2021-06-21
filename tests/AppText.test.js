import React from 'react';
import renderer from 'react-test-renderer';
import AppText from '../app/components/AppText';

it('displays text', () => {
    const tree = renderer
      .create(<AppText></AppText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
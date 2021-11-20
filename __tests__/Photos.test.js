import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Photos from '../client/src/components/Photos.jsx';
let mockData = require('../mock-photos.json');

configure({adapter: new Adapter()});

describe('Unit tests for Photos', () => {
  test('should render Photo list', () => {
    const photos = shallow(<Photos photos={mockData.photos}/>);

    expect(photos).toMatchSnapshot();
  })

  test('should be possible to click image links', () => {
    const photos = shallow(<Photos photos={mockData.photos}/>);

    photos.find('a.img-link').simulate('click');
  })
})


// Created test suite for App component, but issues with react-calendar
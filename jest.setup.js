import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzymeSerializer from 'enzyme-to-json/serializer';
import React from 'react';

Enzyme.configure({adapter: new Adapter()});
global.shallow = shallow; // Making shallow global object
global.render = render; // Making render global object
global.mount = mount; // Making mount global object
global.enzymeSerializer = enzymeSerializer; // Making enzymeSerializer global object
global.React = React;

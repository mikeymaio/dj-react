import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Hello from '../js/components/hello-world.component';

describe('Hello component', function() {
    it('Renders a greeting',  function() {
        const greeting = 'Hello World';

        const renderer = TestUtils.createRenderer();
        renderer.render(<Hello greeting={greeting} />);
        const result = renderer.getRenderOutput();

        const p = result.props;
        console.log(p);
        p.children.type.should.equal('h1');
        p.className.should.equal('hello');
        p.children.props.should.be.a('object');
        p.children.props.children.should.equal(greeting);
    });
});
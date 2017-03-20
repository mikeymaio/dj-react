import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Hello from '../js/components/hello-world.component';
import App from '../js/components/app.component';
import Header from '../js/components/header.component';
import Table from '../js/components/table.component';
import Search from '../js/components/search.component';
import ChannelLeft from '../js/components/channel-left.component';
import ChannelRight from '../js/components/channel-right.component';
import Turntable from '../js/components/turntable2.component';
import Mixer from '../js/components/mixer.component';
import FxSection from '../js/components/fx-section.component';


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

// describe('App component', function() {
//     it('Renders all components',  function() {

//         const renderer = TestUtils.createRenderer();
//         renderer.render(<App />);
//         const result = renderer.getRenderOutput();

//         const p = result.props;
//         console.log(p);
//         p.children.type.should.equal(div);
//         p.children.props.should.be.a('object');
//     });
// });

// describe('Table component', function() {
//     it('Renders search, channel-left, channel-right, and crossfader',  function() {

//         const renderer = TestUtils.createRenderer();
//         renderer.render(<Table />);
//         const result = renderer.getRenderOutput();

//         const p = result.props;
//         console.log(p);
//         p.className.should.equal('container col-lg-10 col-lg-offset-1');
//         // p.children.type.should.equal(div);
//         p.children.props.should.be.a('object');
//     });
// });
import React from 'react';
import Page from './footer.html';

var htmlDoc = {__html: Page};

class Footer extends React.Component {

    render() {
        return (<div dangerouslySetInnerHTML={htmlDoc}/>);
    }

}

export default Footer;
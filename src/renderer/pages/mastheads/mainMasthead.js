import React from 'react';

export default class Masthead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    async componentDidMount() {}
    render() {
        return (
          <>
              <div className="mastheadMainAreaContainer" >
                  <div className="mastheadAppNameContainer" >
                  electron-react-boilerplate-ipfs-core
                  </div>
                  <div style={{display:"inline-block",textAlign:"left",fontSize:"12px"}} >
                      <li>fork of electron-react-boilerplate</li>
                      <li>install ipfs-core</li>
                      <li>access node data</li>
                  </div>
              </div>
          </>
        );
    }
}

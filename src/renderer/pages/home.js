import React from 'react';
import Masthead from './mastheads/mainMasthead.js';
import * as MiscAppFxns from "./lib/app/misc.ts";
import * as IpfsFxns from "./lib/ipfs/ipfsCore"
const getMyPeerID = IpfsFxns.getMyPeerID;
const getVersion = IpfsFxns.getVersion;
const getIpfsNodeID = IpfsFxns.getIpfsNodeID;

const updateMainColWidth = MiscAppFxns.updateMainColWidth;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    async componentDidMount() {
        updateMainColWidth();

        const myPeerID = await getMyPeerID();
        document.getElementById("myPeerIdContainer").innerHTML = myPeerID

        const versionInfo = await getVersion();
        document.getElementById("versionInfoContainer").innerHTML = JSON.stringify(versionInfo,null,4)

        const ipfsNodeInfo = await getIpfsNodeID();
        document.getElementById("ipfsNodeIdContainer").innerHTML = JSON.stringify(ipfsNodeInfo,null,4)

    }
    render() {
        return (
            <>
                <div id="menuCol" className="menuCol" >
                </div>
                <div id="mainCol" >
                    <Masthead />
                    <div id="mainPanel" >
                        <div id="nodeRunning"  >
                            <div>
                                <div className="leftCol" >my peerID:</div>
                                <div className="rightCol" id="myPeerIdContainer"></div>
                            </div>

                            <br/>

                            <div >version info:</div>
                            <pre id="versionInfoContainer" ></pre>

                            <br/>

                            <div >id info:</div>
                            <pre id="ipfsNodeIdContainer"></pre>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

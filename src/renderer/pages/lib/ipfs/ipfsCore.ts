
import * as IPFS from 'ipfs-core'

export const getMyPeerID = async () => {
    const ipfs = await IPFS.create();
    const oIpfsID = await ipfs.id();
    const myPeerID = oIpfsID.id;
    await ipfs.stop();
    return myPeerID
}

export const getVersion = async () => {
    const ipfs = await IPFS.create();
    const versionInfo = await ipfs.version();
    await ipfs.stop();
    return versionInfo
}

export const getIpfsNodeID = async () => {
    const ipfs = await IPFS.create();
    const nodeId = await ipfs.id();
    await ipfs.stop();
    return nodeId
}

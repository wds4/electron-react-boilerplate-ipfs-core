This is a fork of [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) (erb) with the addition of ipfs-core. It is a single page app which launches an ipfs node in the renderer process, accesses the API, and displays basic information about your node: peerID, version information (via ipfs.version()), and other basic id information (via ipfs.id()). It works in dev mode as well as in production.

I didn't make any changes to the main process. The IPFS node is accessed entirely through the renderer process. See [this file](https://github.com/wds4/electron-react-boilerplate-ipfs-core/blob/main/src/renderer/pages/lib/ipfs/ipfsCore.ts) for the relevant functions. As you can see, each time I access the node, I have to create it and then stop it. This would make things very slow if I want to do multiple IPFS operations. I am trying to figure out how to create the node just one time, in the main process, use IRC for the renderer process to communicate with the main process and access the IPFS node that way, and then stop the node only when the app shuts down, but for some reason, whenever I try to require or import ipfs-core in the main process I get an error. Maybe something to do with erb, I don't know. If you know how to fix this, let me know!

Unlike another erb-based IPFS template I made recently, [electron-react-boilerplate-ipfs](https://github.com/wds4/electron-react-boilerplate-ipfs), there is no need for the user to install the IPFS node independently.

## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main https://github.com/wds4/electron-react-boilerplate-ipfs-core.git your-project-name
cd your-project-name
npm install
```

For some reason, the only way for me to get it to work (so far) is to leave ipfs-core out of package.json, so it is not included in the initial install. If I include ipfs-core in package.json, then the initial install tells me ipfs-core is a native dependency (which doesn't make sense since it is in javascript), and then it fails to start on the next step.

After the initial installation step (with ipfs-core not listed in package.json as a dependency), you then install ipfs-core:

```bash
npm install ipfs-core
```

You are now ready to run the app:

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## License

MIT © [Electron React Boilerplate](https://github.com/electron-react-boilerplate)

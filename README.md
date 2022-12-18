This is a fork of [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) (erb) with the addition of ipfs-core. The ipfs node is launched and accessed by the renderer process. It is production ready.

To create this app, after forking erb, only one installation was necessary:
```
npm install ipfs-core
```

I didn't make any changes to the main process. The IPFS node is accessed entirely through the renderer process. See [this file](https://github.com/wds4/electron-react-boilerplate-ipfs-core/blob/main/src/renderer/pages/lib/ipfs/ipfsCore.ts) for the relevant functions. As you can see, each time I access the node, I have to create it and then stop it. This would make things very slow if I want to do multiple IPFS operations. I am trying to figure out how to create the node just one time, in the main process, use IRC for the renderer process to communicate with the main process and access the IPFS node that way, and then stop the node only when the app shuts down, but for some reason, whenever I try to require or import ipfs-core in the main process I get an error. Maybe something to do with erb, I don't know. If you know how to fix this, let me know!

Unlike another erb-based IPFS template I made recently, [electron-react-boilerplate-ipfs](https://github.com/wds4/electron-react-boilerplate-ipfs), there is no need for the user to install the IPFS node independently.

## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name
cd your-project-name
npm install
```

**Having issues installing? See our [debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

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

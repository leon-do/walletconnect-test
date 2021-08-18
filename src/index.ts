import WalletConnect from "@walletconnect/client";

// Create a connector
const walletConnect = new WalletConnect({
  bridge: "https://bridge.walletconnect.org",
  clientMeta: {
    name: "My Wallet Connect App",
    description: "My Wallet Connect App description",
    url: "https://chainsafe.io",
    icons: [
      "https://gateway.pinata.cloud/ipfs/QmVcB5rxQ6Lgfw8G92LJ2mZtegzQWR13mxFN9ghq6gfUfH",
    ],
  },
});

// create new session
walletConnect.createSession();

// generate wc uri
walletConnect.on("display_uri", (error, payload) => {
  if (error) {
    throw error;
  }
  const url = payload.params[0];
  console.log(url);
});

// Subscribe to connection events
walletConnect.on("connect", (error, payload) => {
  if (error) throw error;
  // send a transaction
  walletConnect
    .sendTransaction({
      from: payload.params[0].accounts[0],
      to: "0xF2cf9dBAEEd9B3965c9531b5D3C64CbFa8Ab8C89",
      data: "0x",
      value: "0x00", // Optional
    })
    .catch(() => {});
});

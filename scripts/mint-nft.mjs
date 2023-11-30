const CONTRACT_ADDRESS = "0xe04839605564C5e7cb181566fd78016a20c4339E"
const META_DATA_URL = "ipfs://bafyreibrhibgoodm2kaolmkznt73oa3sojlq62y43s4otzfrhks67wrpwy/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
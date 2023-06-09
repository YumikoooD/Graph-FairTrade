# Graph-FairTrade
Graph Protocol for Fairtrade project

## Events are retrieved using the Graph Protocol

Any event happening in the smart contract can be indexed by the Graph protocol. 

Usefull links:
- [The Graph](https://thegraph.com/)
- [allo-grants-beta-subgraph](https://thegraph.com/explorer/subgraphs/2UamqKr2Pr5iLFQtgowHQKA3gjibrnQpBER4Nof5FDVA?view=Overview&chain=arbitrum-one) but the playground does not work, I had issues with deploying on arbitrum and querying for mainnet. We either have to build our own subgraph or use an existing one.
- [Gitcoin](https://thegraph.com/explorer/subgraphs/BQXTJRLZi7NWGq5AXzQQxvYNa5i1HmqALEJwy3gGJHCr?view=Playground&chain=mainnet)
- [crowdfund-matchingpool](https://github.com/supermodularxyz/crowdfund-matchingpool)  [Graph](https://thegraph.com/explorer/subgraphs/64T3nPmbDYdRKi9Ba9Qr98nfLG68XS634h1JTyupySda?view=Overview&chain=mainnet)
- [Allo](https://thegraph.com/explorer/subgraphs/Ba4YGqqyYVFd55zcQnXS3XYTjJARKe93LY6qNgFbrHQz?view=Overview&chain=mainnet)

How to monitor/ listen to events on the blockchain other option:
```
from web3 import Web3

# Create a new instance of Web3
web3 = Web3(Web3.WebsocketProvider('wss://kovan.infura.io/ws/v3/<project_id>'))

# Get the contract ABI and address
contractABI = <abi>
contractAddress = <address>

# Get an instance of the contract using the ABI and address
contractInstance = web3.eth.contract(address=contractAddress, abi=contractABI)

# Listen for the "Transfer" event
def handle_event(event):
    print('Transfer event:', event)

def handle_error(error):
    print('Error:', error)

contractInstance.events.Transfer().on('data', handle_event).on('error', handle_error)

```
To run this script continuously, you can either run it as a background process or use a tool like screen to run the script in a detached terminal session. Alternatively, you can use a scheduling tool like cron to run the script periodically.

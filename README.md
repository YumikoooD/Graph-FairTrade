# allo-grants-beta-subgraph

This is a very basic subgraph indexing events from the contracts of the Allo beta grant round.

Production query url
https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/2UamqKr2Pr5iLFQtgowHQKA3gjibrnQpBER4Nof5FDVA

Developement query url
https://api.studio.thegraph.com/query/38576/allo-grants-beta-subgraph/v0.1.0

Note the DAI contracts events may be missing.

Feel free to pull request to improve.


Starter dev commands
```
git clone repo
cd repo
npm install -g @graphprotocol/graph-cli 
or 
yarn global add @graphprotocol/graph-cli

graph auth --studio <access_token>

graph codegen && graph build

graph deploy --studio <subgraph_name>
```





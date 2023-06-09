import requests
# pretty print is used to print the output in the console in an easy to read format
from pprint import pprint

API_KEY = "dec9470f53568776e096e1223bb00400"

# function to use requests.post to make an API call to the subgraph url
def run_query(query):
    # endpoint where you are making the request
    request = requests.post('https://api.studio.thegraph.com/query/48157/test-fairtrade/0.0.1',
                            json={'query': query},
                            headers={'Authorization': f'Bearer {API_KEY}'})
    if request.status_code == 200:
        return request.json()
    else:
        raise Exception('Query failed. Return code is {}. {}'.format(request.status_code, query))

skip_amount = 100

for i in range(3):
    skip_amount = i * skip_amount

    query = """
    {
    voteds(first: 100, where: {token_not_contains: "0x0000"}) {
    id
    token
    amount
    voter
    applicationIndex
    blockTimestamp
    blockNumber
    grantAddress
    projectId
    roundAddress
    transactionHash
        }
    }
    """

    result = run_query(query)
    

# print the results
print('Print Result - {}'.format(result))
print('#############')
# pretty print the results
pprint(result)

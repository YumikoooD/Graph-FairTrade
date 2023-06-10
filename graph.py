import requests
# pretty print is used to print the output in the console in an easy to read format
from pprint import pprint
import mysql.connector
import datetime

API_KEY = "dec9470f53568776e096e1223bb00400"

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="epytodo",
    database="graph"
)

cursor = connection.cursor()

def insert_record(record):
    insert_query = """
    INSERT INTO votes (id, token, amount, voter, applicationIndex, blockTimestamp, blockNumber, grantAddress, projectId, roundAddress, transactionHash)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
    """

    dt = datetime.datetime.fromtimestamp(int(record['blockTimestamp']))
    formatted_timestamp = dt.strftime("%Y-%m-%d %H:%M:%S")
    amount = int(record['amount'])
    values = (
        record['id'],
        record['token'],
        amount,
        record['voter'],
        record['applicationIndex'],
        formatted_timestamp,
        record['blockNumber'],
        record['grantAddress'],
        record['projectId'],
        record['roundAddress'],
        record['transactionHash'],
    )
    cursor.execute(insert_query, values)
    connection.commit()


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

query = """
{
voteds(first: 10, skip: 140, where: {token_not_contains: "0x0000"}) {
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
for record in result['data']['voteds']:
    insert_record(record)

query = "SELECT id FROM votes"
cursor.execute(query)
rows = cursor.fetchall()
for row in rows:
    print(row[0])  # Assuming the token is the first column in your result set


# print the results
#print('Print Result - {}'.format(result))
#print('#############')
# pretty print the results
#pprint(result)

cursor.close()
connection.close()
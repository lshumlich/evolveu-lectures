#
# See README.md for instructions
#
import pytest

from flask import json
import web

calgary = {"key":1, "city":"Calgary", "lat":51.05, "long":-114.05}
edmonton = {"key":2, "city":"Edmonton", "lat":53.55, "long":-113.49}
redDeer = {"key":3, "city":"Red Deer", "lat":52.28, "long":-113.81}

@pytest.fixture
def client():
    web.app.config['TESTING'] = True
    client = web.app.test_client()

    yield client


def test_root(client):
    rv = client.get('/')
    assert(rv.status_code == 200)
    assert(b'EvolveU test' in rv.data)
    assert(b'API' in rv.data)


def test_crud(client):
    # we should start with no data
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 0)

    # add one
    rv = client.post('/add', 
        json=calgary)
    assert(rv.status_code == 200)

    # we should have one now
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 1)

    # add a second one
    rv = client.post('/add', 
        json=edmonton)
    assert(rv.status_code == 200)

    # we should have two now
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 2)

    # delete edmonton and there should be one
    rv = client.post('/delete', 
        json={"key": edmonton["key"]})
    assert(rv.status_code == 200)

    # we should have one now
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 1)

    # delete edmonton again and there should still be one
    rv = client.post('/delete', 
        json={"key": edmonton["key"]})
    # the delete should fail
    assert(rv.status_code == 404)

    # we should have one now
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 1)

    # delete calgary and there should zero
    rv = client.post('/delete', 
        json={"key": calgary["key"]})
    assert(rv.status_code == 200)

    # they should be all gone
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 0)



def test_test(client):
    # data or json can be sent but not both
    rv = client.post('/test', 
        # data=dict(fname="Larry", lname="Shumlich"), 
        json={"key1":"value1","key2":"value2"})
    assert(rv.status_code == 200)
    # print('test_test rv: ',rv)
    # print('test_test rv.data: ',rv.data)
    # print('test_test rv.json: ',rv.get_json())

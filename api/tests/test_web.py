#
# See README.md for instructions
#
import pytest

from flask import json
import web

@pytest.fixture
def client():

    web.app.config['TESTING'] = True
    client = web.app.test_client()

    yield client


def test_root(client):
	rv = client.get('/')
	assert(b'EvolveU test' in rv.data)
	assert(b'API' in rv.data)

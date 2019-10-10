#
# See README.md for instructions
#
import os
import traceback
from flask import Flask, jsonify, request
from flask_cors import CORS
import json

data = []
keys = {}

print("--- Starting", __file__)

app = Flask(__name__)
app.secret_key = os.urandom(16)
CORS(app, supports_credentials=True)

@app.route("/")
def hello():
	return "<h1>EvolveU test</h1> <h2>API Server up and running..</h2>"


@app.route("/all", methods = ['POST','GET'])
def all():
	try :
		content = request.get_json()
		return jsonify(data), 200
	except Exception as e:
		traceback.print_stack()
		print('**** Not a valid request. ', e)
	return jsonify('{}'), 404

#
# There is a bug here. That same key can be added multiple times but can not
# be deleted..... Before you fix the code, what do you need to do first?
#
@app.route("/add", methods = ['POST'])
def add():
	global data
	try :
		content = request.get_json()
		keys[content["key"]] = len(data)
		# print(keys)
		data.append(content)
		return jsonify({}), 200
	except Exception as e:
		traceback.print_stack()
		print('**** Not a valid request. ', e)
	return jsonify('{}'), 404


@app.route("/delete", methods = ['POST'])
def delete():
	global data
	try :
		content = request.get_json()
		key = content["key"]
		data.pop(keys[key])
		del keys[key]
		return jsonify({}), 200
	except Exception as e:
		# traceback.print_stack()
		print('**** Not a valid request. ', e)
	return jsonify('{}'), 404


@app.route("/load", methods = ['GET'])
def load():
	global data
	print("data1:", data)
	with open('data.json') as json_file:
		data = json.load(json_file)
		for d in data:
			print('Record: ', d)
	print("data2:", data)
	return "<h1>EvolveU test</h1> <h2>" + str(len(data)) + " records Loaded</h2>"



@app.route("/save", methods = ['GET'])
def save():
	global data
	with open('data.json', 'w') as outfile:
		json.dump(data, outfile)
	return "<h1>EvolveU test</h1> <h2>" + str(len(data)) + " records Saved</h2>"

'''
[
    { "key": 1, "city": "Calgary", "lat": 51.05, "long": -114.05 },
    { "key": 2, "city": "Edmonton", "lat": 53.55, "long": -113.49 },
    { "key": 3, "city": "Red Deer", "lat": 52.28, "long": -113.81 }
]
'''

@app.route("/test", methods = ['POST','GET'])
def test():
	try :
		content = request.get_json()
		# print('in /test request: ',request)
		# print('in /test path: ',request.path)
		# print('in /test form: ',request.form)
		# print('in /test parms: ',request.args)
		# print('in /test json: ',request.get_json())
		return jsonify({'status': 'ok'}), 200
	except Exception as e:
		traceback.print_stack()
		print('**** Not a valid request. ', e)
	return jsonify('{}'), 404

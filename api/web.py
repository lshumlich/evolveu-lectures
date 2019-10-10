#
# See README.md for instructions
#
import os
import traceback
from flask import Flask, jsonify, request
from flask_cors import CORS

# cities = [{"city":"Calgary", "lat":52.345, "long":60.345}]
cities = []
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
		return jsonify(cities), 200
	except Exception as e:
		traceback.print_stack()
		print('**** Not a valid request. ', e)

	return jsonify('{}'), 404

#
# There is a bug here. That same key can be added multiple times but can not
# be deleted..... Before you fix the code what do you need to do first?
#
@app.route("/add", methods = ['POST'])
def add():
	try :
		content = request.get_json()
		keys[content["key"]] = len(cities)
		# print(keys)
		cities.append(content)
		return jsonify({}), 200

	except Exception as e:
		traceback.print_stack()
		print('**** Not a valid request. ', e)

	return jsonify('{}'), 404

@app.route("/delete", methods = ['POST'])
def delete():
	try :
		content = request.get_json()
		key = content["key"]
		cities.pop(keys[key])
		del keys[key]

		return jsonify({}), 200

	except Exception as e:
		# traceback.print_stack()
		print('**** Not a valid request. ', e)

	return jsonify('{}'), 404


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

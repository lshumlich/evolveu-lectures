#
# See README.md for instructions
#
import os
from flask import Flask, jsonify
from flask_cors import CORS

print("--- Starting", __file__)

app = Flask(__name__)
app.secret_key = os.urandom(16)
CORS(app, supports_credentials=True)

@app.route("/")
def hello():
	# session["lfs"] = "Larry"
	# s = escape(str(session))
	# print("Session for this dude:", s)
	return "<h1>EvolveU test</h1> <h2>API Server up and running..</h2>"

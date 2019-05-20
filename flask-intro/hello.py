from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify
# import json

app = Flask(__name__)

people = {1:{'id':1,'fname':'Larry', 'lname':'Shumlich','age':29},
		  2:{'id':2,'fname':'Lorraine', 'lname':'Shumlich','age':31},
		  4:{'id':4,'fname':'Erin', 'lname':'Shumlich','age':30}
		 }

@app.route("/")
def hello():
	print(people)
	return "Hello World! From Larry Shumlich"

@app.route("/admin")
@app.route("/admin/")
@app.route("/admin/<myid>")
@app.route("/admin/<myid>/")
def admin(myid=0):
	print('people:', people)
	print ('my id is:', int(myid))
	return render_template("person.html",
		testval="Some Value So We know it works", 
		person=people.get(int(myid),{'fname':'Who Knows'}))
	return "Hello World! - admin v4 - Larry Shumlich " + \
			str(people.get(int(myid),{'fname':'Who Knows'}))

@app.route("/info")
def info():
	resp = jsonify(people)
	print('---json---:', resp.response)
	# print(jsonstring.__dict__)
	return resp, 202
	print('Args:', request.args)
	return jsonify(people), 200
	return jsonify('{}'), 202
	return "Hello World! - info - Larry Shumlich " + request.args.get('parm1','default1')

@app.route("/update", methods = ['POST'])
def update():
	content = request.get_json()
	# print('Update:', request, content)
	print('About to update:', content['id'], content['age'])
	return jsonify({'worked':'yes'}), 200

if __name__ == '__main__':
	app.run(host='0.0.0.0', debug=True)

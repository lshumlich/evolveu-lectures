
from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)


@app.route("/")
def hello():
	return "Hello World!"

@app.route("/page")
def page():
	return render_template('page.html')

@app.route("/register/<uuid>")
def register(uuid=None):
	user = uuid
	return jsonify('{}'), 404


@app.route("/comments/<uuid>/")
@app.route("/comments/<uuid>/<date>/")
def comments(uuid, date=None):


	return render_template('comments.html', results=report.results, questions=report.questions, 
						   missing=report.missing, progress=report.class_progress, 
						   date=report.report_date, week=report.week_number)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)


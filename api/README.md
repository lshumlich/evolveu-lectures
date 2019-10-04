
This is a mini project within the repository. It was built to assist students with the concept of using an API that maintains data. In this case, the data is just "State" as it is not persisted in a long term data store. The data is maintained in state.

Python and pipenv is required to run this test API server. See the 

https://www.python.org/ 
pip install --user pipenv

Install the packages required.

```sh
pipenv install
```

Start the environment.

```sh
pipenv shell
```

Run the tests.

```sh
pipenv shell
PYTHONPATH=. pytest -s
PYTHONPATH=. pytest -k questions -s
PYTHONPATH=. pytest tests/test_sql.py -s -k _obj
```

Start the webserver.

```sh
pipenv shell
# mac or linux 
./start
# windows
gunicorn web:app --reload --log-file=-
```

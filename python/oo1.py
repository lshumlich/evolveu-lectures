
class Person(object):
	_count = 0
	def __init__(self, first_name, last_name, age):
		self._first_name = first_name
		self._last_name = last_name
		self._age = age
		type(self)._count += 1

	@property
	def name(self):
		return f'{self._first_name} {self._last_name}'

	@property
	def age(self):
		return self._age

	@age.setter
	def age(self, x):
		self._age = x

	@property
	def first_name(self):
		return self._first_name

	@first_name.setter
	def first_name(self, x):
		self._first_name = x

	@property
	def last_name(self):
		return self._last_name

	@last_name.setter
	def last_name(self, x):
		self._last_name = x

	@property
	@classmethod
	def people_in_my_world(cls):
		# return (type)self._count
		print('*** In people_in_my_world ***')
		return 'asdf'

	def birthday(self):
		self._age += 1


class Employee(Person):

	@property
	def email(self):
		return f'{self.first_name}.{self.last_name}@myorg.ca'.lower()

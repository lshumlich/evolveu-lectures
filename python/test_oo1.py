
import unittest
import oo1


class TestOo1(unittest.TestCase):

	def test_person(self):
		lar = oo1.Person('Larry', 'Shumlich', 29)
		lor = oo1.Person('Lorraine', 'Tkachyk', 27)
		lor.city = 'Calgary'

		self.assertEqual(27, lor.age)
		self.assertEqual(29, lar.age)
		self.assertEqual('Lorraine Tkachyk', lor.name)
		self.assertEqual('Larry Shumlich', lar.name)

		lar.first_name = 'Lars'
		self.assertEqual('Lars', lar.first_name)
		self.assertEqual('Lars Shumlich', lar.name)

		lar.last_name = 'Shumy'
		self.assertEqual('Shumy', lar.last_name)
		self.assertEqual('Lars Shumy', lar.name)

		lar.birthday()
		self.assertEqual(30, lar.age)

		lar.birthday()
		lar.birthday()
		lar.birthday()
		self.assertEqual(33, lar.age)
		self.assertEqual(27, lor.age)

	def test_employee(self):
		lar = oo1.Employee('Larry', 'Shumlich', 29)
		self.assertEqual('Larry Shumlich', lar.name)
		self.assertEqual('larry.shumlich@myorg.ca', lar.email)

	def test_people_in_my_world(self):
		population = oo1.Person.people_in_my_world
		print('The pop:' , population)
		print('The poperty:' , oo1.Person.people_in_my_world)
		print('The poperty func:' , oo1.Person.people_in_my_world())

		new_person = oo1.Person('Larry', 'Shumlich', 29)
		self.assertEqual(population + 1, oo1.Person.count)


import datetime
import unittest
import inspect

import tdd2


class TestTdd2(unittest.TestCase):

	def test_add_five(self):
		self.assertEqual(8,tdd2.add_five(3))

	def test_my_max(self):
		self.assertEqual(5,tdd2.my_max([1,2,3,4,5]))
		self.assertEqual(50,tdd2.my_max([5,10,20,50]))
		self.assertEqual(None,tdd2.my_max([]))
		self.assertEqual(-1000,tdd2.my_max([-1000,-2000,-3000,-4000]))

	def test_my_min(self):
		self.assertEqual(1,tdd2.my_min([1,2,3,4,5]))
		self.assertEqual(5,tdd2.my_min([5,10,20,50]))
		self.assertEqual(None,tdd2.my_min([]))
		self.assertEqual(-4000,tdd2.my_min([-1000,-2000,-3000,-4000]))

	def test_has_string(self):
		self.assertEqual(["Mary had"],
						tdd2.has_string(
							["Mary had",
							 "a little lamb",
							 "little lamb",
							 "Whose fleece",
							],"Mary"))

		self.assertEqual(["a little lamb",
						  "little lamb",
						  "Whose fleece",
							],
						tdd2.has_string(
							["Mary had",
							 "a little lamb",
							 "little lamb",
							 "Whose fleece",
							],"le"))


		self.assertEqual([],
						tdd2.has_string(
							["Mary had",
							 "a little lamb",
							 "little lamb",
							 "Whose fleece",
							],"asdf"))

		self.assertEqual([],tdd2.has_string([],"asdf"))
		self.assertEqual([],tdd2.has_string([],""))


	def test_to_date(self):
		dt = tdd2.to_date("2010-08-02")
		self.assertIsInstance(dt, datetime.date)
		self.assertEqual(2010,dt.year)
		self.assertEqual(8,dt.month)
		self.assertEqual(2,dt.day)

		dt = tdd2.to_date("2020-09-03")
		self.assertEqual(2020,dt.year)
		self.assertEqual(9,dt.month)
		self.assertEqual(3,dt.day)

	def test_date_diff(self):
		self.assertEqual(1, tdd2.date_diff("2018-09-02", "2018-09-01"))

		self.assertEqual(1, tdd2.date_diff("2018-09-01", "2018-09-02"))
		self.assertEqual(365, tdd2.date_diff("2019-09-01", "2018-09-01"))

		self.assertEqual(2080, tdd2.date_diff("2018-09-01", "2012-12-21"))

	def test_contains(self):
		self.assertTrue(tdd2.contains(['a','b','d'],"a"))
		self.assertFalse(tdd2.contains(['a','b','d'],"c"))
		self.assertFalse(tdd2.contains(['aa','bb','dd'],"a"))

	def test_add_contents(self):
		self.assertEqual(6, tdd2.add_contents([1,2,3]))

		self.assertEqual(713, tdd2.add_contents([123, 245, 345]))
		self.assertEqual(66724916, tdd2.add_contents([646541, 65465122, 613253]))

	def test_lookup(self):
		self.assertEqual('one mine', tdd2.lookup({1:'one', 2:'two', 3:'three'} , 1))
		self.assertEqual(' mine', tdd2.lookup({1:'one', 2:'two', 3:'three'} , 4))



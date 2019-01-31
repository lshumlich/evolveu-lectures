
# Begin tdd

import unittest
import our_math
import openpyxl

class TestDates(unittest.TestCase):

	def test_one(self):
		print("i'm in test_one")

	def test_two(self):
		print("i'm in test_two")

	def test_three(self):
		print("i'm in test_three")

	def test_four(self):
		print("i'm in test_four")
		# self.fail()

	def test_multiply(self):
		self.assertEqual(4, our_math.multiply(2,2))

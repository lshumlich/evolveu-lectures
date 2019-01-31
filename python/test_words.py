import unittest
import words

class TestDates(unittest.TestCase):

	def test_one(self):
		self.assertEqual('Larry.Shumlich@mail.com', words.email('Larry', 'Shumlich'))
		self.assertEqual('Jack.Ross@mail.com', words.email('Jack', 'Ross'))
		self.assertEqual('Dale.James@mail.com', words.email('Dale', 'James'))
		# self.assertEqual('First.Last@mail.com', words.email('Last', 'First'))
		self.assertEqual('First.Last@mail.com', words.email('First', 'Last'))

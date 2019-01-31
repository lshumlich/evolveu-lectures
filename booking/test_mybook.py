
import unittest
import booking.mybook


class TestMyBook(unittest.TestCase):

    def test_book(self):
    	self.assertEqual('You are in mybook', booking.mybook.book())
 
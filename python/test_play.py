
# Just start playing

import unittest

class Mine:
	None
	
class TestDates(unittest.TestCase):

	def test_play(self):
		print("i'm in test_one")
		d = {'a':1,'b':2}
		a = [1,2,3]
		m = Mine()
		o = object()
		print(o)
		m.x = 'xxx'
		a.x = 'xxx'
		print(m)
		print(m.x)
		print(m.__dict__)
		print(m.__dict__['x'])

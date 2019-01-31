
import datetime

def add_five(value):
	return value + 5

def my_max(list):
	if list:
		v = list[0]
		for l in list:
			if l > v:
				v = l
	else:
		v = None

	return v


def my_min(list):
	if list:
		v = list[0]
		for l in list:
			if l < v:
				v = l
	else:
		v = None

	return v

def has_string(list, str):
	contains = []
	for l in list:
		if str in l:
			contains.append(l)
	return contains 

def to_date(dt):
	return datetime.datetime.strptime(dt, "%Y-%m-%d").date()

def date_diff(dt1_s, dt2_s):
	""" calculate the difference between to dates in days """
	dt1 = to_date(dt1_s)
	dt2 = to_date(dt2_s)
	# return (dt1-dt2).days
	return abs((dt1-dt2).days)
	return 0

def contains(list, str):
	return str in list
	return False

def add_contents(list):
	total = 0
	for i in list:
		total += i
	return total

def lookup(list, key):
	return list.get(key, '') + ' mine'


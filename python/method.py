
# practising methods

print("Hello World from:", __name__, 'in', __file__)

def email(first_name, last_name):
	return first_name +'.' + last_name + '@mail.com'

# example as two statements

e = email('larry', 'shumlich')
print(e)

# statements combined

print(email('larry', 'shumlich'))
print(email('Jack', 'smith'))
print(email('Lorraine', 'Jones'))


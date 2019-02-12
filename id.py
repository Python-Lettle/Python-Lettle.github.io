f = open("result.txt","r+")
ids = range(1301)
string = "["
for i in ids:
	string += r'"' + str(i+1) + r'"' + ","
string += "]"
f.write(string)
f.close()
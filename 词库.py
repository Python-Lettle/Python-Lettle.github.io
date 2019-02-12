#coding:utf-8
import os,sys
import codecs
f = open("result.txt","r+")
word = str(codecs.open(os.getcwd()+"/word.txt",encoding='UTF-8').read())
w_l = word.split("\r\n")
word_l = []
for i in w_l:
	new_crazy = filter(str.isalpha, i)
	word_l.append(''.join(list(new_crazy)))
print(word_l)

string = "["
for i in word_l:
	string += r'"' + i + r'"' + ","
string += "]"
f.write(string)
f.close()
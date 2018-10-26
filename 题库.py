#coding:utf-8

import os,sys
import codecs
#f = open("result.txt","r+")
que_f = str(codecs.open(os.getcwd()+"/que",encoding='UTF-8').read())
ans_f = str(codecs.open(os.getcwd()+"/ans",encoding='UTF-8').read())

q_l = que_f.split("\r\n")
que_l = []
for i in range(len(q_l)):
	que_l.append(q_l[i].split("．"))

a_l = ans_f.split("\r\n")
ans_l = []
for i in range(len(a_l)):
	ans_l.append(a_l[i].split("."))
ans_l.pop()
que_l.pop()
que_li = []
ans_li = []
tihao_li = []

for i in range(0,len(que_l)-1):
	tihao_li.append(que_l[i][0])
	que_li.append(que_l[i][1].strip())
	ans_li.append(ans_l[i][1].strip())

string = "["

for i in tihao_li:
	string += '{"id":"'+i+'","title":"'+que_li[int(i)-1]+'","xuanxiang":["'+ans_li[int(i)-1]+'"]},'
string += "]"
print(string)

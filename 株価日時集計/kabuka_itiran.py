from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep
from bs4 import BeautifulSoup
import os
import xlwings as xw
import datetime

driver = webdriver.Chrome()

ls_2 = []

dt_now = datetime.datetime.now()


for i in range(1,80):
    url = "https://info.finance.yahoo.co.jp/ranking/?kd=4&tm=d&vl=a&mk=1&p=" + str(i)
    driver.get(url)

    page_source = driver.page_source
    soup = BeautifulSoup(page_source,"html.parser")

    table = soup.find("table").find("tbody")

    datas = table.find_all("tr")
    for data in datas:
        ls = []
        informations = data.find_all("td")
        for information in informations:
            ls.append(information.text)
        ls_2.append(ls)

    sleep(2)

driver.close()

ls_2.insert(0,["順位","コード","市場","名称","取引値","取引値2","発行済み株式","時価総額","単元株数","掲示板"])

path = os.getcwd() + "/kabuka_itiran.xlsx"
wb = xw.Book(path)

month = dt_now.month
day = dt_now.day
hour = dt_now.hour
minute = dt_now.minute
date = f"{month}月{day}日 {hour}時{minute}分"

new_sht = xw.sheets.add(date)
xw.Range("A1").value = dt_now
xw.Range("A2:j3924").value = ls_2
wb.save()
wb.close()

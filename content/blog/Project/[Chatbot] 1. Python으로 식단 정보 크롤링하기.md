---
title: "[Chatbot] 1. Python으로 식단 정보 크롤링하기"
date: "2020-03-31"
category: "Project"
tags:
    - project
    - kakao
cover: ./kakao.jpg
---


아래 링크는 우리학교에서 식단 정보를 알려주는 사이트다.

https://coop.koreatech.ac.kr/dining/menu.php



해당 사이트에서 정보를 읽어와서 DB에 저장해볼 것이다.



**[사용 도구]**

언어 : Python 3.8.2

IDE : Pycharm

DB : MySQL 5.7



**[코드]**

```python
from urllib.request import urlopen
from bs4 import BeautifulSoup
import ssl
import re
import pymysql

context = ssl._create_unverified_context()
URL = urlopen("https://coop.koreatech.ac.kr/dining/menu.php", context=context)
bs = BeautifulSoup(URL, 'html.parser')

name = re.compile('menu-list?.')
menuList = []

for menulist in bs.find_all("td", {"class":name}):
    before = menulist.text
    after = re.sub('\t', '', before)
    if(after=="\r\n\xa0\r\n"):
         menuList.append('-')
    else:
         menuList.append(after)

breakfast = []
lunch = []
dinner = []

for a in range(3):
    for b in range(8):
         if(a == 0):
              breakfast.append(menuList[a*8 + b])
         elif(a==1):
              lunch.append(menuList[a*8 + b])
         elif(a==2):
              dinner.append(menuList[a*8 + b])

conn = pymysql.connect(host='localhost', user='root', password='12345', db='daily_menu', charset='utf8')
try:
   with conn.cursor() as curs:
       curs.execute('TRUNCATE TABLE breakfast;')
       curs.execute('TRUNCATE TABLE lunch;')
       curs.execute('TRUNCATE TABLE dinner;')

       sql_b = 'INSERT INTO breakfast(korean, special, onedish, western ,faculty ,subak ,cam2_1 ,cam2_2) VALUES(%s, %s, %s, %s, %s, %s, %s, %s)'
       sql_l = 'INSERT INTO lunch(korean, special, onedish, western ,faculty ,subak ,cam2_1 ,cam2_2) VALUES(%s, %s, %s, %s, %s, %s, %s, %s)'
       sql_d = 'INSERT INTO dinner(korean, special, onedish, western ,faculty ,subak ,cam2_1 ,cam2_2) VALUES(%s, %s, %s, %s, %s, %s, %s, %s)'
       for flag in range(3):
            if(flag == 0):
                 var = tuple(breakfast)
                 curs.execute(sql_b, var)
            elif(flag == 1):
                 var = tuple(lunch)
                 curs.execute(sql_l, var)
            elif(flag == 2):
                 var = tuple(dinner)
                 curs.execute(sql_d, var)

       conn.commit()

       rs = curs.fetchall()
       for row in rs:
           print(rs[row])

finally:
       conn.close()
```



## [설명]

**breakfast, lunch, dinner 세 테이블의 구조는 아래와 동일하다.**

![img](https://blog.kakaocdn.net/dn/7DWGo/btqC6mye74Y/IAFVdaImlC5CNEKAjXYf41/img.png)breakfast table 구조



코드는 다음과 같은 흐름으로 진행된다.

**사이트에서 식단의 정보를 가져온다. -> 가져온 식단 정보를 8개씩 나누어 아침, 점심, 저녁 리스트에 각각 넣는다 (식단의 내용은 8개의 주제로 나뉘어져 있다 {한식, 특식.. 등등}) -> 가져온 내용을 아침, 점심, 저녁 Table에 각각 저장한다.**



\- SSL인증을 거쳐갈 임시의 context를 생성하기위해 _create_unverified_context()함수를 사용했다.

\- execute() 메서드는 하나의 Row (하나의 Tuple 데이타)를 치환하여 실행하기 때문에 breakfast를 Tuple로 변환해주었다.

\- 당일날에 해당하는 데이터만을 필요로 하기 때문에 데이터를 갱신할 때 마다 테이블을 초기화 시키기 위해 SQL문에서 TRUNCATE를 사용했다.

\- td태그의 class값에 대해 크롤링해오는데 해당 시간대에 따라서 td태그의 클래스값 뒤에 'o'가 붙어서 정규표현식을 이용해 뒤에 한글자를 필터링했다.

**'menu-time?.'**

![img](https://blog.kakaocdn.net/dn/nihro/btqC6PUu0eO/LQsnCI4blqNCXmqTORGkC0/img.png)

해당 시간대의 td태그의 클래스값
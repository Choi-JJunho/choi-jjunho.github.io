---
title: "[Develop] python으로 웹 크롤링하기"
date: "2020-03-22"
category: "Develop"
tags:
    - Develop
    - Python
cover: ./develop.png
---

HTML 및 XML 문서를 구문분석하기 위한 Python 패키지인 beautifulsoup를 설치하자

**pip install requests beautifulsoup4**



Pycharm에서는 다음과 같은 방법으로도 패키지를 추가할 수 있다.

**Setting - Project:~ - Project interpreter - + - 원하는패키지 선택 후 install**



먼저 내 블로그(eveydayidid.tistory.com)의 html 정보를 가져와보자

```python
from urllib.request import urlopen
from bs4 import BeautifulSoup
html = urlopen("https://everydayidid.tistory.com/52")
bs = BeautifulSoup(html, "html.parser")

print(bs)
```

![img](https://blog.kakaocdn.net/dn/sGSiJ/btqCPzsnHqp/5Gv6ozYQ0YLAKFxuSTJnA1/img.png)



HTML 전체로써는 데이터의 가치가 없기 때문에 가공해서 가져와야한다.

BeautifulSoup 객체에서 다음과 같이 HTML 태그를 구분지어 뽑아올 수 있다.

 

**<head의 title 속성값을 가져온다.>**

```python
print (bs.head.title)
```



**<웹 문서 중 메타데이터만 찾아서 content 속성값을 가져온다.>**

```python
for meta in bs.head.find_all('meta'):
   print(meta.get('content'))
```



메인 화면에서 표시된 제목들을 가져와봤다



```python
from urllib.request import urlopen
from bs4 import BeautifulSoup

URL = urlopen("https://everydayidid.tistory.com")
bs = BeautifulSoup(URL, 'html.parser')
data = ''
for text in bs.find_all("strong", {"class":"title_post"}) :
    data = data + str(text.text) + '\n'

print(data)
```





![img](https://blog.kakaocdn.net/dn/kL58J/btqCQ30Xqi3/eBMqkoxRc604aLYpr7aktK/img.png)everydayidid.tistory.com

![img](https://blog.kakaocdn.net/dn/bZWtg1/btqCO0RjcaI/1BNlJuDnW60DWmMEdJUkSk/img.png)출력 결과
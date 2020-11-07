---
title: "[Develop] org.apache.el.parser.ParseException"
date: "2020-03-28"
category: "Develop"
tags:
    - Develop
    - Error
cover: ./develop.png
---


**다음과 같은 에러가 발생했다.**



org.apache.el.parser.ParseException: Encountered " "}" "} "" at line 1, column 3. Was expecting one of: <INTEGER_LITERAL> ...

<FLOATING_POINT_LITERAL> ...

<STRING_LITERAL> ...

"true" ...

"false" ...

"null" ...

"(" ...

"!" ...

"not" ...

"empty" ...

"-" ...

<IDENTIFIER> ...



![img](https://blog.kakaocdn.net/dn/7g1oq/btqC0KT8Wqq/SMf23fQj7YwQDynz7gmF70/img.png)error 원인

Expression Language를 잘못 사용했을 때 발생하는 에러였다.
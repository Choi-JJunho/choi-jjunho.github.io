---
title: "[C++언어] 참조형 변수"
date: "2020-01-07"
category: "Language"
tags:
    - Language
    - C++
cover: ./language.png
---

## 참조형 변수 (Reference variable)

- 참조형 변수는 reference와 value가 같은 취급이다.
- 참조형변수는 선언과 동시에 초기화해야한다.
- 초기화 된 후에는 다른 변수를 참조하도록 변경할 수 없다.
- 참조형 변수는 l-value(수정할 수 있는 값)를 가리켜야한다.
- 참조형 변수는 NULL로 초기화 할 수 없다.

```c++
int &ref = value1;  // (O)
ref = value2;  // (X)
```

![img](https://blog.kakaocdn.net/dn/lCfog/btqAWc6aA4M/b1KsKR6Kkvq86wRzkgdUN0/img.png)

참조형 변수 p는 a와 동급 취급 ( ref == value)

## 참조형 vs 포인터

- 위에서 ref == value라고 말했다시피 참조형은 접근할 때 암시적으로 역참조되는 포인터와 같은 역할을 한다.
- 포인터와 비교해보았을 때 아래 코드에서 *ptr과 ref는 동일하게 평가된다. (ptr은 &ref와 동일하게 평가)
- 참조형은 선언과 동시에 유효한 객체로 초기화해야하고, 일단 초기화되면 변경할 수 없으므로 포인터보다 안전하다.

![img](https://blog.kakaocdn.net/dn/E05tB/btqAWx9ZCG5/RJrSIytB7NnUPZUkshJVX1/img.png)

참조형 변수가 포인터의 역참조와 동일한 성질을 띈다.
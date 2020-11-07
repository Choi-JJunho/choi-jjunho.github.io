---
title: "[C언어] 전처리기"
date: "2020-01-05"
category: "Language"
tags:
    - Language
    - C
cover: ./language.png
---

- 컴파일러가 컴파일 하기전 처리하는 부분이다.
- 표준 라이브러리는 <>로 감싼다.
  - \#include <~.h> → 검색 대상
- 비표준 라이브러리는 “”로 감싼다.
  - \#include “~.h” → 현재 폴더
  - 큰따옴표 내부에 절대경로 혹은 상대경로로 표시해 줄 수 있다.
  - 상대경로의 경우 시스템에 등록된 경로에서 찾는다.

![img](https://blog.kakaocdn.net/dn/b4C5rd/btqAWbZpYY1/Uu0YY6bebKzi4kkEiwxVN0/img.png)Visual Studio에서 상대경로 지정 항목

전처리문 종류

```c
#include
```

- 파일 처리를 위한 전처리문
- 미리 정의되어있는 파일을 Load한다. (매크로같이 치환 개념이 아님)

```c
#define
```

- 상수값을 지정하기 위한 예약어 (매크로 → 치환의 개념)
- 함수처럼 선언할 수 있지만 함수가 아니기때문에 함수처럼 오버헤드가 일어나지 않는다.

```c
#undef
```

- \#define으로 정의된 매크로를 무효화한다.

```c
#if / #endif
```

- 조건문과 동작 원리는 같다.

```c
#define somthing
#ifdef somthing
  #define something_else 10
#elif something1
  #define ssomething_else 20
#endif
```

- if define somthing~ 의 의미로 이 역시 조건문과 동작원리는 같다.
- \#elif 는 else if 와 유사
- ifndef는 ifdef와는 정반대로 정의되어있지 않으면 발생하는 전처리기다.

```
#error
```

- 소스라인에 직접 에러메시지를 출력한다.
- 전처리기가 #error문을 만나면 컴파일을 중단하고 에러메시지를 출력한다.
- ERROR : XXXXX.c ########: Error directive: 내용
  - XXXXX.c → 현재 컴파일 중인 파일명#error
  - \####### → 전처리기가 #error 문을 만난 시점에서의 행 번호(헤더 포함)

```c
#line
```

- 소스코드의 행번호를 지정한다.
- 컴파일러에 의해 미리 정의된 __LINE__과 함께 사용된다.

```c
#pragma once
```

- 해당 헤더 파일이 한번만 빌드되도록 한다.
- 2개 이상의 헤더파일을 include 할 때 한번만 되도록 한다.

```c
#pragma comment(lib, "*lib")
```

- 해당 라이브러리를 링크시켜주는 기능을한다.

```c
#pragma warning(disable:4716)
```

- 특정 경고메시지를 무사하는 명령어
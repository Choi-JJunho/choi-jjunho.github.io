---
title: "[Study] User와 Kernel"
date: "2020-01-01"
category: "Study"
tags:
    - Study
    - Computer Science
cover: ./study.jpg
---

![img](https://blog.kakaocdn.net/dn/d1AoVV/btqAQ2u6XhF/1xviq4oKBaJmMKZaKvL870/img.png)

User / Kernel / HW 관계도



- User(사용자)
  - User에서 Kernel로 접근할 수 있도록 돕는 인터페이스 → File
  - File의 작성(write) 규칙 : Protocol
  - 모든 File에 대해 읽고 쓰는 규칙을 외우고 다닐수는 없기 때문에 Read/Write에 대한 함수를 만든다.
  - ex) getchar(), putchar(), gets(), puts() 등
  - 함수는 Kernel에 I/O를 요구하는 함수다.
- Kernel(커널)
  - 운영체제의 큰 구성요소로서 하드웨어 제어 기능을 수행한다.
  - 프로그램의 입출력을 담당한다.
  - Shell(쉘) : 커널이 명령어를 수행할 수 있도록 명령어를 해석해서 커널에게 전달해준다(Interface의 범주)
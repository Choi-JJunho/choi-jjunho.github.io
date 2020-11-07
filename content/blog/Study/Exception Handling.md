---
title: "[Study] Exception Handling"
date: "2020-05-06"
category: "Study"
tags:
    - Study
    - Java
cover: ./study.jpg
---

프로젝트 분석 중 예외처리 문구를 보고 알아보고싶어 한번 정리하게 되었다.

 

예외처리 (Exception Handling)은 잘못된 데이터입력 / 연선 / 로직 수행 이나 하드웨어 혹은 네트워크의 오작동 등 여러 원인으로 인해 발생한다.

 

Java에서는 이러한 예외처리를 위한 클래스가 구현되어있다.

 



![img](https://blog.kakaocdn.net/dn/cDxgBx/btqDXuvsgfH/eBwGG6kEpnZ7aHf7r3tDq1/img.png)예외처리의 최상위 클래스인 Throwable



**Throwable** 

Throwable 클래스는 모든 예외 클래스들이 가지고 있는 공통된 메소드를 정의하고 있다.

 



![img](https://blog.kakaocdn.net/dn/ykJTR/btqDYv1IDkZ/wRIDP6IAgmlT0SFJYwcJE0/img.png)Exception클래스의 하위 클래스들



Exception은 크게 두가지 종류로 나뉜다.

 

**Checked Exception**

\- 예외처리가 필수이며, 처리하지 않으면 컴파일이 안됨.

\- JVM 외부와 통신(네트워크, 파일시스템 등)할 때 주로 쓴다.
\- 위 목록 중 RuntimeException을 제외한 다른 Exception들이 이에 해당한다.

ex) IOException

 

**Unchecked Exception**

\- 컴파일 때 체크되지 않고, 런타임에 발생하는 Exception을 말한다.

ex) NullPointerException

 



![img](https://blog.kakaocdn.net/dn/bj4R1t/btqDXFQ1GYo/4o5OiXPeSJf4KfUu9GWyOK/img.png)Error 클래스의 하위 클래스들



Error 는 애플리케이션이 동작하는 가상머신에 문제가 생겼을 때 발생하는 예외다.

애플리케이션을 구동시키기 위한 메모리가 부족한 경우가 이에 속한다.



Reference : https://sjh836.tistory.com/122

[https://edu.goorm.io/learn/lecture/41/%EB%B0%94%EB%A1%9C%EC%8B%A4%EC%8A%B5-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9-%EC%9E%90%EB%B0%94-java/lesson/39411/%EC%98%88%EC%99%B8%EC%9D%98-%EC%84%A0%EC%A1%B0-throwable](https://edu.goorm.io/learn/lecture/41/바로실습-생활코딩-자바-java/lesson/39411/예외의-선조-throwable)
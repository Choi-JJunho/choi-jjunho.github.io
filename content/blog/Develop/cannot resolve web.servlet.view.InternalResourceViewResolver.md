---
title: "[Develop] log4j 정리"
date: "2020-03-15"
category: "Develop"
tags:
    - Develop
    - Jsp
cover: ./develop.png
---


사용 툴 : IntelliJ

사용 Framework : Spring MVC



프로젝트에서 코드를 작성하다가 로컬 경로명이 잠깐 바뀐적이 있다.

그 뒤부터 자꾸 web.servlet.view.InternalResourceViewResolver 쪽이 cannot reslove class 하면서 나를 약올리기 시작했다.

 프로젝트 세팅에서 모듈도 확인해보고 경로도 변경해보고... 

![img](https://blog.kakaocdn.net/dn/chGj5X/btqCLdhaBqx/QBh2gbyVcphdHxQLFcEjz1/img.png)



이런 저런 삽질 끝에 pom.xml의 dependency에 spring-webmvc가 없는데 이걸 어떻게 사용하려고 하고있나.. 라는 생각이 들었다. 기존에는 어떤 경유에서 spring-webmvc가 자동으로 추가되어있었는지는 잘 모르겠으나 (아마 IntelliJ가 어딘가에서 자동으로 import 해줬겠지) 보다 정확하게 사용하기 위해서는 spring-webmvc를 사용해줘야 InternalResourceViewResolver를 사용할 수 있다는 것을 알 수 있었다.

```xml
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-webmvc</artifactId>
<version>${spring.version}</version>
</dependency>
```

이후 메챠쿠챠 프로젝트를 실행시켰다고한다.
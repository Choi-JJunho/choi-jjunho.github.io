---
title: "[Develop] log4j 정리"
date: "2020-02-12"
category: "Develop"
tags:
    - Develop
    - Spring
cover: ./develop.png
---

Log4j : Log for Java



프로그램 작성 도중 로그를 남기기 위해 사용되는 자바 기반 로깅 유틸리티로 디버그용 도구로 주로 사용된다.





**<구조>**

| **Logger(Category)** | **Logging 메시지를 Appender에 전달한다.**               |
| -------------------- | ------------------------------------------------------- |
| **Appender**         | **로그의 출력 위치를 결정한다. (파일 / 콘솔 / DB 등)**  |
| **Layout**           | **어떤 형식으로 출력할 것인지 출력 layout을 결정한다.** |



**<레벨>**

| **FATAL > ERROR > WARN > INFO > DEBUG > TRACE** |                                                              |
| ----------------------------------------------- | ------------------------------------------------------------ |
| **FATAL**                                       | **시스템적으로 심각한 문제가 발생해서 어플리케이션 작동이 불가능한 경우가 해당한다.** |
| **ERROR**                                       | **요청을 처리하는 중 문제가 발생한 상태**                    |
| **WARN**                                        | **처리 가능한 문제지만 향후 시스템 에러의 원인이 될 수 있는 경고성 메시지** |
| **INFO**                                        | **로그인, 상태 변경 등 정보성 메시지를 나타냄**              |
| **DEBUG**                                       | **개발 시 디버그 용도로 사용한 메시지를 나타냄**             |
| **TRACE**                                       | **DEBUG레벨이 광범위한 것을 해결하기 위해 상세한 상태를 나타냄.** |



**<주요 클래스>**

| **ConsoleAppender**          | **콘솔에 로그 메시지 출력**                                  |
| ---------------------------- | ------------------------------------------------------------ |
| **FileAppender**             | **파일에 로그 메시지 기록**                                  |
| **RollingFileAppender**      | **파일 크기가 일정 수준 이상이 되면 기존 파일을 백업파일로 바꾼 후 처음부터 기록** |
| **DailyRollingFileAppender** | **일정 기간 단위로 로그파일을 생성하고 기록**                |
| **JDBCAppender**             | **DB에 로그를 출력.****하위에 Driver, URL, User, Password, Sql과 같은 파라미터를 정의할 수 있다.** |
| **SMTPAppender**             | **로그 메시지를 이메일로 전송한다.**                         |
| **NTEventAppender**          | **윈도우 시스템 이벤트 로그로 메시지를 전송한다.**           |



**<옵션>**

| **%p** | **debug, info, warn, error, fatal 등 priority 출력**         |
| ------ | ------------------------------------------------------------ |
| **%m** | **로그내용 출력**                                            |
| **%d** | **로깅 이벤트가 발생한 시간을 출력**                         |
| **%t** | **로그 이벤트가 발생된 쓰레드의 이름 출력**                  |
| **%F** | **로깅이 발생한 프로그램 파일명 출력**                       |
| **%I** | **로깅이 발생한 caller의 정보 출력**                         |
| **%L** | **로깅이 발생한 caller의 라인수 출력**                       |
| **%M** | **로깅이 발생한 method 이름 출력**                           |
| **%**  | **'%' 출력**                                                 |
| **%n** | **플랫폼 종속적인 개행문자 출력**                            |
| **%c** | **카테고리 출력****ex) a.b.c 카테고리 => %c{2} => b.c 출력** |
| **%C** | **클래스명 출력****ex) org.apache.abc.Class => %C{2} => abc.Class 출력** |
| **%r** | **어플리케이션 시작 이후부터 로깅이 발생한 시점의 시간 출력** |



**<web.xml 설정>**



**log4j.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE log4j:configuration SYSTEM "http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/xml/doc-files/log4j.dtd">
<log4j:configuration xmlns:log4j="http://jakarta.apache.org/log4j/">
 
    <!-- 콘솔 로그 -->
    <appender name="infoConsole" class="org.apache.log4j.ConsoleAppender">
        <layout class="org.apache.log4j.PatternLayout">
            <param name="ConversionPattern" value="[%5p] %d{hh\:mm s} (%F\:%L) %c{1}.%M \: %m%n" />
        </layout>  
    </appender>
    
    <!-- root 설정 -->
    <root>
        <level value="INFO" />
        <appender-ref ref="infoConsole" />
    </root>
     
</log4j:configuration>


출처: https://cofs.tistory.com/354 [CofS]
```

**web.xml**

```xml
    <context-param>
        <param-name>log4jConfigLocation</param-name>
        <param-value>
            classpath:project/config/log4j.xml
        </param-value>
    </context-param>
 
    <!-- Log4j -->
    <listener>
        <listener-class>
            org.springframework.web.util.Log4jConfigListener
        </listener-class>
    </listener>


출처: https://cofs.tistory.com/354 [CofS]
```



***Reference**

https://gyrfalcon.tistory.com/entry/Log4j

https://cofs.tistory.com/354
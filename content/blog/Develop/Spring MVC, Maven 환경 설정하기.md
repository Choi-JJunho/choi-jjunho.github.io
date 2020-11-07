---
title: "[Develop] Spring MVC, Maven 환경 설정하기"
date: "2020-02-11"
category: "Develop"
tags:
    - Develop
    - Spring
cover: ./develop.png
---


본 포스팅은 [WHITEPAEK](https://whitepaek.tistory.com/) 님의 글을 참고하여 작성했습니다.



Spring 입문자로써 IntelliJ환경에 Spring환경을 설정하고 싶어 이곳 저곳 찾아보게 되었고 whitepaek님의 포스팅을 참고하여 실습을 진행할 수 있게 되었다.



개인적으로 복습하면서 한번 더 정리하고자 포스팅을 진행하게 되었다.



Spring은 3.2.18버전으로 설정하고자한다.



OS : Window 10

Database : Mysql 8.0.18

Server : Tomcat 7.0.99ver

------

**<Maven 프로젝트 생성>**



**1. Create New Project - Maven 프로젝트 클릭 - JDK 버전 설정 - Create from archetype 체크 X - Next**

![img](https://blog.kakaocdn.net/dn/bnazc8/btqBUAkbYdT/kJcxLweQzO8nHmWbQMRVfK/img.png)[그림 1.1] Maven 프로젝트 생성

------

**2. GroupId, ArtifactId 설정 - Finish**



**GroupId :** 프로젝트를 식별해주는 고유 ID (프로젝트에서 컨트롤하는 도메인 이름과 동일하게 입력한다.)

**ArtifactId :** 버전 정보를 생략한 이름 (프로젝트 이름과 동일하게 입력한다.)



![img](https://blog.kakaocdn.net/dn/bjGgnM/btqBUzS5lXy/itP2dea326aEbzwvQqfGC0/img.png)[그림 1.2] GroupId, ArtifactId 설정

------

**3. Enable Auto-Import 클릭**

![img](https://blog.kakaocdn.net/dn/dohHJE/btqBS5kDYh0/3dvdLrAgWHUs1czXgRe841/img.png)[그림 1.3] Maven 프로젝트

------

***\*<Spring Framework 설정>\****



**1. Root 디렉토리 SpringMVCMavenProject에서 마우스 우클릭 - Add Framework Supprot... 클릭**

![img](https://blog.kakaocdn.net/dn/GUiE2/btqBVfzQKLZ/iv3dTr438hQ3tVJpbQ5m50/img.png)[그림 2.1] 스프링 프레임워크 설정

------

**2. Spring MVC 클릭 - Configure.. 클릭**

![img](https://blog.kakaocdn.net/dn/bvyYpb/btqBS6jz2UR/e7hmLlndhjzMBFiSoukKQ1/img.png)[그림 2.2.1] 버전 설정

------

**3.1 3.2.18버전 선택 - OK**

![img](https://blog.kakaocdn.net/dn/bFP98M/btqBRvqFQsB/QX7kIAHZAH6BGm1nDYHkhk/img.png)[그림 2.2.2] 3.xx버전으로 설정

**3.2 Spring탭 - Configure... - 3.2.18버전 선택 - OK**

![img](https://blog.kakaocdn.net/dn/rUJt3/btqBPYfVzt9/7blEjxTkqA1Sns4p15VKV0/img.png)[그림 2.2.3] 버전 설정

------

**4. Web 디렉터리가 추가되어있는 모습을 볼 수 있다.**

![img](https://blog.kakaocdn.net/dn/wUeOs/btqBVgetrO6/q9F7HDsmmhNkKrcbICQ051/img.png)[그림 2.3] web 디렉터리 추가됨

------

**<Tomcat 설정>**



**1. Add Configuration... 클릭**

![img](https://blog.kakaocdn.net/dn/bxihf8/btqBRvKVmI9/0RFNdxLtbv8F0guHJHFPaK/img.png)[그림 3.1] AddConfiguration 클릭

------

**2. Templates - Tomcat Server - Local 탭에서 Application server에 Tomcat을 추가해준다 - 우측 상단에 Create configuration 클릭**

![img](https://blog.kakaocdn.net/dn/bx3pdT/btqBQn7McF9/nbKW9bIhhGFEyhLxBWs3Jk/img.png)[그림 3.2] 톰캣 설정

------

**3. 우측 하단 Fix 버튼 클릭**

![img](https://blog.kakaocdn.net/dn/xZcRk/btqBUALhRNo/3Lav63KVq3iq0uafCWUEbK/img.png)[그림 3.3] 톰캣 Fix

------

**4. Application context 경로를 / 로 설정**

![img](https://blog.kakaocdn.net/dn/dK9C1x/btqBS6w6WNZ/ADUVUU8Ik4fL4RukSR9Ui1/img.png)[그림 3.4] Application context 설정

------

**5. 톰캣 설정 완료**

![img](https://blog.kakaocdn.net/dn/RP66s/btqBVfs9rok/EHXYCN96k7H1uqUaYJcKWK/img.png)[그림 3.5] 톰캣 설정 완료

------

***\*<Lombok Plugin 설치>\****



***\*1. File - Settings - PluginsLombok Plugin 설치\****

![img](https://blog.kakaocdn.net/dn/dOiMpE/btqBVeOvRrg/6iw7K2zHoVhGWZHFy9Pxtk/img.png)[그림 4.1.1] File - Settings

**Install후 IDE를 껐다 켠다.**

![img](https://blog.kakaocdn.net/dn/1uOte/btqBTL0AYns/YLuxsUKIWEAiDekHVRbaK1/img.png)[그림 4.1.2] Plugin - Lombok

------

**<Database 설정>**



**1. Mysql DB 설정하기**

https://dev.mysql.com/downloads/connector/j/

**위 링크에서 MySQL Connector/J를 받는다.**

![img](https://blog.kakaocdn.net/dn/ZXXxB/btqBSOcqp4J/ElWtLRCoZ7Z3XRL41jK2J1/img.png)[그림 5.1.1] MySQL Community Downloads

![img](https://blog.kakaocdn.net/dn/2EBsj/btqBUUCMgpW/8kcvDVqJkUinoPY24oGAn1/img.png)5[그림 5.1.2] MySQL Community Downloads

------

**2. No thanks, just start my download로 다운로드를 계속한다.**

![img](https://blog.kakaocdn.net/dn/dqQwPe/btqBVeOuVHM/hMygPYm10DJhjD94qpIlzk/img.png)[그림 5.2] No thanks..

------

**3. 폴더 내의 mysql-connector-java-8.xx.jar 파일의 위치를 잘 알아두자..!**

ex) C:\Users\Downloads\mysql-connector-java-8.0.19\

![img](https://blog.kakaocdn.net/dn/7zNq1/btqBUALh4N8/puNvQEAzSNTkCGEqWZtyfK/img.png)[그림 5.3] mysql-connector-java-8.xx 파일

------

**4. Project Structure창으로 이동**

![img](https://blog.kakaocdn.net/dn/H4Zor/btqBTMeahsr/u79Q7QK5wPss0p4vAJsf00/img.png)[그림 5.4] Project Structure

------

**5. Libraries탭 - +버튼 - Java 클릭 - mysql-connector-java-8.xx.jar 선택 - OK - OK - OK**

![img](https://blog.kakaocdn.net/dn/c1ryKV/btqBVeHLLKd/QIKlFK7qQjBEP2Ilwy2a71/img.png)[그림 5.5.1] mysql-connector~.jar 추가

![img](https://blog.kakaocdn.net/dn/cBokZc/btqBUzlkdJG/kl89ank8LybdlxISOX0jw1/img.png)[그림 5.5.2] mysql-connector~.jar 추가

------

**<pom.xml 설정>**



**1. pom.xml 설정**

**프로젝트 설정, 라이브러리 의존성 설정, 빌드 설정을 할 수 있다.**

![img](https://blog.kakaocdn.net/dn/m4Kff/btqBQ2oFLf9/8ZBwyAcqjKk1PTbE6y9nZ0/img.png)[그림 6.1] pom.xml 설정

------

**2. <project> ... </project> 태그 사이에 코드를 입력한다.**

```
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>${org.springframework-version}</version>
            <exclusions>
                <exclusion>
                    <groupId>commons-logging</groupId>
                    <artifactId>commons-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>${org.springframework-version}</version>
        </dependency>

        <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjrt</artifactId>
            <version>${org.aspectj-version}</version>
        </dependency>

        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-api</artifactId>
            <version>${org.slf4j-version}</version>
        </dependency>
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>jcl-over-slf4j</artifactId>
            <version>${org.slf4j-version}</version>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-log4j12</artifactId>
            <version>${org.slf4j-version}</version>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
            <version>1.2.17</version>
            <exclusions>
                <exclusion>
                    <groupId>javax.mail</groupId>
                    <artifactId>mail</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>javax.jms</groupId>
                    <artifactId>jms</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>com.sun.jdmk</groupId>
                    <artifactId>jmxtools</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>com.sun.jmx</groupId>
                    <artifactId>jmxri</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.1</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>

        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-test</artifactId>
            <version>${org.springframework-version}</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>2.5.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                    <compilerArgument>-Xlint:all</compilerArgument>
                    <showWarnings>true</showWarnings>
                    <showDeprecation>true</showDeprecation>
                </configuration>
            </plugin>
        </plugins>
    </build>
```

![img](https://blog.kakaocdn.net/dn/kZ1Pe/btqBS5ruY8Y/D8d9GGh9TJUKCi5Mjywzfk/img.png)[그림 6.2] pom.xml 라이브러리 의존성 설정

------

**3. Project Structure - Artifacts탭 - Available Elements의 라이브러리 전부 더블클릭 - OK**

![img](https://blog.kakaocdn.net/dn/3Byli/btqBS5EZ6Tx/rBbne9OX6NbbjffkoH1ylK/img.png)[그림 6.3.1] 추가한 라이브러리 더블클릭



![img](https://blog.kakaocdn.net/dn/bmiJ6W/btqBSPCnNKu/fn9hxaLNS9b3nsG0dotHpK/img.png)[그림 6.3.2] 추가한 라이브러리 더블클릭

------

**<log4j.xml 파일 설정>**



**1. log4j.xml 파일 생성 및 설정**

**src/main/resources/log4j.xml 파일을 만든다.**

![img](https://blog.kakaocdn.net/dn/uh5Y5/btqBSPPVnK7/c28zg4vjQaHq2VBmIfXQk1/img.png)[그림 7.1] 로그파일 설정

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE log4j:configuration PUBLIC "-//APACHE//DTD LOG4J 1.2//EN" "log4j.dtd">
<log4j:configuration xmlns:log4j="http://jakarta.apache.org/log4j/">

    <appender name="console" class="org.apache.log4j.ConsoleAppender">
        <param name="Target" value="System.out" />
        <layout class="org.apache.log4j.PatternLayout">
            <param name="ConversionPattern" value="%-5p: %c - %m%n" />
        </layout>
    </appender>

    <logger name="org.springframework.core">
        <level value="info" />
    </logger>

    <logger name="org.springframework.beans">
        <level value="info" />
    </logger>

    <logger name="org.springframework.context">
        <level value="info" />
    </logger>

    <logger name="org.springframework.web">
        <level value="info" />
    </logger>

    <!-- Root Logger -->
    <root>
        <priority value="info" />
        <appender-ref ref="console" />
    </root>

</log4j:configuration>
```

------

**<Database 연동 테스트>**



**1. Mysql 데이터베이스가 정상적으로 연결되었는지 확인하는 테스트 코드를 작성한다.**

**src/test/java/JDBCTest.class 를 생성한다.**

![img](https://blog.kakaocdn.net/dn/DsZtv/btqBS6KHl6a/hyrK2yVmjXAcKIJSpyw7k1/img.png)[그림 8.1] JDBCTest.class

**아래 코드에서 line 22의 url 부분에서 dbname, root, password 부분은 자신의 환경에 맞게 적어주면 된다.**

```
import lombok.extern.log4j.Log4j;
import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;

import static org.junit.Assert.fail;

@Log4j
public class JDBCTest {
    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void connection() {
        try(Connection conn = DriverManager.getConnection(
                "jdbc:mysql://127.0.0.1:3306/dbname?serverTimezone=UTC", "root", "password")) {
            log.info(conn);
        } catch (Exception e) {
            fail(e.getMessage());
        }
    }
}
```

------

**2. Mysql을 실행한다.**

![img](https://blog.kakaocdn.net/dn/cJVl6t/btqBSPI8LJn/JCmc9K5zkBiygUhwCkI8Vk/img.png)[그림 8.2] Mysql 실행하기

------

**3. JDBCTest를 Run한다.**

![img](https://blog.kakaocdn.net/dn/nqPkm/btqBUzS7CGF/4I0CKXSm3iQGKKbITYu2X1/img.png)[그림 8.3] Run

------

**4. 다음과 같이 Log가 뜨면 성공!**

![img](https://blog.kakaocdn.net/dn/bETM9L/btqBTLlX14H/qTYvrkcYQUCSpSJVUjLF2k/img.png)[그림 8.4] 로그 확인

------

**<Spring MVC - Controller 테스트>**



**1. web/WEB-INF/web.xml 수정**

**<url-pattern>\*.form</url-pattern>을 \**<url-pattern>/</url-pattern>로 고친다.\****

```
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/applicationContext.xml</param-value>
    </context-param>
    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
</web-app>
```

------

**2. src/main/java/com.mrjun.controller 패키지 생성 후 HelloController.class 생성**

![img](https://blog.kakaocdn.net/dn/cMQPUg/btqBUzZVTta/6jgeq0hwbKuBm0IlkpPupK/img.png)[그림 9.1] HelloController

```
package com.mrjun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/home/*")
public class HelloController {
    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody String homeTest() {
        return "Spring + Maven";
    }
}
```

------

**3. dispatcher-servlet.xml 파일에 아래 코드를 추가한다.**

```
    <context:component-scan base-package="com.mrjun.controller" />
```

![img](https://blog.kakaocdn.net/dn/bUTKLk/btqBQ2oG4gA/Dg8nkvvGRRNJHrkcgggXIK/img.png)[그림 9.2.1] dispatcher-servlet.xml

**위 처럼 빨간색 글자가 되면 "context"를 클릭하고 ALT + ENTER로 빠른 import를 해준다.**

![img](https://blog.kakaocdn.net/dn/brl4c5/btqBS5SxHqj/pZkPcQslgB9jEHSnzZpkik/img.png)[그림 9.2.2] dispatcher-servlet.xml - import

------

**4. 오른쪽 위에서 톰캣으로 실행 설정을 해준 후 프로젝트를 실행한다.**

![img](https://blog.kakaocdn.net/dn/brihPv/btqBPXajArJ/ikmA7aMy4qzx2tf87l38dk/img.png)[그림 9.3] set Tomcat

------

**5. 브라우저에 localhost:8080을 입력하면 web/index.jsp파일이 출력된다.**

![img](https://blog.kakaocdn.net/dn/cJt9NG/btqBRvD99Di/DfEAm6NTupu1h1Gl3PJ651/img.png)[그림 9.4.1] localhost:8080

**추가로 localhost:8080/home/test를 입력하면 다음과 같이 HelloController에 해당하는 부분이 나온다!**

![img](https://blog.kakaocdn.net/dn/Wrzs9/btqBSN5GA65/08GCS9dkQBKQo9w55EWYpk/img.png)[그림 9.4.2] localhost:8080/home/test





***Reference**

https://whitepaek.tistory.com/41

[
[IntelliJ\] Spring MVC, Maven 프로젝트 설정 방법시작하기에 앞서.. 해당 포스트에서는 스프링에 대한 이론적인 설명은 작성하지 않았습니다. 이론적인 부분은 훌륭한 참고 서적이 많기 때문에 해당 서적을 구입하여 반복적으로 학습하는 것을 추천해 드립니다...whitepaek.tistory.com](https://whitepaek.tistory.com/41)
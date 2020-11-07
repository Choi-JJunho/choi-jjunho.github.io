---
title: "[Chatbot] 4. spring 프로젝트 서버로 올리기"
date: "2020-04-05"
category: "Project"
tags:
    - project
    - kakao
cover: ./kakao.jpg
---


Spring MVC로 작성한 프로젝트를 서버에 올려보겠다.

------

우선 우분투(EC2)에 jdk와 tomcatdmf 설치한다.



**[jdk 설치]**

**sudo apt-get install openjdk-8-jre**

**sudo apt-get install openjdk-8-jdk**



자바가 설치되었는지 확인한다.

**javac -version**

**java -version**



환경 변수 설정을 위해 **sudo vi /etc/profile**로

**export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64**

**export PATH=$JAVA_HOME/bin:$PATH**

**export CLASS_PATH=$JAVA_HOME/lib:$CLASS_PATH**

를 추가해준다.



이후 **source /etc/profile**로 



자세한 내용은

https://all-record.tistory.com/181?category=733055를 참고



**[tomcat 설치]**

tomcat8을 설치한다.

**sudo apt-get install tomcat8**



톰캣 설치 이후 방화벽에서 톰캣의 포트를 외부에서 접속할 수 있도록 변경해야한다.

**sudo ufw allow 8080/tcp**



그 후 톰캣을 실행해본다.

**sudo service tomcat8 start**



ip에 EC2 인스턴스의 퍼블릭도메인:8080을 적어서 저 화면이 나오면 성공이다.

![img](https://blog.kakaocdn.net/dn/dktjEC/btqDbEs2MUS/lbkdarog2c52kp2JkGcNB0/img.png)tomcat works

------

Spring 프로젝트가 tomcat에서 구동하기 위해서는 .war확장자 파일이 있으면 된다.

intelliJ를 기준으로 **Project Structure -> Artifacts -> + -> Web Application Archive -> For 'projectname':war exploded**



![img](https://blog.kakaocdn.net/dn/bAXab5/btqDeUgK6Is/gEBbiCG1E0gpjGlsyNCAkk/img.png)Project Structure

Build Artifacts... 탭에 들어가서 projectname:war > Build를 누른다.

![img](https://blog.kakaocdn.net/dn/dzHVBo/btqDcyso3TC/KQAxIqXAnUkjyE801OWCbk/img.png)Build - Build Artifacts

![img](https://blog.kakaocdn.net/dn/efRkwP/btqDcyTul0d/EyMJMZEKMg2E7FkkAR0HpK/img.png)Build

빌드가 완료되면 다음 경로에 존재하게 된다.

${ProjectPath}/out/artifacts/daily_menu_war/.daily_menu_war.war

------

해당 파일을 Filezilla를 이용하여 local에서 server로 옮기도록 한다.

옮기는 경로는 ubuntu의 /var/lib/tomcat8/webapps 경로 아래에 .war파일을 옮긴다.

![img](https://blog.kakaocdn.net/dn/EjeZD/btqDc36O5r6/HAP5Dd0m2EhSt0s5BgOmMk/img.png)접근권한이 없을 때

만약 위처럼 파일전송에 실패할 경우 webapps폴더의 접근권한을 변경해줘야한다.

기존에 /var/lib/tomcat8/webapps의 접근권한이 rwxrwxr-x로 되어있으므로 외부에서 쓰기권한이 없다.

**chmod /var/lib/tomcat8/webapps 777**

로 변경해주고 복사할 수 있다.





tomcat을 재시작하고 확인하니 정상적으로 동작하는 것을 볼 수 있었다.

**sudo service tomcat8 restart**

![img](https://blog.kakaocdn.net/dn/cT25FH/btqDeJmeKLj/bKtUV9SnuKh8i9ZE969Dc0/img.png)@RequestMapping (value = "getmenu")
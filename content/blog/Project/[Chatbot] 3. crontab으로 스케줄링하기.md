---
title: "[Chatbot] 3. crontab으로 스케줄링하기"
date: "2020-04-04"
category: "Project"
tags:
    - project
    - kakao
cover: ./kakao.jpg
---


cron은 UNIX 계열에서 사용되는 시간기반 Job 스케줄러다.

작업을 고정된 시간, 날짜, 간격에 주기적으로 실행할 수 있도록 스케줄링하기 위해 cron을 사용한다.



- \* : 모든 값을 의미한다.
- ? : 특정한 값이 없음을 의미한다.
- \- : 범위를 표현한다. (월요일 ~ 수요일은 MON-WED로 표현)
- , : 특별한 값일 때만 동작 (월,수,금은 MON,WED,FRI로 표현)
- / : 시작시간 / 단위를 의미한다. (0분부터 매 5분은 0/5로 표현)
- L : 일에서 사용하면 마지막 일, 요일에서는 마지막 요일(토요일)
- W : 가장 가까운 평일을 의미한다. (15W는 15일에서 가장 가까운 평일 (월 ~ 금)을 찾는다.)
- \# : 몇째주의 무슨 요일을 표현한다. (예) 3#2 : 2번째주 수요일

crontab -e로 crontab 설정으로 들어간다.

![img](https://blog.kakaocdn.net/dn/o91mO/btqDcdveoeA/XhQH2mMatEY1KgE5QWKTK1/img.png)crontab -e

0,1,2 0 * * * python3 /usr/local/bin/webcrawling.py를 통해

매일 오전 0시 0,1,2분에 /usr/local/bin/webcrawling.py가 실행되도록 설정했다.



/home/log/crawling.log에 실행 로그가 남는다.




출처: https://zamezzz.tistory.com/197 [배워가는블로거]
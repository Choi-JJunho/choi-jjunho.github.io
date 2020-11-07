---
title: "[Chatbot] 2. AWS 시작하기"
date: "2020-04-03"
category: "Project"
tags:
    - project
    - kakao
cover: ./kakao.jpg
---


막상 크롤링하는 코드는 짰지만 Python으로 로컬로 일일히 눌러주면서 설정할수는 없다.

이런 부분은 서버에서 자동으로 처리해주면 좋을 것이다.



AWS를 한번도 사용해보지 않았고, 맨땅에 헤딩해가면서 쓴 글이라서 정확하고 세부적인 정보는 모르지만

일단 경험해본 것을 정리해두고자 한다.



**1. AWS 가입**

**2. AWS 인스턴스 생성**

**3. AWS MySQL 생성**





#### **1. AWS 가입**



우선 AWS에 가입을 해보고자 한다.

![img](https://blog.kakaocdn.net/dn/5UGzu/btqC9yGbwJZ/rJzM2YSTKCsUJ8A1ty30C1/img.png)https://aws.amazon.com/ko/

오른쪽 위에 있는 계정 생성을 누르면 아래와 같이 정보를 입력하는 란이 나온다.

![img](https://blog.kakaocdn.net/dn/YQcBJ/btqC9N32DrX/3cekBkGEplQRDZv190FX3K/img.png)계정생성



![img](https://blog.kakaocdn.net/dn/bsyNVL/btqC8IWHXhT/ADoQXwhT0aZrjB5kbekt41/img.png)연락처 정보

연락처 정보까지 다 적으면 카드를 등록하게 된다.

프리티어 한도를 초과하게 되면 추가결제가 되는 형식이라고 한다.

![img](https://blog.kakaocdn.net/dn/SvSGd/btqC78nPLtT/2BDBrJYu4g7U0E7hGKn2oK/img.png)결제정보 입력

이것까지 적으면 지원플랜을 선택하게 되고 기본플랜으로 등록했다.

![img](https://blog.kakaocdn.net/dn/tukaF/btqDblMzV7u/V2kK2NEW5kv6koeidhnROK/img.png)지원 플랜

하지만 결제정보를 등록해놨기에 잘못하면 소중한 내 돈이 순식간에 날아갈 수 있다...!

그래서 아래 블로그를 참고하여 2차 비밀번호(OTP 설정)를 설정했다.

https://goddaehee.tistory.com/175



------

#### **2. AWS EC2 인스턴스 생성**



가상 컴퓨터를 임대 받아 그 위에 자신만의 컴퓨터 애플리케이션들을 실행할 수 있게 해주는 EC2를 사용해보고자 한다.

아래 서비스 탭에서 EC2를 눌러서 들어간다.

![img](https://blog.kakaocdn.net/dn/pjQSG/btqDbESEq3g/B1EZQD2PiNRFDifTFGmkyK/img.png)

인스턴스 시작 버튼을 누른다.

![img](https://blog.kakaocdn.net/dn/ZRgCE/btqC9MKTvNt/W5FUIEnkb7eHzDkEFYa55K/img.png)인스턴스 시작

AMI를 선택하는 창이 나오는데 Ubuntu Server 16.04버전을 사용하기로 했다.

![img](https://blog.kakaocdn.net/dn/7E1x9/btqC9OhEkyZ/EDWv9ZDkiycUYWByK06uJk/img.png)AMI 선택

중간에 캡쳐하는걸 까먹어서.. 바로 결과화면이다.

아래와 같이 인스턴스가 생성된 모습을 볼 수 있다.

![img](https://blog.kakaocdn.net/dn/diaXus/btqC8G5C1Yg/IKAJ3HQGJrMY0kmfpwGF2K/img.png)인스턴스 생성 완료



 아래를 보면 다음과 같이 IPv4 퍼블릭 IP를 확인할 수 있다.

![img](https://blog.kakaocdn.net/dn/v3hp4/btqDaWfeYUI/1rcxUcpqXe0PbUDtKAnfzK/img.png)IPv4 Public IP

terminal에 다음과 같이 입력하여 ssh로 접근할 수 있다.

ssh -i [Key pair filename] ubuntu@[Public DNS]

![img](https://blog.kakaocdn.net/dn/ciivFq/btqDaiQgj34/IfPRZrDkLmCvbaSPDYyUN1/img.png)ssh로 접속한 모습



**자세한 내용은 아래 블로그를 참고했다.**

https://steemit.com/kr/@sifnax/python-6-aws

\* 추가로 인스턴스를 만들면서 생긴 키 페어 파일(.pem파일)은 Mac을 기준으로 ~/.ssh 경로에 두는것으로 권장하고 있다.



------

#### **3. AWS MySQL 사용하기**



AWS에서 DB를 관리한다면 내 컴퓨터가 꺼져있어도 동작할 것이다.

이를 위해 AWS에 있는 MySQL을 만들었다.

![img](https://blog.kakaocdn.net/dn/yLUwH/btqDbk1cRiE/G9B8WRzBbhnRPJ0sebfKZ1/img.png)Amazon RDS 관리 탭

테이블 구조는 다음과 같이 만들었다.

![img](https://blog.kakaocdn.net/dn/dEtqOC/btqDbEkPEOW/fqk65l2dLbV4NQNBBTMEk1/img.png)breakfast, lunch. dinner table 구조

AWS MySQL DB를 생성하는 자세한 과정은 아래 블로그를 참고했다.

https://ndb796.tistory.com/226



------

#### **[기타]**



**- ssh로 연결하고 mysql설치 후 기존에 작성해두었던 python 코드를 붙여넣고 동작시켰더니 정상적으로 동작하는 모습을 볼 수 있었다.**

![img](https://blog.kakaocdn.net/dn/bAGn1C/btqDbmkqvkV/QUKyXCwZ6Bf0math6U62xk/img.png)webcrawling.py



**- 중간에 한글이 깨져서 저장됐었는데 MySQL은 기본으로 서버 character set이 latin1으로 설정 되어 있어서 발생한 문제였다.**

![img](https://blog.kakaocdn.net/dn/bcncib/btqDaipgdcx/jDcxk1m8eujepmqdDAVfJK/img.png)DB

![img](https://blog.kakaocdn.net/dn/7AGSm/btqDbEZqjDt/sLt6LaDC4PznTZKUDSm0K1/img.png)table

![img](https://blog.kakaocdn.net/dn/WNDLB/btqC9yeZ4NX/913VBv21HpEQ0gonMGJRA1/img.png)columns

DB를 생성하기 전 에서 설명했던 파라미터를 편집하지 않아서 전부 latin1로 적용되었다.

이 부분은 파라미터를 재설정하고 DB를 다시 만들면 되지만 다시 만들기가 싫어서 [해당 블로그](https://velog.io/@pizzu/Mysql-db-character-set-확인-및-수정)를 참고하여 수정하였다.



![img](https://blog.kakaocdn.net/dn/brvXwW/btqC9NXhoLg/dKoezRm4TRkap3bli9Dkjk/img.png)webcrawling.py 실행 후 DB 모습

DB에 저장되는 것 까지 잘 수행되는 것을 확인했다.



------

정말 아무것도 모르는 상태로 시작하려니 시작점을 잡는데 많은 어려움이 있었다.

AWS의 종류도 상당히 많고, AWS 람다는 또 뭔지.. AWS에 대한 방향을 잡는데만 거의 모든 시간을 부었지만 그럼에도 AWS를 이해하지 못한것 같다. 그래도 평소에는 이름만 들어봤던 AWS랑 조금은 친해질 수 있었던 것 같다.



다음은 Crontab을 이용하여 스케줄링하는 것을 해봐야겠다.
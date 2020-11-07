---
title: "[Chatbot] 5. 카카오 오픈빌더로 배포"
date: "2020-04-06"
category: "Project"
tags:
    - project
    - kakao
cover: ./kakao.jpg
---

카카오 오픈빌더를 통해 배포를 해보겠다.

------

## [시나리오 작성]

시나리오에 대해 간단히 알아보면

![img](https://blog.kakaocdn.net/dn/drm6NZ/btqDceViCnr/aaNXVqI4nKKSBvtkfD47p1/img.png)

시나리오 블록

- 웰컴 : 봇을 처음 실행할 때 사용자가 받게되는 응답을 설정하는 곳
- 폴백 : 사용자의 입력이 매칭되지 않을 때 사용자가 받을 응답을 설정하는 곳
- 탈출 : 사용자가 되묻는 상황에서 빠져나가는 것을 설정하는 곳

으로 나뉘며 사용자가 블록을 만들 수도 있다.



시나리오는 다음과 같이 구성한다.

![img](https://blog.kakaocdn.net/dn/cX9v31/btqDaUJW5oJ/EThQWy8xkN0IDyNJcdCTik/img.png)

Mealtime 시나리오 블록

우선 식단을 호출할 때 아침 / 점심 / 저녁을 구분하기 위한 엔티티를 만들었다.

> **엔티티**
> 봇이 이해할 수 있는 용어를 체계적으로 정리한 데이터 사전
> 엔티티가 정의되어 있다면, 봇은 사용자 발화로부터 사용자의 의도에 맞는 동작 수행을 위한 주요 데이터를 추출할 수 있게 된다.

![img](https://blog.kakaocdn.net/dn/HrWsl/btqDc4YVefP/Xy8YOi6453E9Vnv6dPuU5K/img.png)

엔티티 설정

이렇게 되면 [dinner / 저녁밥 / 디너 / 저녁] → ‘저녁' 으로 인식되게 되며 나머지 점심, 아침도 마찬가지다.



이후 파라미터를 생성했다.



![img](https://blog.kakaocdn.net/dn/v8LlK/btqDbFsd4a8/4CoJxa2GUPxbiPN4C9QlOk/img.png)

파라미터 생성

파라미터 명 부분은 알아보기 쉬운 이름으로, 엔티티쪽은 적용시키고자 하는 엔티티를 설정해준다.

(값 부분에는 엔티티값($) / 특정 값(#) / 고정된 값을 적용시킬 수 있는데 자세한건 [카카오 오픈빌더 도움말](https://i.kakao.com/docs/key-concepts-parameters#값)에서 확인)

------

#### **[스킬작성]**

우선 AWS인스턴스의 퍼블릭 DNS(IPv4)를 복사한다.

![img](https://blog.kakaocdn.net/dn/DWfIp/btqDcxNPa7L/2462Wg7tzT3513MDvPRXT1/img.png)

인스턴스 정보



그 후 스킬URL에 넣어준다.

이때 ${DNS}/projectname/mapping_url 형식처럼 실제 spring 프로젝트가 request를 받고 response를 리턴하는 경로로 작성해야한다.

폴백블록과 임의로 생성한 Mealtime 블록과 연결한다.

![img](https://blog.kakaocdn.net/dn/baLMno/btqDdGXPncq/LIIk7iw3PPmNcoZkbic4x1/img.png)

스킬

![img](https://blog.kakaocdn.net/dn/bK5zDy/btqDc4klQq8/USoQCh4sMARx5GgKm0DEgK/img.png)

스킬 등록 완료



위처럼 스킬을 등록했다면 시나리오에 다시 가서 봇 응답을 스킬데이터로 설정해준다.

![img](https://blog.kakaocdn.net/dn/YVY5p/btqDbEGF3Kr/ub2ibyKhUkAxRL2HK6Jdr0/img.png)

봇 응답

정상적으로 출력되는 모습을 볼 수 있다.

![img](https://blog.kakaocdn.net/dn/bDo0K3/btqDeUA5BxX/TwFrB4REdHxCK25AuIOAak/img.png)

봇 테스트

------

## [배포]

배포 탭에서 배포를 완료했다.

![img](https://blog.kakaocdn.net/dn/DkBTX/btqDbkPeAmG/QEX59s6bUn39WT9eVpHxwk/img.png)

배포

------

5일간 약 40시간에 거쳐 식단기능을 완성했다

초반이라 삽질을 많이 한 탓에 시간이 많이걸린것 같다.

그래도 어느정도 감을 잡아갈 수 있었던 것 같다.



다음은 버스 기능을 추가해보고자 한다.
---
title: "[Develop] lombok 정리"
date: "2020-02-12"
category: "Develop"
tags:
    - Develop
    - Spring
cover: ./develop.png
---


Java로 간단한 클래스 하나를 만들 때 Getter, Setter 등의 함수들을 생성해야하는 귀찮음이 있다.

```java
public class SampleClass{
    private T a;
    public T getterA () {
     return a;
    } 

    public void setterA(T a) {
     this.a = a;
    }
}
```

Lombok은 Java에서 제공하는 어노테이션 기반 라이브러리로 @Getter, @Setter 등이 있다.

멤버변수에 값을 설정하는 생성자 등을 자동으로 생성해주기도 한다.



**<Lombok을 사용하지 않은 코드>**

```java
public class Studnet {
    private String name;
    private int grade;
    private int age;
    
    public StudentVO(String name) {
    	this.name = name; 
    }
    public String getName() { 
    	return name; 
    }
    public int getGrade() { 
    	return grade; 
    }
    public int getAge() { 
    	return age; 
    }
    public void setGrade(int grade) { 
    	this.grade = grade; 
    }
    public void setAge(int age) { 
    	this.class = age; 
    }
    
    @Override public String toString() { 
    	return "Student's name = " + name + ", grade = " + grade + ", age = " + age; 
    } 
}
```



**<Lombok을 사용한 코드>**

```java
import lombok.Data;

@Data
public class Student {
    private String name;
    private int grade;
    private int age;
}
```



***Reference**

http://jnb.ociweb.com/jnb/jnbJan2010.html#data

https://taetaetae.github.io/2017/02/22/lombok/

https://ijbgo.tistory.com/5
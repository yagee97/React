# React 시작하기



### 작업 환경설정

#### 1. Node.js와 npm 설치

```
버전 확인: node -v
```



#### 2. Yarn 설치

```
버전 확인: yarn --version` 
```

(spark 안에 있던 yarn을 제거하지 않고, 새롭게 msi로 yarn을 설치해서 version 확인 시 에러가 났었다. )



#### 3. VS Code 설치

확장 프로그램 설치

1. ESLint(자바스크립트 문법 체크)
2. Reactjs code snippets(리액트 관련 스니펫 모음)
   - 제작자가 Charalampos Karypidis인 것 설치하기.

위의 확장 프로그램은 vs code 내에서 설치 가능하다.



#### 4. create-react-app 으로 프로젝트 생성

###### 4-1. 설치

```
$ yarn global add create-react-app
```



###### 4-2. 프로젝트 생성

```
$ create-react-app <프로젝트 이름>` 
```

![1562139592449](C:\Users\예지\AppData\Roaming\Typora\typora-user-images\1562139592449.png)



###### 4-3. 프로젝트 개발 서버 실행

리액트 프로젝트를 만든 후, **yarn start** 명령어로 프로젝트 개발 서버를 실행할 수 있다.

```
$ cd hello-react

$ yarn start
```

진행이 완료 된다면, 기본 웹 브라우저로 http://localhost:3000/ 페이지가 자동으로 뜬다.







###### 출처] 리액트를 다루는 기술(출판사: 길벗)
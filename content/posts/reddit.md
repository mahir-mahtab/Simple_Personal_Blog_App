---
title: "A unrealistic but oddly effective way to make real time updates to all users"
date: "2025-09-14"
excerpt: "This is my first blog post written in markdown. It supports rich formatting and is much more flexible than JSON."
---

## A brief context

So I was assigned to make a stackoverflow clone with **JavaFX** along with only **Socket Programming** for my OOP Lab course.During this time i was familiar with **Rest API's**.So like any other person i decided to make the architecture like Rest API's.But the problem was i had to make real time updates to all users like when a user posts a question or answer or comment it should be visible to all users without refreshing the page.It was actually a task i took my self despite my supervisor not explicitly asking for it!(It paid off in the end).So i started implementing real time using **Socket Programming**.

>*Note: I was not familiar with WebSockets at the time.It would be so much easier if i had been familiar with it before*

## The Naive Approach

The structure of my application was Client-Server architecture.The client would send requests to the server and the server would respond accordingly.But as i had to use socket programming i had to use **TCP Sockets**.So the naive approach was to make a new connection to the server every time a user made a request and then close the connection after getting the response from the server.Actually this approach is great and dare i say more scalable.Also the modern day **LLM's** were constantly bugging me to use this architecture.

`code`
```java

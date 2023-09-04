---
layout: post
title: "Classification of Programming Languages"
date: 2023-08-18 20:00:00 +0300
image:
  path: "/assets/img/2023-08-23-programming-languages-classification/different-programming-languages.png"
  alt: Different types of programming languages
categories: [General-Knowledge, Programming-Languages]
tags: [programming-languages, general-knowledge]
pin: true
---

It's interesting to understand the __many ways__ in which software can be built. It helps you think in new and creative ways, outside of the tools you're used to.

__Classification__ is important because it allow you to better understand relationships and connections between things.

This will be only a __brief introduction__ with short examples. The objective is to start seeing a bigger picture, which can make it easier to understand different related topics in the programming world.

## Table of contents

1.  [Classification by purpose](#classification-by-purpose)
  * [General-purpose languages](#general-purpose-languages)
  * [Domain-specific languages](#domain-specific-languages)
2.  [Classification by level](#classification-by-level)
  * [Machine language](#machine-language)
  * [Low-level languages](#low-level-languages)
  * [High-level languages](#high-level-languages)
3.  [Classification by compilation](#classification-by-compilation)
  * [Interpreted languages](#interpreted-languages)
  * [Compiled languages](#compiled-languages)
4.  [Classification by paradigm](#classification-by-paradigm)
  * [What is a programming paradigm?](#what-is-a-programming-paradigm)
  * [Imperative languages](#imperative-languages)
  * [Procedural languages](#procedural-languages)
  * [Functional languages](#functional-languages)
  * [Declarative languages](#declarative-languages)
  * [Object-oriented languages](#object-oriented-languages)
5.  [Conclusion](#conclusion)
6.  [References](#references)

## Classification by purpose

### General-purpose languages

These are programming languages that can be used for a wide variety of tasks. They're like "Swiss army knives" of coding, capable of handling many different types of programs. Examples include `Python`, `Java`, and `C++`.

```python
print("Hello, World!")
```

### Domain-specific languages

These languages are designed for specific tasks or industries. They're like tools designed for a particular job. Examples include `SQL` for working with databases and `HTML` for building web pages.

```sql
SELECT * FROM customers;
```

## Classification by level

### Machine language

This is the lowest-level language that computers understand directly. It's made up of binary code (`0s and 1s`) and controls the hardware. This is a "simple" machine language instruction to add two numbers:

```
00011001 00000010 00000011
```

### Low-level languages

These are more human-readable versions of machine language. They still deal with hardware specifics but use words and symbols. `Assembly` language is an example:

```sh
org  0x100        ; .com files always start 256 bytes into the segment

; int 21h is going to want...

mov  dx, msg      ; the address of or message in dx
mov  ah, 9        ; ah=9 - "print string" sub-function
int  0x21         ; call dos services

mov  ah, 0x4c     ; "terminate program" sub-function
int  0x21         ; call dos services

msg  db 'Hello, World!', 0x0d, 0x0a, '$'   ; $-terminated message
```

### High-level languages

These languages are more like human language and abstract away hardware details. They're easier for programmers to use. This is an example in `Python`:

```python
x = 5
y = 3
result = x + y
```

## Classification by compilation

### Interpreted languages

In these languages, code is executed line by line by an interpreter. It reads the code and performs actions immediately. `JavaScript` is an interpreted language:

```js
console.log("Hello, World!");
```

### Compiled languages

Code in these languages needs to be translated into machine language before running. This compilation step happens before execution. An example is `C`:

```C
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

## Classification by paradigm

### What is a programming paradigm

Imagine programming paradigms as different recipes for cooking. Each recipe follows a specific method, uses certain ingredients, and has its own style. Similarly, programming paradigms provide guidelines for creating software in different ways, depending on what you're trying to achieve and how you prefer to work.

A programming paradigm is like a set of rules and approaches that help you solve problems with code. It's like choosing a specific way of thinking and building your programs.

Some of the most famous paradigms are explained below.

### Imperative languages

These languages tell the computer how to do something step by step. You give explicit instructions. `C` is an imperative language:

```C
int main() {
    int x = 5;
    int y = 3;
    int result = x + y;
    return 0;
}
```

### Procedural languages

They organize code into procedures or functions. Each function performs a specific task. `Pascal` is a procedural language:

```pascal
program AddNumbers;
var
  x, y, result: integer;
begin
  x := 5;
  y := 3;
  result := x + y;
end.
```

### Functional languages

These focus on functions as the main building blocks of programs. Functions can't change data; they return new values. An example is `Haskell`:

```haskell
addNumbers :: Int -> Int -> Int
addNumbers x y = x + y
```

### Declarative languages

You describe what you want to achieve, not how to achieve it. `SQL` is a declarative language:

```sql
SELECT name FROM customers WHERE age > 18;
```

### Object-oriented languages

These focus on objects that represent real-world things and their interactions. `Java` is an object-oriented language:

```java
class Animal {
    String name;
    
    void speak() {
        System.out.println("Animal sound");
    }
}
```

## Conclusion

* Programming __languages can often support multiple paradigms or fit into different classification types__. A programming language can be flexible and adaptable, allowing programmers to use different programming styles within the same language.

* For example, a programming language like `Python` can be used for both __imperative__ and __object-oriented__ programming paradigms. It supports different ways of solving problems based on what the programmer wants to achieve. Similarly, a language can be both compiled and interpreted, depending on how it's used.

* This `flexibility` allows programmers to choose the best approach for their specific tasks and projects.

Thanks for reading!

## References

* [FreeCodeCamp Blog - Programming Languages](https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/)
* [Code Learn Blog - Classification of Programming Languages](https://codelearn.com/blog/classification-of-programming-languages/)
* [Loyola Marymount University Notes - Classifying Programming Languages](https://cs.lmu.edu/~ray/notes/pltypes/)
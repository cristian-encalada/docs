---
layout: post
title: "Desktop environments vs Windows Managers - Linux"
date: 2023-09-15 20:00:00 +0300
image:
  path: "/assets/img/2023-09-15-linux-desktop-environments-vs-window-managers/budgie-desktop.jpg"
  alt: BUDGIE – A Linux Desktop Environment
categories: [Linux]
tags: [Linux]
pin: true
---

What are the differences between Desktop environments and Windows Managers in Linux? Let's review it.

## Table of contents

* [X Window System](#x-window-system)
* [Desktop Environments (DE)](#desktop-environments)
* [Window Managers (WM)](#window-managers)
* [Why Use a Window Manager?](#why-use-a-window-manager)
* [Why Use a Desktop Environment?](#why-use-a-desktop-environment)
* [Which One to Pick?](#which-one-to-pick)
* [References](#references)


If you're a Linux user, you've probably heard the terms `Desktop Environment (DE)` and `Window Manager (WM)`. These are like the face of your Linux system, but what's the real difference, and how do they affect your experience? Let's break it down in this article.


There are basically `three layers` that can be included in a `Linux desktop`:

## X Window System

The X Window System (X11 or X Windows) is an open source, cross platform, client-server computer software system that provides a GUI in a distributed network environment. 

This is the foundation that allows for graphic elements to be drawn on the display. [X Windows](https://en.wikipedia.org/wiki/X_Window_System) builds the primitive framework that allows moving of windows, interactions with keyboard and mouse, and draws windows. This is required for any graphical desktop.

## Window Managers

The Window Manager (WM) is the piece of the puzzle that controls the placement and appearance of windows. __Window managers require X Windows but not a desktop environment__.

There are 2 types of Window Managers:

* __Tiling Window Managers:__ These snap windows together neatly, like building blocks. No window covers another. 

![Qtile tiling WM](/assets/img/2023-09-15-linux-desktop-environments-vs-window-managers/qtile_tiling_WM.png)

Qtile - Tiling Window Manager

Some examples of tiling window managers are: 
* [qtile](https://qtile.org/)
* [i3](https://i3wm.org/)
* [bspwm](https://github.com/baskerville/bspwm)
* [dwm](https://dwm.suckless.org/)
* [xmonad](https://xmonad.org/)

* __Stacking Window Managers:__ These allow windows to overlap like sheets of paper. Most desktop environments use these. 

![Kwin stack WM](/assets/img/2023-09-15-linux-desktop-environments-vs-window-managers/kwin_stacl_WM.png)

KWin 5.24 (stack Window Manager) with Cover Switch effect.

Some examples of stacking window managers include:
* [Fluxbox](http://fluxbox.org/)
* [Openbox](http://openbox.org/wiki/Main_Page)
* [KWin](https://en.wikipedia.org/wiki/KWin)

## Desktop Environments

A Desktop Environment (DE) includes a Window Manager but builds upon it. The Desktop Environment typically is a far more fully integrated system than a Window Manager. __Desktop Environments requiree both X Windows and a Window Manager__.

__Note:__ Is important to mention that while desktop environments are not entirely independent of Linux distributions, they are not tied exclusively to one distribution. Users have the freedom to choose and install their preferred desktop environment on various Linux distributions, making Linux a versatile platform that accommodates a wide range of preferences and needs

Each Desktop Environment has its style. Some examples of Linux Desktop Environments (DEs) are:

* [GNOME](https://www.gnome.org/getting-gnome/)

![Gnome DE](/assets/img/2023-09-15-linux-desktop-environments-vs-window-managers/GNOME_DE.webp)

* [KDE](https://kde.org/)

![KDE DE](/assets/img/2023-09-15-linux-desktop-environments-vs-window-managers/KDE_DE.png)

* [Cinnamon](https://en.wikipedia.org/wiki/Cinnamon_(desktop_environment))

![Cinnamon DE](/assets/img/2023-09-15-linux-desktop-environments-vs-window-managers/Cinnamon_5.2.png)

* [XFCE](https://www.xfce.org/)

![XFCE DE](/assets/img/2023-09-15-linux-desktop-environments-vs-window-managers/Xfce-Desktop-Environment.png)

* [MATE](https://mate-desktop.org/)

![XFCE DE](/assets/img/2023-09-15-linux-desktop-environments-vs-window-managers/MATE-DE.jpg)


## Why Use a Desktop Environment

* __Easy for New Users:__ Desktop Environments are user-friendly and need less setup.
* __Easy to configure the look and feel:__ They often have built-in tools to let you tweak how your system looks.
* __Many options to Choose From:__ Different Linux versions come with various Desktop Environments to suit different tastes.

## Why Use a Window Manager

* __Saves Resources:__ Window Managers use less computer power than Desktop Environments.
* __Pick and choose what you want on your system:__ Unlike Desktop Environments that come with a bunch of stuff already installed.
* __Work Faster:__ After a bit of setup, Window Managers can be super quick, thanks to keyboard shortcuts.

## Which One to Pick

The choice is all about what you need and like. If you're new to Linux, want to start quickly, or like things ready-made, go for a Desktop Environment. If you want a more customized and efficient system, give a Window Manager a try.

In the end, Linux lets you pick between a Desktop Environment, a Window Manager, or even just plain text commands. You choose what fits your style and needs.

In conclusion, Desktop Environments (DEs) are heavier than Window Managers (WMs).

Desktop Environmentss act as a valuable bridge for those migrating from Windows/Mac, who are generally heavily GUI reliant, to the GNU/Linux world, that is historically more CLI oriented.

Thanks for reading!

## References

- [Desktop Environment vs Window Manager – Explained](https://www.linuxfordevices.com/tutorials/linux/desktop-environment-vs-window-manager)
- [Difference Between Desktop Environment VS Window Manager in Linux](https://www.geeksforgeeks.org/difference-between-desktop-environment-vs-window-manager-in-linux/)
- [What is the difference between a desktop environment and a window manager?](https://askubuntu.com/questions/18078/what-is-the-difference-between-a-desktop-environment-and-a-window-manager)
# 1. Winston

Winston is a personal management system. It is used for prioritising tasks and doing them, whilst keeping track of other aspects of your life.

- [1. Winston](#1-winston)
- [2. Roadmap](#2-roadmap)
- [3. Project Definition](#3-project-definition)
	- [3.1. Entities](#31-entities)
- [4. Contributions](#4-contributions)
	- [4.1. TDD](#41-tdd)
	- [4.2. Clean Architecture](#42-clean-architecture)

# 2. Roadmap

- Define initial use cases ✅
- Define entities for those use cases ✅
- Build out the domain core of the application (Use cases and entities) 🟨
- Build controllers and routes for the application (Using clean architecture)🟥
- Build out the database (This will just plug into the controllers)🟥
- Set up google authentication🟥
- Make wireframes for frontend🟥\
  ...

# 3. Project Definition

## 3.1. Entities

- Task
  - View tasks that are upcoming
  - Dismiss tasks that are no longer needed
  - Add new tasks with defined priorities and length of time required to complete
  - View tasks that are overdue
  - Easily create pomodoro timers for tasks
  - Add task to project
  - Fields:
    - Name
    - Description
    - Priority
    - Due date
    - Length of time required to complete
    - Project
    - Completed
    - Completed date
    - Completed by
    - Created by
    - Created date
    - Updated by
    - Updated date
- Project
  - Define projects to fit tasks into
  - View tasks that are assigned to a project
  - Fields:
    - Name
    - Description
    - Created by
    - Created date
    - Updated by
    - Updated date
- User
  - Sign in (With google authentication)
  - Sign out
  - Define work and breaks length for pomodoros
  - Fields:
    - Name
    - Email
    - Password
    - Work length
    - Break length
    - Created by
    - Created date
    - Updated by
    - Updated date

# 4. Contributions

## 4.1. TDD
All contributions must be created using Test Driven Development. All main folders in the application will contain a `__tests__` folder, where all tests for that folder but exist.

Steps for TDD:\
🔴 **RED** Write a failing test \
🟢 **GREEN** Get the test to pass by writing some logic \
🟡 **REFACTOR** Change the structure of code to make it more readable

## 4.2. Clean Architecture

All backend code written in this project will follow the principles of clean architecture, when and where it is plausible
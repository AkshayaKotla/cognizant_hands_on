# Student Course Portal – Angular Hands-on 2

## Overview
This project demonstrates Parent-to-Child and Child-to-Parent communication in Angular using `@Input()` and `@Output()` decorators. The application displays a list of available courses, allows users to enroll in a course, and logs the selected course ID in the browser console.

## Objectives
- Understand Angular component communication.
- Pass data from parent to child using `@Input()`.
- Send events from child to parent using `@Output()` and `EventEmitter`.
- Display dynamic data using Angular templates.
- Handle button click events.

## Features
- Displays a list of available courses.
- Shows course details:
  - Course Name
  - Course ID
  - Course Code
  - Credits
- Enroll button for each course.
- Parent component receives enrollment events.
- Selected course ID is logged in the browser console.

## Technologies Used
- Angular
- TypeScript
- HTML
- CSS

## Project Structure

```
src/
└── app/
    ├── components/
    │   ├── header/
    │   └── course-card/
    ├── pages/
    │   ├── home/
    │   └── course-list/
    ├── app.ts
    ├── app.html
    └── app.css
```

## Component Communication

### Parent Component
- CourseListComponent

Responsibilities:
- Stores the list of available courses.
- Passes course data to CourseCardComponent using `@Input()`.
- Receives enrollment events using `@Output()`.

### Child Component
- CourseCardComponent

Responsibilities:
- Displays individual course details.
- Emits the selected course ID when the Enroll button is clicked.

## Angular Concepts Implemented

- Standalone Components
- @Input Decorator
- @Output Decorator
- EventEmitter
- Property Binding
- Event Binding
- Structural Directive (*ngFor)
- Component Communication

## Sample Output

```
Available Courses

Angular
ID: 1
Code: ANG101
Credits: 4
[Enroll]

Java
ID: 2
Code: JAVA201
Credits: 3
[Enroll]
```

Browser Console:

```
Enrolling in course: 1
Enrolling in course: 2
Enrolling in course: 3
```

## Learning Outcomes

After completing this hands-on, I learned how to:

- Create reusable Angular components.
- Pass data between components using @Input().
- Send events using @Output() and EventEmitter.
- Handle user interactions through event binding.
- Render dynamic content using *ngFor.
- Build modular Angular applications using standalone components.

## Author

**Neha Sankeerthana**

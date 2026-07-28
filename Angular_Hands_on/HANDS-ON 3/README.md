# Student Course Portal – Hands-On 3 (Angular Directives & Pipes)

## Overview

This project is an implementation of **Hands-On 3 – Directives & Pipes (Built-in and Custom)** from the Cognizant Digital Nurture Angular training.

The application demonstrates the usage of Angular structural directives, attribute directives, custom directives, and custom pipes by building a simple Student Course Portal.

---

## Technologies Used

- Angular 20+
- TypeScript
- HTML5
- CSS3
- Angular Standalone Components

---

## Features Implemented

### Task 1 – Structural Directives

Implemented Angular Structural Directives:

- **ngIf**
  - Displays a loading message while course data is loading.
  - Displays "No courses available" when the course list is empty.

- **ngFor**
  - Dynamically renders all course cards.

- **trackBy**
  - Optimizes rendering performance by tracking courses using their unique ID.

- **ngSwitch**
  - Displays different badges based on course status:
    - ✅ Passed
    - ❌ Failed
    - ⏳ Pending

---

### Task 2 – Attribute Directives

Implemented Angular Attribute Directives:

- **ngClass**
  - Highlights enrolled courses.
  - Applies special styling for courses with credits ≥ 4.
  - Expands course cards when "Show Details" is clicked.

- **ngStyle**
  - Dynamically changes the left border color:
    - Green → Passed
    - Red → Failed
    - Orange → Pending

---

### Task 3 – Custom Directive & Custom Pipe

#### Custom Highlight Directive

Created a reusable custom directive that:

- Highlights a course card on mouse hover.
- Removes the highlight when the mouse leaves.
- Supports configurable highlight colors using:

```html
appHighlight="lightblue"
```

---

#### Custom Credit Label Pipe

Created a custom pipe that converts credit values into readable text.

Examples:

| Input | Output |
|-------|---------|
| 1 | 1 Credit |
| 2 | 2 Credits |
| 4 | 4 Credits |
| 0 | No Credits |
| null | No Credits |

Usage:

```html
{{ course.credits | creditLabel }}
```

---

## Project Structure

```
src/
│
├── app/
│
├── components/
│   ├── course-card/
│   │   ├── course-card.ts
│   │   ├── course-card.html
│   │   └── course-card.css
│
├── pages/
│   ├── course-list/
│   │   ├── course-list.ts
│   │   ├── course-list.html
│   │   └── course-list.css
│
├── directives/
│   └── highlight.directive.ts
│
├── pipes/
│   └── credit-label.pipe.ts
│
└── app.ts
```

---

## Functionalities

- Display list of available courses.
- Loading indicator using **ngIf**.
- Empty list template using **ngIf**.
- Efficient rendering using **trackBy**.
- Status badges using **ngSwitch**.
- Dynamic CSS classes using **ngClass**.
- Dynamic border styling using **ngStyle**.
- Expand/Collapse course details.
- Enroll functionality using **EventEmitter**.
- Mouse hover highlighting using a custom directive.
- Credit formatting using a custom pipe.

---

## Expected Output

- Loading message appears while data loads.
- Course cards display dynamically.
- Different status badges appear based on course status.
- Border colors change according to status.
- Enrolled cards receive special styling.
- Course details expand/collapse.
- Hovering over a course highlights it.
- Credits are displayed using the custom pipe.

---

## Learning Outcomes

Through this exercise, the following Angular concepts were implemented:

- Standalone Components
- Component Communication
- EventEmitter
- @Input
- @Output
- Structural Directives
- Attribute Directives
- Custom Directives
- HostListener
- HostBinding
- Custom Pipes
- PipeTransform
- Dynamic Styling
- Angular Template Binding
- Performance Optimization using trackBy

---

## Author

**Neha Sankeerthana**

B.Tech – Computer Science & Engineering (AI & ML)

Vignan's Institute of Engineering for Women


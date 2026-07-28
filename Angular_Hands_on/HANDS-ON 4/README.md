# Student Course Portal – Hands-On 4
## Template-Driven Forms & Validation (Angular)

## 📌 Overview
This project is part of the Cognizant Digital Nurture Java FSE Angular Hands-On 4 exercise.

The application demonstrates how to build a Template-Driven Form in Angular using `ngModel` and `ngForm`, implement built-in validators, display validation messages, style valid and invalid fields, and handle form submission.

---

## 🚀 Features

- Student Enrollment Form
- Template-Driven Forms
- Two-Way Data Binding using `ngModel`
- Form Validation using Angular Validators
- Required Field Validation
- Minimum Length Validation
- Email Validation
- Form Submission
- Reset Form Functionality
- Validation Error Messages
- Dynamic Submit Button Enable/Disable
- Success Message after Submission
- CSS Styling for Valid and Invalid Fields

---

## 🛠 Technologies Used

- Angular
- TypeScript
- HTML5
- CSS3
- Angular FormsModule

---

## 📂 Project Structure

```
src/
│
├── app/
│
├── pages/
│   └── enrollment-form/
│       ├── enrollment-form.ts
│       ├── enrollment-form.html
│       ├── enrollment-form.css
│       └── enrollment-form.spec.ts
│
├── app.routes.ts
├── app.ts
├── app.html
└── app.config.ts
```

---

## 📋 Form Fields

The enrollment form contains the following fields:

- Student Name
- Email
- Course ID
- Preferred Semester
- Agree to Terms
- Submit Button
- Reset Button

---

## ✅ Validations Implemented

### Student Name

- Required
- Minimum Length = 3 characters

Validation Messages:

- Name is required
- Name must be at least 3 characters

---

### Email

- Required
- Email Format Validation

Validation Messages:

- Email is required
- Enter a valid email

---

### Course ID

- Required

Validation Message:

- Course ID is required

---

### Semester

- Required

Validation Message:

- Semester is required

---

### Agree to Terms

Users must agree to the Terms before successful submission.

---

## 🎨 CSS Validation

Angular validation classes are used to highlight form fields.

### Invalid Field

- Red Border

### Valid Field

- Green Border

---

## 📌 Functionalities

### Form Submission

- Displays submitted form values in the console.
- Displays a success message after successful submission.

### Reset Button

- Clears all form fields.
- Removes validation states.
- Resets the form.

---

## ▶️ How to Run

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
ng serve
```

Open the browser and navigate to:

```
http://localhost:4200
```

---

## 📸 Expected Output

The application should demonstrate:

- Student Enrollment Form
- Required Field Validation
- Minimum Length Validation
- Email Validation
- Red Border for Invalid Fields
- Green Border for Valid Fields
- Disabled Submit Button for Invalid Form
- Success Message on Form Submission
- Reset Form Functionality

---

## 🎯 Learning Outcomes

- Understand Template-Driven Forms
- Use ngModel for Two-Way Data Binding
- Use ngForm for Form Management
- Apply Angular Built-in Validators
- Display Contextual Validation Messages
- Style Forms Using Angular CSS Classes
- Handle Form Submission
- Reset Forms Programmatically

---

## 📚 Concepts Covered

- Template-Driven Forms
- FormsModule
- ngModel
- ngForm
- Required Validator
- MinLength Validator
- Email Validator
- ngIf
- Form Validation
- Angular CSS State Classes

---

## 👩‍💻 Author

**Neha Sankeerthana**

Cognizant Digital Nurture Program – Java FSE Angular Hands-On 4

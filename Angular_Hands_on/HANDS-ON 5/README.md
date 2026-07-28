# Student Course Portal – Hands-On 5
## Reactive Forms, FormBuilder, FormGroup, FormArray & Custom Validators

## 📌 Overview

This project is part of the **Cognizant Digital Nurture 5.0 – Java FSE Angular Deep Skilling Program**.

The objective of this hands-on is to implement **Angular Reactive Forms** using **FormBuilder**, **FormGroup**, **FormArray**, built-in validators, custom synchronous validators, and asynchronous validators to create a dynamic and validated Student Enrollment Form.

---

## 🎯 Objectives

- Create a Reactive Form using FormBuilder.
- Implement FormGroup for managing form controls.
- Apply Angular built-in validators.
- Create a custom synchronous validator.
- Create a custom asynchronous validator.
- Implement FormArray for dynamic form controls.
- Enable form submission only when the form is valid.
- Display validation messages for invalid inputs.
- Capture submitted form data.

---

## 🛠️ Technologies Used

- Angular
- TypeScript
- HTML5
- CSS3
- Reactive Forms Module

---

## 📂 Project Structure

```
src
│
├── app
│   ├── pages
│   │   └── reactive-enrollment-form
│   │       ├── reactive-enrollment-form.ts
│   │       ├── reactive-enrollment-form.html
│   │       └── reactive-enrollment-form.css
│   │
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── app.ts
│
├── index.html
└── styles.css
```

---

## 🚀 Features Implemented

### ✅ Reactive Form

Created a Student Enrollment Form using **FormBuilder** and **FormGroup**.

Form fields include:

- Student Name
- Student Email
- Course ID
- Preferred Semester
- Agree to Terms

---

### ✅ Built-in Validators

The following Angular validators have been implemented.

| Field | Validation |
|--------|------------|
| Student Name | Required, Minimum 3 Characters |
| Student Email | Required, Valid Email Format |
| Course ID | Required |
| Preferred Semester | Required |
| Agree to Terms | RequiredTrue |

---

### ✅ Custom Synchronous Validator

Implemented a custom validator named **noCourseCode()**.

**Purpose**

Rejects Course IDs that begin with **"XX"**.

Example:

```
XX101 ❌ Invalid
CS101 ✔ Valid
101 ✔ Valid
```

Validation Message:

```
Course code starting with XX is not allowed.
```

---

### ✅ Custom Asynchronous Validator

Implemented an asynchronous validator named **simulateEmailCheck()**.

**Behavior**

- Waits for 800 milliseconds.
- Checks the entered email.
- Returns an error if the email contains **test@**.

Example:

```
test@example.com
```

Displays:

```
Email taken
```

---

### ✅ FormArray

Implemented **FormArray** for managing additional courses dynamically.

Features:

- Add Another Course
- Remove Course
- Dynamic Form Controls
- Unlimited Additional Courses

---

### ✅ Form Submission

The **Submit** button remains disabled until all validations pass.

On successful submission:

- Form values are logged using

```typescript
this.enrollForm.value
```

and

```typescript
this.enrollForm.getRawValue()
```

---

## 📷 Output Screenshots

The following screenshots are included in the project.

- Home Page
- Reactive Enrollment Form
- Required Field Validation
- Minimum Length Validation
- Invalid Email Validation
- Custom Validator (Course ID starts with XX)
- Async Validator (Email Taken)
- Dynamic FormArray
- Remove Course Functionality
- Successful Form Submission (Console Output)

---

## ▶️ How to Run

### Install Dependencies

```bash
npm install
```

### Start the Application

```bash
ng serve
```

### Open Browser

```
http://localhost:4200
```

Reactive Form Page:

```
http://localhost:4200/enroll-reactive
```

---

## 📖 Learning Outcomes

After completing this hands-on, I learned how to:

- Build forms using Angular Reactive Forms.
- Use FormBuilder to simplify form creation.
- Apply FormGroup for organizing controls.
- Implement built-in Angular validators.
- Develop custom synchronous validators.
- Develop asynchronous validators.
- Manage dynamic controls using FormArray.
- Display validation messages.
- Enable or disable controls based on form validity.
- Capture and process user input effectively.

---

## ✅ Expected Output

- Student Enrollment Form renders successfully.
- Built-in validations work correctly.
- Custom Course ID validation prevents IDs starting with **XX**.
- Async email validation detects unavailable emails.
- Additional course fields can be added and removed dynamically.
- Submit button is enabled only after successful validation.
- Form values are displayed in the browser console upon submission.

---

## 📌 Conclusion

This hands-on exercise demonstrates the implementation of **Angular Reactive Forms** using FormBuilder, FormGroup, FormArray, built-in validators, custom synchronous validators, and asynchronous validators. It provides a practical understanding of building scalable, dynamic, and validated forms while following Angular best practices.

---

## 👩‍💻 Author

**Neha Sankeerthana**

B.Tech – Computer Science & Engineering (AI & ML)

Vignan's Institute of Engineering for Women

Cognizant Digital Nurture 5.0 – Java FSE Angular Deep Skilling

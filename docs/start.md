---
layout: docs
title: Getting Started
icon: far fa-smile
author: William Barkoff
description: Get started with MyHomeworkSpace
---

{% include alert.html content="**On behalf of the entire MyHomeworkSpace Team, welcome to MyHomeworkSpace! We're glad to have you.** If there is anything that we can do to help improve your transition to MyHomeworkSpace, feel free to reach out, either by [email](mailto:hello@myhomework.space), or using the feedback buttons in MyHomeworkSpace." color="info" icon="fas fa-heart text-danger" %}


Welcome to MyHomeworkSpace! The first step is to get signed up. Signing up for MyHomeworkSpace is free and easy.

## Get signed up
1. Open a new browser tab, and go to [myhomework.space](https://myhomework.space)
2. Click <button class="btn btn-sm btn-primary">Get Started</button>.
3. Sign in with your Dalton account, the same login that you use for HSRegistration and Classes.
4. Click <button class="btn btn-sm btn-dark" style="border-radius: 0">Log in</button>

{% include alert.html content="**Warning!** When you click the Log in button, you are agreeing to MyHomeworkSpace's terms of service and privacy policy, which can be found on our [legal site](https://legal.myhomework.space). Make sure that you agree with our data use policies before clicking that button." color="warning" icon="fas fa-exclamation-triangle" %}
{% include alert.html content="MyHomeworkSpace will **never** store your Dalton password. You can find more information in our privacy policy, which can be found on our [legal site](https://legal.myhomework.space)." color="success" icon="fas fa-lock" %}

---
## Add your classes
1. Click "<i class="fas fa-graduation-cap"></i> Classes."
2. Click <button class="btn btn-sm btn-default"><i class="fas fa-plus"></i> Add</button>.
3. Enter the name of your class, and your teacher. You can also choose a color for this class.
4. Click <button class="btn btn-sm btn-primary">Save Changes</button>.

{% include alert.html content="**Tip:** It may be helpful to add an \"other\" class for items like sports games. Often, you may want this class to not appear in homework view. See [About Hidden Classes](hidden-classes) for more information." color="info" icon="fas fa-info" %}

### Add your teachers
1. Hover your mouse over a class that you are taking.
2. Click the edit button. (It looks like this: <i class="fas fa-edit"></i>).
3. Enter your teacher's name

{% include alert.html content="**Hint:** Currently, adding teachers does not have any functionality except for displaying them in Classes view. We hope to add more functionality in future updates, but for now, adding a teacher doesn't do anything and is completely optional." color="info" icon="fas fa-info" %}

### Remove classes you aren't taking
1. Hover your mouse over a class that you are not taking.
2. Click the edit button. (It looks like this: <i class="fas fa-edit"></i>).
3. Click <button class="btn btn-sm btn-danger">Delete</button>.

{% include alert.html content="**Danger!** This is a potentially destructive action. Removing classes will permanently remove all the homework stored in them. This cannot be undone." color="danger" icon="fas fa-exclamation-triangle" %}

### Color code your classes
Colors for classes will appear in Planner View and Homework View.

1. Hover your mouse over the class whose color you want to change.
2. Click the edit button. (It looks like this: <i class="fas fa-edit"></i>).
3. Click the color dropdown menu.
4. Click a new color.
5. Click <button class="btn btn-sm btn-primary">Save Changes</button>.

---
## Add Homework
Assignments take the form of "Homework" in MyHomeworkSpace.

### About Homework
Homework takes the form of [Tag] Assignment, for example "<span style="background-color: rgb(76, 108, 155); color: rgb(255, 255, 255);" class="tag">Read</span> Romeo and Juliet". Each homework item also has a due date and an associated class.

#### About Tags
Tags are a system of assignment organization in MyHomeworkSpace. Learn more in [About Tags](tags). A list of tags can be found in the [Tags List](tags-list),

### Add Homework
1. Click the <button class="btn btn-sm btn-light"><i class="fa fa-plus-square"></i> Add homework</button> button at the top of the screen
2. This is where you can enter your assignment, in plain English. We call it Quick Add. For example, you can type **Read Romeo and Juliet Act 1 Scene 1 tomorrow in English**, or **Circles test on Tuesday in Algebra**.
3. Note that a box appears below the Quick Add dialog, previewing your assignment. Press enter.
4. You are now in the assignment edit dialog. Make any changes to the assignment, and click <button class="btn btn-sm btn-primary">Save Changes</button>.

The samples above would be parsed as:
{% include assignment.html title='<span class="tag" style="background-color: #4c6c9b; color: white;">Read</span> Romeo and Juliet Act 1 Scene 1' subject='English' due='Tomorrow' done='false' %}
{% include assignment.html title='<span class="tag" style="background-color: #dc143c; color: white;">Test</span> Circles' subject='Math' due='Tuesday' done='false' %}

### Mark homework as done
1. Hover your mouse over the homework in either Homework View or Planner View
2. Click the mark as done checkbox (It looks like a circle).
3. The homework will be marked as done

### Edit homework
1. Hover over the homework that you want to edit.
2. Click the edit button. (It looks like this: <i class="fas fa-edit"></i>).
3. Make any changes to the assignment.
4. Click <button class="btn btn-sm btn-primary">Save Changes</button>.

## Connect your schedule
MyHomeworkSpace provides an easy way to connect your schedule.
1. Click the "<i class="far fa-calendar-alt"></i> Calendar" tab.
2. Click <button class="btn btn-sm btn-primary">Get Started <i class="fas fa-arrow-right"></i></button>.
3. Type the password that you use to log into classes, and click <button class="btn btn-sm btn-primary">Get schedule <i class="fas fa-arrow-right"></i></button>.
{% include alert.html content="MyHomeworkSpace will **never** store your Dalton password. You can find more information in our privacy policy, which can be found on our [legal site](https://legal.myhomework.space)." color="success" icon="fas fa-lock" %}

### Add calendar events
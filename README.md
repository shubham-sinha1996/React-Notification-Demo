## Notification Demo - React Project

This is a simple notification widget demo built with React, demonstrating the use of both class components and function components.

## Project Overview

The project displays a notification message with a toggle button to show or hide the message. The main widget is implemented as a class component (App), and the notification text is displayed using a function component (NotificationText).

## Components

- NotificationText: A function component responsible for displaying the notification text.
- App: A class component that manages the notification's visibility and toggling behavior.

## Components Explanation

- NotificationText (Function Component)
  This function component is used to display the notification text. It accepts a text prop and displays the provided message, or a default message when no text is passed.

- App (Class Component)
  The App component is responsible for the visibility of the notification. It has internal state to manage the visibility of the notification text. The toggle function is used to show or hide the notification when the user clicks the button.

## Usage

- A notification will be displayed on the screen with a button labeled "N".
- Click the "N" button to toggle the notification visibility.

## Customization

- You can pass any custom notification text by changing the text prop of the App component in index.js.
- The styling can be adjusted in the index.css file to customize the appearance of the notification and button.

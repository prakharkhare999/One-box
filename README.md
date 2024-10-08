﻿# Onebox Web Application

## Overview
Onebox is a web application designed to manage emails efficiently. It features a login system, an inbox interface, keyboard shortcuts, a custom text editor, and support for both light and dark modes. The application integrates with a backend API to fetch, display, and manage emails.

## Features
- **Login Page**: Secure login system.
- **Inbox Interface**: View and manage emails.
- **Keyboard Shortcuts**: Use "D" to delete and "R" to reply.
- **Custom Text Editor**: Includes "SAVE" and "Variables" buttons.
- **Reply Functionality**: Send replies to emails.
- **Light/Dark Mode**: Toggle between light and dark themes.

## Technologies Used
- **HTML**: Structure of the web pages.
- **CSS**: Styling of the web pages.
- **JavaScript**: Functionality and interactivity.
- **API Integration**: Fetching and managing emails.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/onebox.git
    ```
2. Navigate to the project directory:
    ```bash
    cd onebox
    ```
3. Open the project in your preferred code editor.

## Usage
1. **Login Page**:
    - Open `login.html` in your browser.
    - Enter your email and password to log in.

2. **Inbox Interface**:
    - After logging in, you will be redirected to `onebox.html`.
    - View the list of emails in the inbox.

3. **Keyboard Shortcuts**:
    - Press "D" to delete the selected email.
    - Press "R" to open the reply box.

4. **Custom Text Editor**:
    - Use the "SAVE" and "Variables" buttons for additional functionalities.

5. **Reply Functionality**:
    - Click the "Reply" button to open the reply box.
    - Type your reply and click "Send" to send the reply.

6. **Light/Dark Mode**:
    - Click the "Dark Mode" button to toggle between light and dark themes.

## API Endpoints
- **GET /onebox/list**: Fetch the list of emails.
- **GET /onebox/:thread_id**: Fetch the details of a specific email.
- **DELETE /onebox/:thread_id**: Delete a specific email.
- **POST /reply/:thread_id**: Send a reply to a specific email.

## Testing
### Manual Testing
- Verify all features work as expected.
- Test the application on different browsers and devices.

### Automated Testing
- Use Selenium WebDriver for browser automation.
- Use Postman for API testing.

### Performance Testing
- Use JMeter for load and stress testing.

### Security Testing
- Use OWASP ZAP for vulnerability scanning.

## Contributing
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add new feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please contact prakhark113@gmail.com.

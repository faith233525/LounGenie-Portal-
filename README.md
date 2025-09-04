# LounGenie Portal

A comprehensive Support and Partner management portal.

## How to Open the Portal

### Method 1: Using the Python Server (Recommended)
```bash
python3 start_portal.py
```
This will automatically:
- Start a local web server
- Open the portal in your default browser
- Display the portal at http://localhost:8080

### Method 2: Direct File Access
Simply open `index.html` in your web browser:
- Double-click on `index.html`, or
- Right-click and select "Open with" → your preferred browser

### Method 3: Using Python's Built-in Server
```bash
python3 -m http.server 8080
```
Then navigate to http://localhost:8080 in your browser.

## Features

- **Dashboard**: Overview of support tickets and partner accounts
- **Support Center**: Manage support tickets and access knowledge base
- **Partner Management**: Add and manage partner relationships
- **Settings**: Configure portal and user settings

## Portal Structure

- `index.html` - Main portal interface
- `styles.css` - Portal styling and responsive design
- `script.js` - Interactive functionality
- `start_portal.py` - Easy-to-use server launcher

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for server methods)

## Support

For technical support or questions about the portal, please contact the development team.

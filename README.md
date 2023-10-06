# Birthday Countdown App

## Description

This is a simple web application that displays the countdown to the next birthday in your list of friends' birthdays. It also wishes your friends a happy birthday when the day arrives.

## Features

- Countdown to the next birthday.
- Birthday greetings on the special day.
- Automatically increments the year if there are no upcoming birthdays for the current year.

## Installation

1. Clone this repository to your local machine:
> git clone https://github.com/your-username/birthday-countdown-app.git
2. Navigate to the project directory:
> cd birthday-countdown-app
3. Install the necessary dependencies:
> npm install

## Usage

1. Start the development server:
> npm start
2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to use the app.

## Configuration

- Add your friends' birthdays in `Constants.js` file in the following format:

```json
[
  {
    "name": "John Doe",
    "date": "1990-10-15",
    "bornYear": 1990
  },
  {
    "name": "Jane Smith",
    "date": "1985-08-25",
    "bornYear": 1985
  }
]
```

## Features
If you would like to contribute to this project, please open an issue or submit a pull request.


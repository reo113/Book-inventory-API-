# Book Inventory API

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

The Book Inventory API is a Node.js and Express.js application that allows you to manage a bookstore inventory by performing CRUD (Create, Read, Update, Delete) operations on book data. It utilizes a PostgreSQL database to store and retrieve book information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:

   ```
   npm install
   ```

4. Make sure you have the following dependencies installed:

   - axios@1.4.0
   - express@4.18.2
   - pg@8.11.1
   - pg-hstore@2.3.4
   - sequelize@6.32.1
   - sequelize-cli@6.6.1

   You can install them using the following command:

   ```
   npm install axios@1.4.0 express@4.18.2 pg@8.11.1 pg-hstore@2.3.4 sequelize@6.32.1 sequelize-cli@6.6.1
   ```

5. Additionally, the project requires the following dev dependency:

   - dotenv@16.3.1

   You can install it using the following command:

   ```
   npm install --save-dev dotenv@16.3.1
   ```

## Usage

1. Set up a PostgreSQL database and establish the connection.
2. Create a table named "books" in the PostgreSQL database.
3. Implement the necessary CRUD routes for the bookstore inventory API.
4. Use Postman to test the API, ensuring valid request responses.

## Contributing

Currently, there are no specific guidelines for contributing to this project.

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).

## Credits

- Main Contributor: Robert Ortiz

# RacketOnDeck API 🎾🏸🏓

Backend repository for RacketOnDeck, a platform for managing racket sports academies. Built with Express, PostgreSQL, and MongoDB, it handles user authentication, court bookings, notifications, and other essential APIs. Includes WebSocket support for real-time updates and integration with Google Cloud and Kubernetes for scalability.

## 🚀 Features

- Express-based REST API
- PostgreSQL and MongoDB support
- User authentication with JWT
- OAuth integration with Google and GitHub
- Real-time updates using WebSockets
- Court booking and player management
- Integration with Google Cloud and Kubernetes for scalability

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:michaelhernandez29/racketondeck-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd racketondeck-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the environment variables:

   - Copy the .env.example file and rename it to .env:
     ```bash
     cp .env.example .env
     ```
   - You can then adjust the environment variables in the .env file according to your setup.

5. Run the application:
   ```bash
   npm start
   ```

## 📜 Scripts

The project includes several npm scripts for development and code quality:

- **prepare**: Initializes Husky for managing Git hooks.

- **check**: Checks the formatting of all .js, .json, and .md files using Prettier

  ```bash
  npm run check
  ```

- **format**: Automatically formats all .js, .json, and .md files using Prettier.

  ```bash
  npm run format
  ```

- **lint**: Lints all .js and .json files using ESLint to check for issues.

  ```bash
  npm run lint
  ```

- **lint:fix**: Lints and fixes issues in all .js and .json files using ESLint.

  ```bash
  npm run lint:fix
  ```

- **start**: Starts the server with Node.js, watches changes in the src directory, and sets up debugging on port 9230.

  ```bash
  npm start
  ```

## 🤝 Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'feat: Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request and describe your changes.

Please ensure your code follows our linting and formatting standards. Run `npm run lint` and `npm run format` before committing.

## 📧 Issues

If you encounter any issues, please report them on our. [GitHub Issues page](https://github.com/michaelhernandez29/racketondeck/issues)

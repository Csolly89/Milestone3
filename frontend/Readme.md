# The Sizzle House

Welcome to The Sizzle House! This project is a monolith application for a restaurant website where users can browse through the menu, check daily specials, view hours of operation, apply for employment, and make reservations.

## Technologies Used

### Frontend
- React
- Tailwind CSS
- HeroIcons
- DaisyUI
- React Router DOM

### Backend
- Node.js
- Express
- Sequelize
- CORS

### Database
- SQL
- PostgreSQL (PgAdmin)

## Features

- **Menu:** Browse through a variety of appetizers, sides, salads, entrees, and desserts.
- **Daily Specials:** Check out special dishes available on the day.
- **Hours of Operation:** View the operating hours of the restaurant.
- **Employment Application:** Submit an application for employment.
- **User Authentication:** Login as a user.
- **Reservation:** Place a reservation for dinner on a specific date and time.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd the-sizzle-house
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

4. Set up the database:
   
   - Install PostgreSQL and PgAdmin.
   - Create a new PostgreSQL database.
   - Configure database connection in `backend/config/database.js`.

5. Run the application:

   ```bash
   # Run the frontend
   cd frontend
   npm start

   # Run the backend
   cd ../backend
   npm start
   ```

6. Access the application in your browser:

   ```
   http://localhost:3000
   ```

## Contributing

Contributions are welcome! Feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy your dining experience at The Sizzle House! 🍽️🔥
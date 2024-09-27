
---

# Totality Frontend Challenge - Property Rental Platform

This project is a property rental platform developed using React, designed to showcase property listings, enable users to manage bookings, and provide a seamless checkout experience. The platform also includes responsive design to ensure compatibility across both desktop and mobile devices.

## Features

### 1. Property Listings
- Display a variety of properties with details such as:
  - Images
  - Titles
  - Descriptions
  - Prices
  - "Book Now" buttons
- Filters allow users to sort properties by:
  - Location
  - Price Range
  - Number of Bedrooms
  - Amenities

### 2. Booking Management
- Users can book properties and manage them in a cart.
- Booking cart displays:
  - Property details
  - Booking dates
  - Total cost
- Users can:
  - Increase or decrease booked properties
  - Remove properties from the cart
  - See real-time updates for total cost and booking count

### 3. Checkout Process
- A streamlined checkout process that:
  - Calculates the total cost of booked properties
  - Allows users to enter booking and payment details (contact information and payment details)

### 4. Responsive Design
- Fully responsive design optimized for both desktop and mobile devices.
- The layout adapts dynamically based on screen size, providing an optimal user experience across devices.

### Additional Features (Optional)
- **User Authentication (Optional)**: 
  - Users can register and log in.
  - Display the user’s name and avatar when logged in.


## Tech Stack

### Frontend
- **React.js**: Component-based UI development.
- **Tailwind CSS**: Responsive and utility-first CSS framework.
- **React Router**: For routing between different pages.
- **Axios**: For handling HTTP requests.
  
### State Management
- **Redux Toolkit**: Manage state for authentication and booking management.

### Hosting
- **Vercel/Netlify**: The application is deployed on Vercel/Netlify for production.

## Approach

1. **UI Design**: I focused on creating a user-friendly and clean UI, ensuring that the platform is easy to navigate. The layout and components are designed with responsiveness in mind to provide a seamless experience on all devices.
2. **Property Listings**: I implemented a component-based architecture where each property is rendered dynamically from an array of property data, including images, descriptions, prices, etc. Filtering options were added to make it easy for users to sort through listings.
3. **Booking Management**: For booking management, I used Redux to store and update the cart's state efficiently. Users can add, remove, or update bookings with real-time feedback on the total cost.
4. **Checkout Process**: A multi-step form was created to guide users through the checkout process. Each step validates the input data to ensure a smooth transaction.
5. **Authentication (Optional)**: Users can register and log in, and upon successful login, their name and avatar will be displayed.
  
## Getting Started

### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (v14+)
- **npm** or **yarn**
  
### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/totality-frontend-challenge.git
   ```
2. Navigate to the project directory:
   ```bash
   cd totality-frontend-challenge
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm start
   ```

### Environment Variables

Create a `.env` file in the root of the project to define your environment variables.

Example:
```bash
REACT_APP_API_URL=http://localhost:8000
```

### Deployment

To deploy this project to platforms like Vercel or Netlify, follow their respective guides:

1. **Deploy to Vercel**: 
   - Install the Vercel CLI: 
     ```bash
     npm install -g vercel
     ```
   - Deploy:
     ```bash
     vercel
     ```

2. **Deploy to Netlify**: 
   - Push your code to GitHub.
   - Connect the repository to your Netlify account via the Netlify dashboard.

## Live Demo

Check out the live demo here: [Live Demo Link](https://your-live-demo-url.com)

## Additional Notes
- The use of **Next.js** was considered, but React was chosen to simplify the challenge requirements.
- Future features like property reviews and a favorites list can easily be integrated with the current architecture.

## License

This project is open source and available under the [MIT License](LICENSE).

---

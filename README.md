# E-Commerce React App

This project is a responsive e-commerce web application built with React. It displays a list of products fetched from an API, and allows users to add or remove items from their shopping cart. It features smooth transitions, responsive design, and integrates with Redux for state management.

## Features

* **Product Listing**: Fetches and displays products from the API (`https://fakestoreapi.com/products`).
* **Responsive Design**: The app is fully responsive, adjusting the number of product cards per row based on the screen size.
* **Add/Remove from Cart**: Users can add products to the cart and remove them.
* **Cart Management**: The app tracks items in the cart and displays the total amount.
* **Toast Notifications**: Toast notifications appear when adding or removing items from the cart.
* **Loading State**: A spinner is displayed while products are loading from the API.

## Tech Stack

* **React**: A JavaScript library for building user interfaces.
* **Redux**: A state management tool for handling global state, such as the shopping cart.
* **Tailwind CSS**: A utility-first CSS framework used for styling the components.
* **React Hot Toast**: A lightweight and customizable toast notification library.
* **React Router**: Used for navigation between pages (such as the Home and Cart pages).

## Getting Started

### Prerequisites

To get started with this project, you'll need to have **Node.js** and **npm** installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce-react-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd e-commerce-react-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app should now be running on [http://localhost:3000](http://localhost:3000).

### Folder Structure

```bash
public/
  index.html       # The main HTML file
src/
  components/
    CartItem.js     # Component to display individual cart items
    Product.js      # Component to display individual products
    Spinner.js      # Spinner component for loading state
  pages/
    Cart.js         # Page to display cart items and checkout
    Home.js         # Main page that displays product listings
  redux/
    Slices/
      cartSlice.js   # Redux slice for cart management
  App.js            # Main App component that routes to different pages
  index.js          # Entry point of the application
  tailwind.config.js# Tailwind CSS configuration
  package.json      # Project metadata and dependencies
  README.md         # This README file
```

### Environment Variables

The project currently does not require any environment variables.

### API Endpoints

* **Product Data**: The products are fetched from `https://fakestoreapi.com/products`. This API provides a list of products with their details like title, description, price, and image.

## How It Works

1. **Home Page**:

   * Displays a grid of product cards. Each card contains a product title, description, price, and image.
   * The `Add to Cart` button adds the product to the shopping cart, while the `Remove item` button removes it from the cart.

2. **Cart Page**:

   * Displays the items added to the cart with the product details and the total price.
   * If the cart is empty, a message is shown, and users can click a button to navigate back to the home page and shop more.

3. **State Management**:

   * Redux is used to store and manage the cart state globally.
   * The state is updated with actions like `add` and `remove` when products are added or removed from the cart.

4. **Toast Notifications**:

   * Whenever an item is added or removed from the cart, a toast notification appears to inform the user.

5. **Responsiveness**:

   * The app is designed to be responsive using Tailwind CSS. The product grid dynamically adjusts the number of columns based on the screen size:

     * **Small screens**: 1 column.
     * **Medium screens**: 2 columns.
     * **Large screens**: 3-4 columns.

## Future Improvements

* **User Authentication**: Add authentication for user accounts and allow users to sign in to view their cart across sessions.
* **Checkout and Payment Integration**: Integrate with a payment API for handling orders and payments.
* **Product Filtering**: Add filtering and sorting options to allow users to filter products by categories, price, etc.
* **Backend Integration**: Set up a backend to handle user data, order management, and product inventory.

## Acknowledgements

* **Fakestore API**: The products used in this app are fetched from the free [Fakestore API](https://fakestoreapi.com/).

## License

This project is open-source and available under the MIT License.
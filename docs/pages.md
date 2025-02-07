# **Online Dress Mart - Pages**
## **1. Authentication Pages**
### **Sign In Page (`/signin`)**
- Allows existing users to log in.
- Requires email and password.
- Provides "Forgot Password?" and "Register Now" options.

### **Register Page (`/register`)**
- Enables new users to create an account.
- Requires name, email, password, and confirmation.
- Redirects to the login page upon successful registration.

## **2. Home Page (`/`)**
- Displays a banner with featured collections.
- Showcases best-selling and new arrival dresses.
- Provides navigation to Men’s, Women’s, and Kids' collections.

## **3. Collections Pages**
### **Men's Collection (`/men`)**
- Displays a variety of men's dresses.
- Users can like or purchase dresses.

### **Women's Collection (`/women`)**
- Displays a variety of women's dresses.
- Users can like or purchase dresses.

### **Kids' Collection (`/kids`)**
- Displays dresses for kids.
- Users can like or purchase dresses.

## **4. Product Detail Page (`/product/:id`)**
- Shows detailed information about a selected dress.
- Includes images, descriptions, price, and available sizes.
- Provides "Like" and "Buy Now" options.

## **5. Liked Dresses Page (`/liked`)**
- Displays dresses that users have liked.
- Allows users to remove items from the liked list or proceed to purchase.

## **6. Purchase Page (`/purchase`)**
- Lists selected dresses for checkout.
- Includes payment options and shipping details.
- Provides an order confirmation upon successful purchase.

## **7. Contact Page (`/contact`)**
- Allows users to send inquiries or feedback.
- Includes a contact form with name, email, and message fields.

## **8. Admin Pages**
### **Admin Dashboard (`/admin`)**
- Provides an overview of products and user activity.
- Displays sales statistics and inventory updates.

### **Manage Dresses**
- **View Dresses (`/admin/view`)** – Lists all dresses in the system.
- **Add Dress (`/admin/add`)** – Allows admins to add new dresses.
- **Update Dress (`/admin/update/:id`)** – Enables editing dress details.
- **Delete Dress (`/admin/delete/:id`)** – Removes a dress from the catalog.

## **Future Enhancements**
- **Order History Page** – Users can view their past purchases.
- **Search & Filters** – Improve dress searchability.
- **Wishlist Feature** – Separate wishlist from liked items.

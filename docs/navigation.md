# **Online Dress Mart - Navigation**
## **Navigation Structure**
The platform is designed for seamless user experience with intuitive navigation.

### **Public Routes (Accessible to All Users)**
- **Home Page (`/`)** – Displays featured collections and latest arrivals.
- **Men's Collection (`/men`)** – Showcases men's dresses.
- **Women's Collection (`/women`)** – Showcases women's dresses.
- **Kids' Collection (`/kids`)** – Showcases kids' dresses.
- **Contact Page (`/contact`)** – Allows users to reach out for support or inquiries.

### **User Routes (Requires Login)**
- **Sign In (`/signin`)** – Allows users to log into their accounts.
- **Register (`/register`)** – New users can create an account.
- **Liked Dresses (`/liked`)** – Displays dresses liked by the user.
- **Purchase (`/purchase`)** – Checkout page for purchasing selected items.

### **Admin Routes (Requires Admin Privileges)**
- **Admin Dashboard (`/admin`)** – Overview of platform statistics.
- **View Dresses (`/admin/view`)** – Admin can view all listed dresses.
- **Add Dress (`/admin/add`)** – Admin can add new dress listings.
- **Update Dress (`/admin/update/:id`)** – Modify existing product details.
- **Delete Dress (`/admin/delete/:id`)** – Remove dresses from the catalog.

## **Navigation Flow**
- Users land on the **Home Page**.
- They can browse collections and view dress details.
- Logged-in users can like dresses and add them to their **purchase list**.
- Admins can manage the catalog through the **Admin Dashboard**.

## **Future Enhancements**
- **Search & Filters** – Implement search functionality for quick access.
- **Order Tracking** – Users can track their purchases.
- **Dark Mode** – Toggle between light and dark themes.


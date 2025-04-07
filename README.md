# 🪑 Regalith Furniture Store
## Tools
 - **Spring boot**
 - **Spring Security**
 - **JWT**
 - **OTP Genration**
 - **Cookies to save JWT Token**
 - **FrontEnd: HTM/CSS/JS**

## 📥 Sign Up Page – Create an Account
The signup page allows new users to register by providing:
![Email Verification](Images/Screenshot%202025-04-07%20113916.png)

- **Name**
- **Email**
- **Password**

After submitting the form, a **6-digit OTP (One-Time Password)** is sent to the user’s email. The user must enter the OTP to complete the verification process. This ensures a secure and authenticated signup experience.

---

## 🔐 Login Page – Secure Access
The login page accepts:
![Email Verification](Images/Screenshot%202025-04-07%20113901.png)
- **Email**
- **Password**

Upon successful login:
- A **JWT (JSON Web Token)** is generated.
- The JWT is securely stored as an **HTTP-only cookie** for session management.
- Users are then redirected to their **personal dashboard**.

This flow ensures both **security** and **persistent authentication** across the site.

---

## 🧑‍💼 User Dashboard – Orders & Wishlist

Once logged in, users can access their **dashboard**, where they can view and manage:

![Email Verification](Images/Screenshot%202025-04-07%20113836.png)

- **Orders** categorized into:
  - 🟡 *In Progress*
  - ❌ *Canceled*
  - ✅ *Delivered*
  
- **Wishlist**:
  - Items the user has saved for future purchases.
  - Option to move items to cart or remove from wishlist.

This dashboard gives users full visibility and control over their shopping activity on Regalith.

---

## 🔐 Email Verification Code (Regalith)
![Email Verification](Images/Screenshot%202025-04-07%20114025.png)  
An email containing a 6-digit code (e.g., `626184`) sent for verifying the user’s identity. The code expires in 5 minutes to enhance security.

---

## ✅ Email Verification Popup Modal
![Verification Modal](Images/Screenshot%202025-04-07%20114012.png)  
A modal that appears post-signup to verify the user's email. Users input the 6-digit code they received to activate their account. Includes resend functionality.

---

---

## 🛋️ Regalith Home Page - Explore Collections & Sale Items
![Home Page](Images/Screenshot%202025-04-07%20113818.png)  
This is the landing page, featuring:
- **Product Collections** by room (Living, Bedroom, Kitchen, Office)
- **Sale Items** with discounts
- "Quick Add" feature to simplify shopping

The UI follows a dark theme with luxurious gold highlights.

---

## ✅ Summary

The Regalith frontend offers:
- Smooth user registration with OTP verification
- Secure login using JWT & cookies
- Clean, modern dashboard to manage orders and wishlist
- Responsive and stylish UI for all devices

---

🛠️ *Built with security, usability, and elegance in mind.*

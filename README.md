# 👥 KeenKeeper — Keep Your Friendships Alive

## 📌 Project Overview

**KeenKeeper** is a modern friendship management web app that helps users track and maintain meaningful relationships. It allows users to monitor interactions, set communication goals, and stay connected with friends through a simple and beautiful interface.


## 🛠️ Technologies Used

* ⚛️  Next.js
* 🎨 Tailwind CSS
* 📊 Recharts
* 🔥 React Icons
* 🌐 App Router (Next.js)
* 📦 Local Storage (for timeline data)

---

## ✨ Key Features

### 👥 Friend Management

* View all friends in a responsive card layout
* Each friend includes profile, tags, status, and interaction details
* Click on a friend to view detailed information

### ⚡ Quick Check-In System

* Perform actions:

  * 📞 Call
  * 💬 Text
  * 🎥 Video
* Automatically logs interactions into the Timeline
* Shows real-time toast notifications

### 📜 Timeline Tracking

* Tracks all interactions with date and type
* Displays:

  * Interaction icon (Call/Text/Video)
  * Title (e.g., "Call with Alex")
  * Date
* Optional filtering by interaction type

### 📊 Analytics Dashboard

* Visual Pie Chart showing:

  * Total Calls
  * Total Texts
  * Total Video interactions

### 📱 Fully Responsive Design

* Works seamlessly on:

  * Mobile 📱
  * Tablet 📲
  * Desktop 💻

---

## 🔧 Functional Highlights

* ✅ Dynamic routing for friend details
* ✅ Timeline stored in localStorage
* ✅ Toast notifications for interactions
* ✅ Loading state while fetching data
* ✅ Custom 404 page for invalid routes
* ✅ Active navbar highlighting

---

## 📋 Sample Friend Data

```json
{
  "id": 1,
  "name": "John Doe",
  "picture": "https://example.com/photo.jpg",
  "email": "john@example.com",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2025-07-20"
}
```

---

## 🎯 Future Improvements (Optional)

* 🔍 Search timeline entries
* 📅 Sort by newest/oldest
* 🌙 Dark mode support
* ☁️ Backend integration (database)


---

## 🚀 Deployment

This project is deployed on platforms like:

* Vercel

---

## 🙌 Acknowledgements

* Programming Hero Assignment
* Figma Design Reference

---

## 📜 License

This project is for educational purposes only.

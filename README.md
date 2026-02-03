# 🛡️ SHEGUARD - Women Safety & Emergency Response Web App 

<div align="center">

  ![SheGuard Logo](https://img.shields.io/badge/SheGuard-Safety_First-e01b84?style=for-the-badge&logo=heart&logoColor=white)

  **Smart • Strong • Safe**

  *A modern, advanced safety application designed to provide immediate assistance and peace of mind.*

  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![FontAwesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)

</div>

---

## 👤 Author Details

| 🏷️ **Name** | 🆔 **Git ID** |
| :--- | :--- |
| **Sharvari Karnase** | `sharvari25-hash` |

---

## 🌟 About The Project

**SheGuard** is a comprehensive safety tool built with a focus on speed and accessibility. In critical situations, every second counts. SheGuard provides a one-tap solution to alert trusted contacts, sound alarms, and even simulate fake calls to help users exit uncomfortable situations gracefully.

Built with a **Glassmorphism UI** aesthetic using **Tailwind CSS**, it offers a soothing yet alert visual experience with deep pink and purple gradients.

---

## 🚀 Key Features

### 🚨 SOS Emergency System
*   **Instant Activation:** A massive, pulsing SOS button for immediate access.
*   **Visual & Audio Alarm:** Triggers a loud simulated siren and flashes the screen to attract attention.
*   **Broadcast Logic:** Simulates sending SMS alerts to trusted contacts (demo mode).

### 🗺️ Travel Mode
*   **Journey Timer:** Set an estimated travel time.
*   **Auto-Trigger:** If you don't confirm "Arrived" before the timer runs out, the SOS system activates automatically.

### 📞 Fake Call
*   **Escape Mechanism:** Simulates a realistic incoming call interface.
*   **Customizable:** Looks like a real phone call to provide a valid excuse to leave a situation.

### 👥 Trusted Contacts
*   **Local Management:** Add and manage emergency contacts directly in the browser (stored in LocalStorage).
*   **Quick Access:** Easily view who will be notified in an emergency.

### 📝 Incident Reporting
*   **Log Incidents:** Report harassment, stalking, or unsafe areas.
*   **History:** Keep a record of past alerts and reports for future reference.

### 📊 Admin Dashboard
*   **Analytics:** View statistics on incidents and safety alerts.
*   **Overview:** Monitor recent activity (simulation).

---

## 🛠️ Tech Stack

*   **Frontend Structure:** HTML5
*   **Styling:** Tailwind CSS (via CDN), Custom CSS Animations
*   **Icons:** FontAwesome
*   **Logic:** Vanilla JavaScript (ES6+)
*   **Storage:** Browser LocalStorage (No backend required for demo)

---

## 💻 How to Run

Since this is a client-side web application, you don't need to install complex dependencies.

1.  **Clone or Download** this repository.
    ```bash
    git clone https://github.com/sharvari25-hash/sheguard.git
    ```
2.  **Navigate** to the project folder.
3.  **Open `index.html`** directly in your browser.
    *   *Double-click the file* OR
    *   *Right-click -> Open with Chrome/Edge/Firefox*

---

## 📂 Project Structure

```text
d:\Excelr Project\Mini Project\WomenSafteyAlert\sheguard\
├── index.html           # 🏠 Landing Page
├── README.md            # 📖 Documentation
├── css\
│   └── animations.css   # ✨ Custom Keyframe Animations
├── js\
│   ├── sos.js           # 🚨 Emergency Logic
│   └── storage.js       # 💾 LocalStorage Helper
├── pages\
│   ├── dashboard.html   # 📊 User Main Hub
│   ├── sos.html         # 🚨 Active SOS Screen
│   ├── fake-call.html   # 📞 Fake Call Simulator
│   ├── travel-mode.html # ⏱️ Journey Timer
│   ├── report.html      # 📝 Incident Form
│   ├── contacts.html    # 👥 Contact Manager
│   ├── history.html     # 📜 Activity Log
│   ├── login.html       # 🔐 Auth Simulation
│   └── signup.html      # 🆕 Registration
└── admin\
    └── admin-dashboard.html # 👮 Admin View
```

---

## ⚠️ Important Note

> **Prototype Status:** This application is a frontend prototype demonstrating the logic and UI/UX of a safety app. Data is stored locally on your device and does not connect to a real SMS gateway or emergency services API in this version.

---

<div align="center">
  <sub>Built with ❤️ by Sharvari Karnase</sub>
</div>

# 🤖 AlignHire

AI-Powered Resume & Job Description Analysis Platform

Compare resumes against job descriptions, identify skill gaps, generate ATS-optimized resumes, and prepare for interviews using Gemini AI.

## Why I Built AlignHire

While applying for internships, I noticed that candidates often submit resumes without understanding how well they match a job description. I built AlignHire to provide actionable insights, identify skill gaps, and help applicants prepare more effectively.

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Built with](https://img.shields.io/badge/AI-Gemini-blue)
![Backend](https://img.shields.io/badge/backend-Node.js%20%2B%20Express-green)
![Frontend](https://img.shields.io/badge/frontend-React.js-61DAFB)

---

## 🚧 Project Status — In Progress

> ⚠️ This project is actively under development. Features may be incomplete or subject to change.

| Module | Status |
|--------|--------|
| Project Structure & Setup | ✅ Done |
| JWT Authentication + Token Blacklisting | ✅ Done  |
| Resume Upload & Parsing |  ✅ Done |
| Skill Extraction Logic |  ✅ Done|
| JD Parser | 🟡 In Progress|
| AI-Based Skill Gap Detection (Gemini) |  ✅ Done |
| Fit Score Calculator |  ✅ Done|
| ATS-Optimized Resume Generation | 🔴 Not Started |
| Puppeteer PDF Creation | 🔴 Not Started |
| Frontend UI (React.js) | 🟡 In Progress |

---

## 💡 What is AlignHire?

**AlignHire** is a full-stack AI-powered interview preparation platform that:

- 📄 Parses your **resume** and extracts key skills & experience
- 📋 Analyzes the **Job Description (JD)** for required skills & keywords
- 🔍 Uses **Gemini AI** to detect skill gaps between your profile and the role
- 🎯 Calculates a **Fit Score** showing how well you match the JD
- 📝 Generates an **ATS-optimized resume** tailored to the job
- 📄 Exports everything as a polished **PDF using Puppeteer**
- 🔐 Secured with **JWT authentication + token blacklisting**

---

## 🎯 Problem It Solves

Most candidates apply for jobs without knowing where they fall short. AlignHire bridges that gap — identifying missing skills, optimizing your resume for ATS systems, and preparing you with targeted interview questions before you walk into the room.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js |
| **Backend** | Node.js + Express.js |
| **Authentication** | JWT + Token Blacklisting |
| **AI Engine** | Gemini API (Google) |
| **Resume Parsing** | PDF-parse / Mammoth.js |
| **PDF Generation** | Puppeteer |
| **Database** | MongoDB (Mongoose) |
| **Styling** | Tailwind CSS |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     React.js Frontend                    │
│         (Upload Resume, Paste JD, View Results)          │
└───────────────────────┬─────────────────────────────────┘
                        │  REST API (Axios)
                        ▼
┌─────────────────────────────────────────────────────────┐
│                  Node.js + Express.js                    │
│                                                          │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │   Auth      │  │   Resume     │  │  Gap Analysis  │  │
│  │   Routes    │  │   Routes     │  │   Routes       │  │
│  └──────┬──────┘  └──────┬───────┘  └───────┬────────┘  │
│         │                │                   │           │
│  ┌──────▼───────────────────────────────────▼────────┐  │
│  │              Middleware Layer                      │  │
│  │      JWT Verification + Token Blacklist Check      │  │
│  └────────────────────────┬───────────────────────────┘  │
│                           │                              │
│  ┌────────────────────────▼───────────────────────────┐  │
│  │                  Service Layer                      │  │
│  │  ┌──────────────┐    ┌─────────────────────────┐   │  │
│  │  │ Resume Parser│    │    Gemini AI Service    │   │  │
│  │  │ Skill Extract│    │    Gap Detection        │   │  │
│  │  └──────────────┘    │    ATS Resume Gen       │   │  │
│  │                      └─────────────────────────┘   │  │
│  │  ┌───────────────────────────────────────────────┐  │  │
│  │  │         Puppeteer PDF Generator               │  │  │
│  │  └───────────────────────────────────────────────┘  │  │
│  └─────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                        │
                        ▼
              ┌──────────────────┐
              │     MongoDB      │
              │  Users, Tokens,  │
              │  Analyses        │
              └──────────────────┘
```

---

## 🔐 Authentication — JWT + Token Blacklisting

```
User Login
    ↓
Server generates JWT (Access Token)
    ↓
Token stored on client (localStorage / httpOnly cookie)
    ↓
Every request → JWT verified via middleware
    ↓
On Logout → Token added to Blacklist in DB
    ↓
Blacklisted tokens rejected on all future requests
```

> **Why Token Blacklisting?**
> Standard JWTs are stateless — once issued, they're valid until expiry.
> Blacklisting solves the logout security gap by invalidating tokens server-side immediately.

---

## 🧠 AI Pipeline — How It Works

```
  📄 Resume Upload          📋 JD Input
        │                        │
        ▼                        ▼
  Resume Parser             JD Parser
  (PDF/DOCX → Text)         (Text Extraction)
        │                        │
        ▼                        ▼
  Skill Extraction ──────► Gap Detection
  (Keywords + NLP)          (Gemini AI)
                                 │
                   ┌─────────────┴──────────────┐
                   ▼                             ▼
             Fit Score (%)           Missing Skills List
                   │                             │
                   ▼                             ▼
         ATS-Optimized Resume       Interview Questions
                   │
                   ▼
         Puppeteer PDF Export
```

---

## ✨ Features

- [x] Project setup & folder structure
- [x] User registration & login (JWT)
- [x] JWT token blacklisting on logout
- [x] Resume upload (PDF / DOCX)
- [x] Resume text extraction & skill parsing
- [ ] JD input (paste or URL)
- [x] Gemini AI — skill gap detection
- [x] Fit score calculation (0–100%)
- [x] Missing skills & keyword suggestions
- [ ] ATS-optimized resume generation
- [ ] Puppeteer dynamic PDF export
- [ ] Interview question generator
- [ ] Analysis history dashboard
- [ ] Responsive React UI



---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB
- Gemini API Key — [Get it here](https://makersuite.google.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/alignhire.git
cd alignhire

# Install backend dependencies
cd server && npm install

# Install frontend dependencies
cd ../client && npm install
```

### Environment Variables

Create a `.env` file inside `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
GEMINI_API_KEY=your_gemini_api_key
```

### Run the App

```bash
# Start backend (from /server)
npm run dev

# Start frontend (from /client)
npm start
```

---

## 📌 Roadmap

| Version | Goals |
|---------|-------|
| **v0.1** | Project setup, JWT auth + blacklisting |
| **v0.2** | Resume parsing & skill extraction |
| **v0.3** | Gemini AI gap detection & fit score |
| **v0.4** | ATS resume generation + Puppeteer PDF |
| **v1.0** | Full UI, history dashboard, deployment |

---


## 📄 License

This project is licensed under the [MIT License](LICENSE).

---


Made with ❤️ by **[Harshita](https://github.com/yourusername)**

---

> ⭐ Star this repo if you find it useful — more features dropping soon!

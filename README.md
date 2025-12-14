# 🍳 AI Food Recipe Frontend

**React-based frontend** for an AI-powered food recipe application. Connects with the backend to allow users to generate personalized recipes and AI-generated dish images.  

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)  
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://www.javascript.com/)  
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT4-orange)](https://openai.com/)

---

## ✨ Features

- 🔑 **User Authentication:** Login and register via backend API  
- 🥗 Select meal type (lunch, brunch, snack, etc.)  
- 🥘 Input available ingredients and set calorie limits  
- 🤖 Display AI-generated recipes using **GPT-4 / GPT-4 Turbo**  
- 🖼 Display AI-generated images of dishes using **gpt-image-1 / DALL·E**  
- 💻 Responsive and interactive UI built with **React**  
- 🔗 Communicates with Laravel backend via RESTful API  

---

## ⚡ Quick Start

1. **Clone Repo**  
```bash
git clone https://github.com/natashamiskimovska/ai-food-recipe-front-end.git
cd ai-food-recipe-front-end
```
2. **Install Dependencies**
```bash
npm install
```
3. **Configure Environment**
- Create a .env file based on .env.example
- Set the backend API URL:
```bash
REACT_APP_API_URL=http://localhost:8000
```
4. **Start Development Server**
```bash
npm start
```
✅ App runs at http://localhost:3000
---
📬 **Usage**
- Register / Login using the backend API
- Generate Recipes:
- Select meal type
- Enter ingredients
- Optionally set a calorie limit
- Click "Generate" to fetch AI recipe and image
- View Generated Recipes with AI instructions and images
---
📝 **Demo Example**

Recipe Input:

- Meal Type: Lunch
- Ingredients: chicken, broccoli, rice
- Calories Limit: 600

Output:
- Recipe title, ingredients list, instructions
- AI-generated dish image
---
🤝 **Contributing**
- Fork the repo
- Create a branch
- Submit a pull request

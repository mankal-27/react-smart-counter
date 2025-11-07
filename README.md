# ⚛️ Smart Counter App  

A **simple yet powerful React + Vite + Tailwind** project demonstrating core React concepts — state, props, event handling, and component reusability.  

Deployed live on **GitHub Pages** 🌐  
👉 [https://mankal-27.github.io/react-smart-counter/](https://mankal-27.github.io/react-smart-counter/)

---

## 🚀 Features  

✅ Increment / Decrement counter using React state  
✅ Dynamic color changes based on value  
✅ Reusable button & display components  
✅ Clean Tailwind CSS design  
✅ Fully responsive layout  
✅ Deployed using GitHub Pages  

---

## 🧠 Concepts Covered  

| Concept | Description |
|----------|--------------|
| **Components** | Reusable UI building blocks (`Button`, `CounterDisplay`) |
| **Props** | Passing data from parent (`App`) to children |
| **useState Hook** | Managing and updating component state |
| **Event Handling** | Listening to button clicks and updating state |
| **Conditional Rendering** | Dynamic UI changes based on state |
| **TailwindCSS** | Utility-first CSS styling |
| **Vite Build Tool** | Fast bundling and hot reload |

---

## 🧱 Project Structure  

```
src/
 ├── components/
 │    ├── Button.jsx
 │    └── CounterDisplay.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/mankal-27/react-smart-counter.git
cd react-smart-counter
```

### 2️⃣ Install dependencies  
```bash
npm install
```

### 3️⃣ Run locally  
```bash
npm run dev
```
Open → [http://localhost:5173](http://localhost:5173)

---

## 🌍 Deployment (GitHub Pages)  

Build and deploy your project easily:

```bash
npm run deploy
```

Ensure your `vite.config.js` includes:
```js
export default defineConfig({
  plugins: [react()],
  base: '/react-smart-counter/',
});
```

After deployment, your app will be live at:  
```
https://<your-github-username>.github.io/react-smart-counter/
```

---

## 📦 Tech Stack  

- ⚛️ **React (Vite)**  
- 🎨 **Tailwind CSS**  
- 🧩 **gh-pages** for deployment  
- ⚙️ **JavaScript (ES6)**  

---

## 💡 Future Enhancements  

- Add custom step increment/decrement  
- Add max/min limits  
- Use a custom hook (`useCounter`)  
- Add dark/light mode toggle  

---

## 🧑‍💻 Author  

**Manjunath Kalkutagi**  
<a href="https://mankal-27.github.io/portfolio/" target="_blank">🔗 Portfolio</a>  
<a href="https://github.com/mankal-27" target="_blank">🐙 GitHub</a>  
<a href="https://linkedin.com/in/mkalkutagi" target="_blank">💼 LinkedIn</a>
---

## 🪪 License  

This project is licensed under the **MIT License** — feel free to use and modify it for learning or projects.

---

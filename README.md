# Manohar Vallabi – Portfolio

Welcome to my personal developer portfolio!
This site showcases my projects, skills, and experience as a Full Stack Developer.

React TypeScript SCSS Material-UI

---

## About Me

Hi! I'm **Manohar Vallabi**, a passionate Full Stack Developer with experience in Java, React, and modern web technologies.  
This portfolio was built with **React, TypeScript, SCSS, and Material-UI**, featuring smooth animations and a responsive design.

---

## Features

- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Apple-level smooth transitions and effects
- **Dark/Light Theme** - Dynamic theme switching
- **Interactive Components** - Timeline, projects showcase, and contact form
- **Professional UI** - Clean, modern Material-UI design
- **Performance Optimized** - Fast loading and smooth interactions

---

## Setup Instructions

1. **Clone this repository:**
   ```bash
   git clone https://github.com/manoharvallabi/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**  
   `http://localhost:3000`

---

## Deployment

This portfolio is deployed on **GitHub Pages** using the `gh-pages` package.

### **To deploy your own version:**

1. **Push the project** to your GitHub repository
2. **Install gh-pages:** `npm install --save-dev gh-pages`
3. **Add homepage** to package.json: `"homepage": "https://yourusername.github.io/reponame"`
4. **Add deploy scripts:**
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
5. **Deploy:** `npm run deploy`

### **Live Site:**
**https://manoharvallabi.github.io**

---

## Project Structure

```
src/
├── components/          # React components
│   ├── Main.tsx        # Hero section with resume modal
│   ├── Navigation.tsx  # Navigation bar
│   ├── Expertise.tsx   # Skills and expertise
│   ├── Timeline.tsx    # Work experience timeline
│   ├── Project.tsx     # Portfolio projects
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with social links
├── assets/
│   ├── images/         # Project images and logos
│   └── styles/         # SCSS styling files
└── index.tsx           # App entry point
```

---

## Customization

### **Update Personal Information:**
- **Profile details** - Edit `src/components/Main.tsx`
- **Work experience** - Modify `src/components/Timeline.tsx`
- **Projects** - Update `src/components/Project.tsx`
- **Skills** - Edit `src/components/Expertise.tsx`

### **Styling:**
- **Colors and themes** - Modify `src/index.scss`
- **Component styles** - Edit individual `.scss` files in `src/assets/styles/`

### **Logo and Branding:**
- **Favicon** - Replace `public/lblogo.svg`
- **Profile image** - Update image URL in `Main.tsx`

---

## Contact Me

- **LinkedIn:** [linkedin.com/in/v-manohar-38a0a0141](https://linkedin.com/in/v-manohar-38a0a0141)
- **GitHub:** [github.com/manoharvallabi](https://github.com/manoharvallabi)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Material-UI** for the beautiful component library
- **React Vertical Timeline** for the experience timeline
- **FontAwesome** for the icons
- **GitHub Pages** for hosting

---

**Built with React, TypeScript, and SCSS**


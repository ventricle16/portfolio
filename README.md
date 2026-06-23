# Niloy Sarkar - Modern Portfolio Website

A sleek, modern, and fully responsive portfolio website showcasing projects, research papers, work experience, and expertise.

## ✨ Features

### 🎨 Modern Design
- Dark theme with gradient effects
- Smooth animations and transitions
- Professional layout with modern UI components
- Fully responsive design (mobile, tablet, desktop)
- Clean typography and spacing

### 📑 Complete Sections
- **Hero**: Eye-catching introduction with gradient text
- **About**: Personal bio and skills showcase
- **Projects**: Featured projects with tech stack tags
- **Research Papers**: Published research work
- **Resume**: Experience and education timeline
- **Contact**: Contact form and social links
- **Footer**: Quick navigation and copyright

### 🚀 Performance & Tech
- Built with Next.js 14 (React framework)
- Tailwind CSS for styling
- Server-side rendering
- Smooth scrolling navigation
- Form validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: JavaScript

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ventricle16/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio!

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy on Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js
5. Your site is live! 🎉

## ✏️ Customization Guide

### 1. Update Personal Information
- Edit component files in `src/components/`
- Update your name, bio, skills, projects, and research papers
- Add your contact information

### 2. Add Your Projects
- Edit `src/components/Projects.js`
- Update project titles, descriptions, tags, and links

### 3. Add Research Papers
- Edit `src/components/ResearchPapers.js`
- Add your paper titles, journals, years, and links

### 4. Update Experience & Education
- Edit `src/components/Resume.js`
- Add your work experience and education details

### 5. Change Colors
- Edit `tailwind.config.js`
- Modify primary, secondary, and accent colors

### 6. Add Resume PDF
- Place `resume.pdf` in `public/` folder
- Download button works automatically

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   └── components/
│       ├── Navbar.js
│       ├── Hero.js
│       ├── About.js
│       ├── Projects.js
│       ├── ResearchPapers.js
│       ├── Resume.js
│       ├── Contact.js
│       └── Footer.js
├── public/
│   └── resume.pdf
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

MIT License - Feel free to use for your own portfolio!

---

**Built with ❤️ using Next.js & Tailwind CSS**

**Happy coding! 🚀**

# AISO Hub - AI Search Optimization Solutions

A modern, responsive web application built with Next.js 13, TypeScript, and Tailwind CSS that showcases AI Search Optimization solutions. This is a replica of the AISO Hub solutions page using the latest web technologies.

## 🚀 Features

- **Modern Architecture**: Built with Next.js 13 App Router for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Type Safety**: Full TypeScript support
- **Component-Based**: Reusable, modular React components
- **Fast Loading**: Optimized images and code splitting
- **SEO Optimized**: Meta tags and semantic HTML

## 📦 Technologies Used

- **Next.js 13** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React 18** - UI library
- **Clsx** - Class name management utility

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navigation and Footer
│   ├── page.tsx            # Home page
│   ├── solutions/
│   │   └── page.tsx        # Solutions page
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── HeroSection.tsx     # Hero section with CTA
│   ├── SolutionsGrid.tsx   # Grid of 4 solutions
│   ├── WhoItsFor.tsx       # Target audience section
│   ├── SEOAgencySection.tsx # SEO agency info
│   ├── ImplementationSection.tsx # Implementation services
│   ├── FAQSection.tsx      # FAQ with accordion
│   └── Footer.tsx          # Footer with links
```

## 🎯 Key Sections

### Home Page (`/`)
- Hero section with call-to-action
- Features showcase
- Final CTA section

### Solutions Page (`/solutions`)
- Hero section
- 4 main product cards (Audit, Foundation, Optimize, Monitor)
- 2-column "Who it's for" comparison section
- SEO agency information
- Implementation support services
- Expandable FAQ section with 4 questions

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.15.0 or higher
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Pages

- **Home** - `/` - Landing page with company overview
- **Solutions** - `/solutions` - Complete solutions showcase
- **Navigation** - Available on all pages
- **Footer** - Available on all pages

## 🎨 Design Highlights

- Clean, minimal design with focus on content
- Smooth animations and transitions
- Responsive grid layouts
- Interactive FAQ section with expand/collapse
- Mobile-optimized navigation
- Modern color scheme (black, white, gray, blue accents)

## 🔧 Customization

### Adding New Components
1. Create a new `.tsx` file in `src/components/`
2. Import and use in your pages

### Updating Styles
- Global styles: `src/app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Use Tailwind classes directly in components

### Modifying Content
- Edit component files in `src/components/`
- Update page content in `src/app/[page]/page.tsx`

## 📊 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Static site generation where possible
- CSS optimization with Tailwind CSS

## 🌐 Deployment

This project can be easily deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS
- Any Node.js hosting provider

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 License

This project is a demonstration/replica of the AISO Hub website.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize it for your own use.

## 📞 Contact

For questions or support, visit the AISO Hub website.

---

**Built with ❤️ using Next.js and modern web technologies**

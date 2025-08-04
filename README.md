# Job Board Application

A modern job board application built with Next.js, featuring a clean UI and real-time updates. Post, edit, and manage job listings with ease.

## Features

- 📝 Create and manage job listings
- 🔄 Real-time updates using RTK Query
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- ✨ Form validation with React Hook Form and Zod
- 🚀 Fast and responsive interface
- 💻 Support for remote job indicators

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) with RTK Query
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd job-board
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/                   # Next.js app directory
│   ├── components/       # Job-related components
│   ├── features/        # Redux features
│   └── page.tsx         # Main page
├── components/
│   └── ui/             # Reusable UI components
└── lib/
    └── validations/    # Zod schemas
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

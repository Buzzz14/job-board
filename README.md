# Job Board Application

A modern job board application built with Next.js, featuring a clean UI and real-time updates. Post, edit, and manage job listings with ease.

## Features

- 📝 Create and manage job listings
- 🔄 Real-time updates using RTK Query
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- ✨ Form validation with React Hook Form and Zod
- 🚀 Fast and responsive interface

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) with RTK Query
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

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
JOB-BOARD/
├── app/ # Application routes and layout (Next.js)
├── components/ # Reusable UI components
├── lib/ # Utilities and schema validations
├── redux/ # Redux Toolkit store and API slices
├── public/ # Static files (images, etc.)
├── .gitignore # Git ignore rules
├── next.config.ts # Next.js configuration
├── tsconfig.json # TypeScript configuration
├── package.json # Project metadata and dependencies
├── README.md # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

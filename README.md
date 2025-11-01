# TP AI Fundamentals

A TypeScript project implementing search algorithms (BFS, DFS, UCS)

## 📁 Project Structure
```
TP AI Fund/
├── src/                   # TypeScript source files
│   ├── bfs.ts             # Breadth-First Search implementation
│   ├── dfs.ts             # Depth-First Search implementation
│   ├── ex01.ts            # Exercise 1
│   ├── static.ts          # Static utilities
│   ├── types.ts           # Type definitions
│   ├── ucs.ts             # Uniform Cost Search implementation
│   └── utils.ts           # Utility functions
├── dist/                  # Compiled JavaScript files (generated)
├── node_modules/          # Dependencies (generated)
├── .gitignore             # Git ignore rules
├── package.json           # Project configuration
├── package-lock.json      # Dependency lock file
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if you haven't already):
```bash
   git clone <repository-url>
   cd "TP AI Fund"
```

2. **Install dependencies**:
```bash
   npm install
```

## 🔨 Building the Project

The source TypeScript files are located in the `./src` directory. To compile them to JavaScript:
```bash
npx tsc
```

This will generate compiled JavaScript files in the `./dist` directory.

### Watch Mode (Optional)

For automatic recompilation on file changes during development:
```bash
npm run dev
```

## ▶️ Running the Code

After compilation, execute any file using Node.js:
```bash
node ./dist/<filename>.js
```

### Examples
```bash
# Run BFS implementation
node ./dist/bfs.js

# Run DFS implementation
node ./dist/dfs.js

# Run UCS implementation
node ./dist/ucs.js

# Run Exercise 1
node ./dist/ex01.js
```

## 📝 Notes

- The `dist/` and `node_modules/` directories are ignored by Git
- Source maps are generated for easier debugging
- The project uses ES modules (type: "module" in package.json)

## 🛠️ Configuration

- **TypeScript Config**: `tsconfig.json` - Configured with strict type checking
- **Package Manager**: npm with dependencies locked in `package-lock.json`

## 📄 License

ISC

---

For questions or issues, please contact the project author.
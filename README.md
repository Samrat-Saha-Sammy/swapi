# Frontend Technical Activity

A comprehensive React-based frontend application using star wars API

## Tech Stack

React, TypeScript, Zustand, TailwindCSS

## Environment Variables

To run this project, the following environment variables is required, which is ny default added inside the `config/.env.development` file.

`VITE_API_URL`

## Installation

Required `yarn` and `vite` to be installed.

```bash
  npm install --global yarn
```

```bash
  yarn create vite
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Samrat-Saha-Sammy/swapi.git
```

Go to the project directory

```bash
  cd swapi
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn run dev
```

## Running Tests

To run tests, run the following command

```bash
  yarn run test
```

## Code Structure

```
└── 📁src
    └── 📁assets
    └── 📁components
        └── 📁character-card
            └── character-card.test.tsx
            └── index.tsx
        └── 📁character-detail-card
            └── character-detail-card.test.tsx
            └── index.tsx
        └── 📁character-list
            └── character-list.test.tsx
            └── index.tsx
        └── 📁pagination-bar
            └── index.tsx
            └── pagination-bar.test.tsx
        └── 📁search-bar
            └── index.tsx
            └── search-bar.test.tsx
    └── 📁pages
        └── 📁404-page
            └── 404-page.test.tsx
            └── index.tsx
        └── 📁details-page
            └── details-page.test.tsx
            └── index.tsx
        └── 📁favourites-page
            └── favourites-page.test.tsx
            └── index.tsx
        └── 📁layouts
            └── 📁header-layout
                └── header-layout.test.tsx
                └── index.tsx
            └── 📁main-layout
                └── index.tsx
                └── main-layout.test.tsx
            └── 📁navbar-layout
                └── index.tsx
                └── navbar-layout.test.tsx
        └── 📁list-page
            └── index.tsx
            └── list-page.test.tsx
        └── 📁root
            └── app.test.tsx
            └── app.tsx
    └── 📁shared
        └── 📁services
            └── 📁__mocks__
                └── index.ts
            └── endpoints.ts
            └── index.ts
            └── services.test.ts
            └── types.ts
        └── 📁utils
            └── index.ts
            └── utils.test.ts
    └── 📁stores
        └── 📁store-app
            └── 📁__mocks__
                └── index.ts
            └── index.ts
            └── types.ts
        └── 📁store-character
            └── 📁__mocks__
                └── index.ts
            └── index.ts
            └── types.ts
        └── 📁store-film
            └── 📁__mocks__
                └── index.ts
            └── index.ts
            └── types.ts
        └── 📁store-planet
            └── 📁__mocks__
                └── index.ts
            └── index.ts
            └── types.ts
        └── 📁store-starship
            └── 📁__mocks__
                └── index.ts
            └── index.ts
            └── types.ts
    └── main.css
    └── main.tsx
```

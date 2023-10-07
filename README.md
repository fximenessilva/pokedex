# Pokedex

Pokedex App is a React application that allows users to view a list of pokemons and their details. A user can add pokemons to their favorites.

## Directory Structure

The Pokedex App follows a logical directory structure that promotes organization and separation of concerns. Below is an overview of the main directories and their purposes:

- **src**: This directory contains the source code of the Pokedex app.
  - **components**: Contains reusable UI components used throughout the app.
    - **common**: Contains layout components that can be reused throughout the app.
    - **utils**: Contains components with functionality or layout that can be reused throughout the app.
    - **home**: Contains the home page.
    - **list**: Contains the list page.
    - **detail**: Contains the detail page.
  - **contexts**: Holds the Context API related files, including context providers and consumers.
  - **hooks**: Contains reusable custom hooks.
  - **routes**: Contains the routes of the app.
  - **services**: Contains the api requests for the app.
  - **utils**: Holds utility functions, helper files or constants used throughout the app.

## Architecture

The Pokedex app follows a component-based architecture using the following technologies:

- React: A JavaScript library for building user interfaces.
- Context API: A built-in feature in React for managing global state and data sharing between components.
- useReducer: A React hook for managing complex state logic
- Styled-components: A library that allows to write CSS in JS while building custom components in Reactjs.

The app's architecture promotes modularity, reusability, scalability, and maintainability of the codebase. Components are structured to handle specific functionality, and the global state management provided by the Context API and useReducer and useState ensures efficient management of the app's state.

## Installation

Use the package manager to install the packages.

```bash
cd pokedex
npm install
```

## Usage

To build the package in development mode, use the following command:

```
npm start

```

To run unit tests for the codebase, follow these steps:

```
npm test

```

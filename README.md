# 🧮 Counter Component
The Counter component is a simple React component that allows you to display a count value and perform basic count manipulation operations.

## ✅ Prerequisite
Before using the Counter component, make sure you have the following prerequisites installed:

- Node.js: >= 16.0.0
- npm: >= 7.0.0

## 🏗️ Installation

1. Clone the repository.
2. Install dependencies by running the following command:
   ```bash
   npm install

## 👨‍💻 Usage

### Development Server Setup
To start the development server, run the following command:
```bash
npm run dev
```
The application will be accessible at http://localhost:3000.


### Production Server Setup
To start the Production server, run the following command:


```bash
npm run build
```

then run 

```bash
npm start
```

This script starts the built production version of your Next.js application. When you run npm start, Next.js starts a server to serve the previously built production assets. This script is typically used in a production environment to serve your application to users.

The application will be accessible at http://localhost:3000.

## 🚩 Props
The Counter component does not accept any props.

## 🧪 Testing
To test the functionality of the Counter component use the following command
```bash
npm run cypress
```

### ℹ️ Test Instructions
All test instructions are inside the  ```app.cy.js``` file as comments. Here you can see the main E2E test cases instructions

```javascript
describe("Counter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should increase the count by 10 and display toast message", () => {
    // Test code here...
  });

  it("should reset the count to 0", () => {
    // Test code here...
  });

  it("should decrease the count by 10 and display toast message", () => {
    // Test code here...
  });
});
```

## 🎬 Demos
### Application Behaviour 

https://github.com/p4nduxcv/refactoring-srv-fe/assets/43129749/4659beee-318c-4bfe-8a7c-56dc056efc9b

### Testing Behaviour 

https://github.com/p4nduxcv/refactoring-srv-fe/assets/43129749/2442e47b-0ccc-4132-ac79-d4b43f9a4d25





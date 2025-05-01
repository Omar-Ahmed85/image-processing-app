# 🖼️ Image Processing App

![Version](https://img.shields.io/badge/version-v5.0-blue)

A Node.js + TypeScript application for uploading and processing images — especially resizing — using [Multer](https://github.com/expressjs/multer) for file handling and [Sharp](https://github.com/lovell/sharp) for image manipulation.

---

## 📁 Project Structure

```
image-processing-app/
├── build/
│   └── server/
├── spec/
│   └── support/
│       └── jasmine.mjs
├── src/
│   ├── client/
│   │   ├── assets/
│   │   └── index.html
│   └── server/
│       ├── middleware/
│       │   ├── services/
│       │   └── upload/
│       ├── routes/
│       │   ├── services/
│       │   ├── upload/
│       │   └── main.ts
│       ├── tests/
│       │   ├── helpers/
│       │   ├── services/
│       │   ├── testFiles/
│       │   ├── upload/
│       │   └── serverSpec.ts
│       └── server.ts
├── uploads/
├── processed/
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

---

## 🚀 Features

- Upload images using a Fetch API-based client
- Automatically resize uploaded images with Sharp
- Store uploaded images in a local `/uploads` folder
- List and preview images immediately after upload
- Type-safe development with TypeScript

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone "https://github.com/Omar-Ahmed85/image-processing-app.git"
cd image-processing-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
npm start
```

### 4. Access the Application

- Open your browser and access this URL:

```
http://localhost:3000/
```

> You can now upload images and see them processed and displayed instantly.

## 🧪 Running Tests

### Run Tests With Jasmine

```bash
npm run jasmine
```

---

## 📷 Example Workflow

1. User Selects an Image From Their Device.
2. JavaScript Detects The File, Using The `change` event.
3. A `FormData` Object Is Sent Using The Fetch API To The Server.
4. Server Uses [Multer](https://www.npmjs.com/package/multer) To Store The Image, and [Sharp](https://www.npmjs.com/package/sharp).
5. Response Returns The Updated Image To Be Displayed On The Frontend With Its _URL_.

---

## 📦 Scripts in `package.json`

```json
{
	"scripts": {
		"build": "npx tsc",
		"jasmine": "jasmine",
		"test": "npm run build && npm run jasmine",
		"start": "nodemon build/server/server.js",
		"format": "npx prettier . --write",
		"lint": "npx eslint ."
	}
}
```

---

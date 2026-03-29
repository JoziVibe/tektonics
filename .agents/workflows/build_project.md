---
description: Build the Tektonics Digital Gateway project
---

# Build Workflow

This workflow installs dependencies and builds the Next.js project for production.

1. **Install Dependencies**
   Run the following command to install all required npm packages:
   ```bash
   npm install
   ```

2. **Build Project**
   Run the following command to create an optimized production build:
   ```bash
   npm run build
   ```

3. **Verify Build**
   Ensure the `.next` directory is created and the build process completes without errors.

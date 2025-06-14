# Project Design Record (PDR): Automated Etsy Poster Generator

## 1. **Project Overview**

The Automated Etsy Poster Generator is a web-based system built with Next.js (using TypeScript) that allows users to input custom content (names, quotes, dates) and automatically apply it to multiple pre-designed poster layouts in various sizes. The final output includes a downloadable ZIP archive of all the generated posters.

This document outlines the system architecture, step-by-step development plan, design decisions, and technology choices to guide the development process.

---

## 2. **High-Level Milestones**

1. **Project Setup**
2. **Poster Size Management System**
3. **Rendering Engine (Graphics Processor)**
4. **Batch Export and ZIP Packaging**
5. **Frontend User Interface (Form & Progress Feedback)**
6. **Performance Optimization & UX Enhancements**

---

## 3. **Poster Size Management**

### Goals:

- Centralize all size definitions
- Support print-ready resolution (300 DPI)
- Allow easy addition and update of poster sizes

### Key Considerations:

- Use consistent naming conventions (e.g., A4, 24x36in)
- Store pixel dimensions for each size
- Group related utilities (e.g., DPI conversion, layout bounds) for reuse

---

## 4. **Rendering Engine**

### Purpose:

- Dynamically generate high-quality posters based on user input

### Technology Evaluation:

- **node-canvas:** Recommended for its drawing capabilities, text rendering, and server-side support.
- **sharp:** Efficient image transformer but limited for custom text/shape drawing.
- **Canvas API (browser):** Not ideal for server-side image generation.

### Decision:

- Use **node-canvas** for server-side poster rendering.

### Design Goals:

- Support font styling, text alignment, background color
- Abstract the layout logic from user input handling
- Generate output in PNG format with high resolution

---

## 5. **Batch Export & ZIP Packaging**

### Goals:

- Allow rendering posters in multiple sizes
- Collect all outputs into a single downloadable archive

### Technology:

- **JSZip** – lightweight and browser-compatible ZIP creation tool

### Considerations:

- Ensure naming consistency across sizes
- Use memory-efficient methods to handle large image buffers
- Consider stream-based output for better performance in production

---

## 6. **Frontend UI and User Experience**

### Objectives:

- Provide a clean and minimal form for user input
- Display progress or loading indicators during generation
- Prevent duplicate submissions and handle long-running operations

### UX Enhancements:

- Disable inputs during generation
- Display a modal or progress bar during rendering
- Provide download button after ZIP is ready

---

## 7. **Performance and Resource Handling**

### Challenges:

- High-resolution image generation is CPU and memory intensive
- Simultaneous processing for multiple users may overload server

### Strategies:

- Limit input size and rate-limit API access
- Use in-memory processing for small-to-medium workloads
- Consider job queues or background processing for larger requests

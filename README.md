# AditorX

AditorX is a fast, flexible, and fully customizable rich text editor for modern web applications. It provides a smooth writing experience with built-in formatting tools, keyboard shortcuts, and an intuitive UI. Perfect for developers who need a lightweight but powerful editor.

## 🚀 Features

- Lightweight and fast
- Supports HTML and Markdown
- Keyboard shortcuts for quick editing
- Easy integration with React, Vue, Angular, jQuery, and vanilla JavaScript
- Nested elements and collapsible headings
- Smart checkbox completion
- Developer-friendly

## 🧐 Main Features

- **Collapsible Headings:** Headings can be minimized to keep notes structured.
- **Nested Structure:** Text, bullet points, and checkboxes can be nested within each other.
- **Smart Checkboxes:** If all nested checkboxes are completed, the parent checkbox will also be marked as done (works both ways – marking a parent checkbox as done completes all its children).
- **Flexible Data Extraction:** Easily extract and structure data the way you need it.

## ⌘️ Keyboard Shortcuts

- `/` → Opens the dropdown option menu
- `#` + `space` at the start → Creates a heading
- `>` + `space` at the start → Creates a text block
- `*` + `space` at the start → Creates a checkbox
- `-` + `space` at the start → Creates a bullet point
- `Tab` → Creates a nested structure (works for text, bullet points, and checkboxes). Also used for expanding and collapsing elements.

## 🛆 Installation

### **Using npm**

```sh
npm install aditorx
```

### **Using yarn**

```sh
yarn add aditorx
```

### **Using a CDN**

For quick testing, you can use a CDN:

```html
<script src="https://unpkg.com/aditorx"></script>
```

## 💻 Initialization Examples

### **Vanilla JavaScript**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AditorX Example</title>
  </head>
  <body>
    <div id="editor-container"></div>
    <script type="module">
      import { initializeAditorX } from "aditorx";

      const editor = document.getElementById("editor-container");

      // Initialize with an empty editor
      initializeAditorX(editor, "");

      // OR Initialize with previously saved data
      // let Saved_Data_With_AditorX = "..."; // Retrieved from storage
      // initializeAditorX(editor, Saved_Data_With_AditorX);
    </script>
  </body>
</html>
```

### **React**

```jsx
import { useEffect, useRef } from "react";
import { initializeAditorX } from "aditorx";

function Editor() {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      // Initialize with an empty editor
      initializeAditorX(editorRef.current, "");

      // OR Initialize with previously saved data
      // let Saved_Data_With_AditorX = "..."; // Retrieved from storage
      // initializeAditorX(editorRef.current, Saved_Data_With_AditorX);
    }
  }, []);

  return <div ref={editorRef} className="editor-container"></div>;
}

export default Editor;
```

### **Vue.js**

```vue
<template>
  <div ref="editor" class="editor-container"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import { initializeAditorX } from "aditorx";

export default {
  setup() {
    const editor = ref(null);

    onMounted(() => {
      // Initialize with an empty editor
      initializeAditorX(editor.value, "");

      // OR Initialize with previously saved data
      // let Saved_Data_With_AditorX = "..."; // Retrieved from storage
      // initializeAditorX(editor.value, Saved_Data_With_AditorX);
    });

    return { editor };
  },
};
</script>
```

### **Angular**

#### **Template (HTML)**

```html
<div #editor class="editor-container"></div>
```

#### **Component (TypeScript)**

```ts
import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { initializeAditorX } from "aditorx";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
})
export class EditorComponent implements AfterViewInit {
  @ViewChild("editor") editor!: ElementRef;

  ngAfterViewInit() {
    // Initialize with an empty editor
    initializeAditorX(this.editor.nativeElement, "");

    // OR Initialize with previously saved data
    // let Saved_Data_With_AditorX = "..."; // Retrieved from storage
    // initializeAditorX(this.editor.nativeElement, Saved_Data_With_AditorX);
  }
}
```

## 🎯 Browser Support

- Chrome
- Firefox
- Edge
- Safari

## 🛠️ Issues & Feedback

If you encounter any issues or have feature requests, please create an issue on [GitHub](https://github.com/imranafis/aditorx/issues).

## 🐟 License

MIT License © 2024 [Imran Nafis](https://github.com/imranafis)

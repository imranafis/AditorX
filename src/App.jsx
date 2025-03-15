import { useEffect, useState, useRef } from "react";
import { initializeAditorX } from "aditorx";
import "./App.css";

export default function AditorXWebsite() {
  const aditorXRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const dummyText = ` 
      <div class="aditor">
          <div class="line"><div class="Head">
        <label class="headingLabel"></label>
                <div class="content">
                  <h3><ul class="inputContent" contenteditable="true">Your Ideas, Your Editor</ul></h3>
                </div>
        <div class="actions">
            <button class="expand">
              <i class="fa-solid fa-caret-down"></i>
            </button>
        </div>
      </div>
      </div>
            <div class="line"><div class="Head">
              <label class="pointLabel">
                  <input type="checkbox"><span class="points"><i class="fa-solid fa-circle"></i></span></label>
                <div class="content">
                  <ul class="inputContent" contenteditable="true">Plan your ideas with bullet point.</ul>
                </div>
              <div class="actionsOff">
                  <button class="expand">
                    <i class="fa-solid fa-caret-down"></i>
                  </button>
              </div>
            </div>
            <div class="sub-line-off">
              <div class="sub-Head">
                <label class="pointLabel">
                  <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                <div class="sub-content">
                  <ul class="inputSubContent" contenteditable="true"></ul>
                </div>
              </div>
            </div></div><div class="line"><div class="Head">
              <label class="checkboxLabel">
                  <input type="checkbox"><span class="unchecked"></span></label>
                <div class="content">
                  <ul class="inputContent" contenteditable="true">Stay productive with smart checkbox.</ul>
                </div>
              <div class="actions">
                  <button class="expand">
                    <i class="fa-solid fa-caret-down"></i>
                  </button>
              </div>
            </div>
            <div class="sub-line">
              <div class="sub-Head">
                <label class="checkboxLabel">
                  <input type="checkbox"><span class="unchecked"></span></label>
                <div class="sub-content">
                  <ul class="inputSubContent" contenteditable="true">Check of completed tasks.</ul>
                </div>
              </div>
            <div class="sub-Head">
        <label class="checkboxLabel">
          <input type="checkbox"><span class="checked"></span></label>
        <div class="sub-content">
          <ul class="inputSubContent" contenteditable="true">Feel accomplished.</ul>
        </div></div></div></div><div class="line"><div class="Head">
        <label class="headingLabel"></label>
                <div class="content">
                  <h3><ul class="inputContent" contenteditable="true">Organized. Efficient. Truly Yours.</ul></h3>
                </div>
        <div class="actions">
            <button class="expand">
              <i class="fa-solid fa-caret-down"></i>
            </button>
        </div>
      </div>
      </div><div class="line"><div class="Head">
              <label class="textLabel"></label>
                <div class="content">
                  <ul class="inputContent" contenteditable="true">Collapsible headings keep your notes structured.</ul>
                </div>
              <div class="actions">
                  <button class="expand">
                    <i class="fa-solid fa-caret-down"></i>
                  </button>
              </div>
            </div>
            <div class="sub-line">
              <div class="sub-Head">
                <label class="pointLabel">
                  <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                <div class="sub-content">
                  <ul class="inputSubContent" contenteditable="true">Text blocks, Checkboxes, and bullet points are also collapsible for unlimited organization.</ul>
                </div>
              </div>
            <div class="sub-Head">
        <label class="pointLabel">
           <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
         <div class="sub-content">
           <ul class="inputSubContent" contenteditable="true">Click to collapse and focus on what matters.</ul>
         </div></div></div></div><div class="line"><div class="Head">
              <label class="checkboxLabel">
                  <input type="checkbox"><span class="unchecked"></span></label>
                <div class="content">
                  <ul class="inputContent" contenteditable="true">Nested elements create clear hierarchies.</ul>
                </div>
              <div class="actions">
                  <button class="expand">
                    <i class="fa-solid fa-caret-down"></i>
                  </button>
              </div>
            </div>
            <div class="sub-line">
              <div class="sub-Head">
                <label class="checkboxLabel">
                  <input type="checkbox"><span class="unchecked"></span></label>
                <div class="sub-content">
                  <ul class="inputSubContent" contenteditable="true">Task inside tasks? No problem!</ul>
                </div>
              </div>
            <div class="sub-Head">
        <label class="pointLabel">
           <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
         <div class="sub-content">
           <ul class="inputSubContent" contenteditable="true">Structure your thoughts, Your way.</ul>
         </div></div></div></div><div class="line"><div class="Head">
        <label class="headingLabel"></label>
                <div class="content">
                  <h3><ul class="inputContent" contenteditable="true">Keyboard shortcuts</ul></h3>
                </div>
        <div class="actions">
            <button class="collapse"><i class="fa-solid fa-caret-right"></i></button>
        </div>
      </div>
      </div><div class="line collapsed"><div class="Head">
              <label class="textLabel"></label>
                <div class="content">
                  <ul class="inputContent" contenteditable="true">"<span style="font-size: 19.2px;">/</span>" -&gt; Opens the dropdown option menu.</ul>
                </div>
              <div class="actionsOff">
                  <button class="expand">
                    <i class="fa-solid fa-caret-down"></i>
                  </button>
              </div>
            </div>
            <div class="sub-line-off">
              <div class="sub-Head">
                <label class="pointLabel">
                  <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                <div class="sub-content">
                  <ul class="inputSubContent" contenteditable="true"></ul>
                </div>
              </div>
            </div></div><div class="line collapsed"><div class="Head">
              <label class="textLabel"></label>
                <div class="content">
                  <ul class="inputContent" contenteditable="true">"#" + "Space" at the start -&gt; Creates a Heading.</ul>
                </div>
              <div class="actionsOff">
                  <button class="expand">
                    <i class="fa-solid fa-caret-down"></i>
                  </button>
              </div>
            </div>
            <div class="sub-line-off">
              <div class="sub-Head">
                <label class="pointLabel">
                  <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                <div class="sub-content">
                  <ul class="inputSubContent" contenteditable="true"></ul>
                </div>
              </div>
            </div></div><div class="line collapsed"><div class="Head">
              <label class="textLabel"></label>
                <div class="content">
                  <ul class="inputContent" contenteditable="true">"&gt;" + "Space" at the start -&gt; Creates a Text box&nbsp;</ul>
                </div>
              <div class="actionsOff">
                  <button class="expand">
                    <i class="fa-solid fa-caret-down"></i>
                  </button>
              </div>
            </div>
            <div class="sub-line-off">
              <div class="sub-Head">
                <label class="pointLabel">
                  <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                <div class="sub-content">
                  <ul class="inputSubContent" contenteditable="true"></ul>
                </div>
              </div>
            </div></div><div class="line collapsed"><div class="Head">
              <label class="textLabel"></label>
                <div class="content">
                  <ul class="inputContent" contenteditable="true">"*" + "Space" at the start -&gt; Creates a Checkbox&nbsp;</ul>
                </div>
              <div class="actionsOff">
                  <button class="expand">
                    <i class="fa-solid fa-caret-down"></i>
                  </button>
              </div>
            </div>
            <div class="sub-line-off">
              <div class="sub-Head">
                <label class="pointLabel">
                  <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                <div class="sub-content">
                  <ul class="inputSubContent" contenteditable="true"></ul>
                </div>
              </div>
            </div></div><div class="line collapsed"><div class="Head">
              <label class="textLabel"></label>
                <div class="content">
                  <ul class="inputContent" contenteditable="true">"-" + "Space" at the start -&gt; Creates a Bullet point</ul>
                </div>
              <div class="actionsOff">
                  <button class="expand">
                    <i class="fa-solid fa-caret-down"></i>
                  </button>
              </div>
            </div>
            <div class="sub-line-off">
              <div class="sub-Head">
                <label class="pointLabel">
                  <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                <div class="sub-content">
                  <ul class="inputSubContent" contenteditable="true"></ul>
                </div>
              </div>
            </div></div><div class="line collapsed"><div class="Head">
              <label class="textLabel"></label>
                <div class="content">
                  <ul class="inputContent" contenteditable="true">"Tab" -&gt; Creates a nested structure (works for text, bullet points, and checkbox). Also used for expanding and collapsing elements.</ul>
                </div>
              <div class="actionsOff">
                  <button class="expand">
                    <i class="fa-solid fa-caret-down"></i>
                  </button>
              </div>
            </div>
            <div class="sub-line-off">
              <div class="sub-Head">
                <label class="pointLabel">
                  <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                <div class="sub-content">
                  <ul class="inputSubContent" contenteditable="true"></ul>
                </div>
              </div>
            </div></div></div>
       <div class="dropdownMenu" style="top: 741.6px;">
       <div class="icon headingBtn" tabindex="0">
         <span><i class="fa-solid fa-heading"></i></span>
       </div>
         <div class="icon textBtn active" tabindex="0">
           <span><i class="fa-solid fa-paragraph"></i></span>
         </div>
         <div class="icon pointBtn" tabindex="0">
           <span><i class="fa-solid fa-list"></i></span>
         </div>
         <div class="icon checkboxBtn" tabindex="0">
           <span><i class="fa-solid fa-square-check"></i></span>
         </div>
         <div class="icon indentBtn" tabindex="0">
           <span><i class="fa-solid fa-indent"></i></span>
         </div>
       </div>`;

  useEffect(() => {
    if (aditorXRef.current) {
      initializeAditorX(aditorXRef.current, dummyText);
    }
  }, []);
  useEffect(() => {
    if (aditorXRef.current) {
      initializeAditorX(aditorXRef.current, dummyText);
    }
  }, [activeSection]);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <p onClick={() => setActiveSection("")}>AditorX</p>
          <a
            href="https://github.com/imranafis/aditorx"
            target="_blank"
            rel="noopener noreferrer"
            className="version-link"
          >
            v1.4.31
          </a>
        </div>
        <div className="menuBtn">
          <p onClick={() => setActiveSection("Documentation")}>Documentation</p>
          <a
            href="https://github.com/imranafis/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </header>

      {activeSection == "" && (
        <div className="home">
          <div className="playground">
            <p className="slogan">Where Writing Meets Simplicity.</p>
            <div ref={aditorXRef} className="playground_Aditorx" />

            {/* <img src="src\lib\Screen.png" alt="" /> */}
          </div>
          <div className="footer">
            <p className="title">AditorX</p>
            <p className="slogan">Where Writing Meets Simplicity.</p>
            <p
              className="docBtn"
              onClick={() => setActiveSection("Documentation")}
            >
              Documentation
            </p>
          </div>
        </div>
      )}

      {activeSection == "Documentation" && (
        <div className="docContainer">
          <div className="documentation">
            <h1>AditorX</h1>
            <p>
              AditorX is a fast, flexible, and fully customizable rich text
              editor for modern web applications. It provides a smooth writing
              experience with built-in formatting tools, keyboard shortcuts, and
              an intuitive UI. Perfect for developers who need a lightweight but
              powerful editor.
            </p>

            <h2>🚀 Features</h2>
            <ul>
              <li>Lightweight and fast</li>
              <li>Supports HTML and Markdown</li>
              <li>Keyboard shortcuts for quick editing</li>
              <li>
                Easy integration with React, Vue, Angular, jQuery, and vanilla
                JavaScript
              </li>
              <li>Nested elements and collapsible headings</li>
              <li>Smart checkbox completion</li>
              <li>Developer-friendly</li>
            </ul>

            <h2>🧐 Main Features</h2>
            <ul>
              <li>
                <b>Collapsible Headings:</b> Headings can be minimized to keep
                notes structured.
              </li>
              <li>
                <b>Nested Structure:</b> Text, bullet points, and checkboxes can
                be nested within each other.
              </li>
              <li>
                <b>Smart Checkboxes:</b> If all nested checkboxes are completed,
                the parent checkbox will also be marked as done.
              </li>
              <li>
                <b>Flexible Data Extraction:</b> Easily extract and structure
                data the way you need it.
              </li>
            </ul>

            <h2>⌘️ Keyboard Shortcuts</h2>
            <ul>
              <li>
                <code>/</code> → Opens the dropdown option menu
              </li>
              <li>
                <code>#</code> + <code>space</code> → Creates a heading
              </li>
              <li>
                <code>&gt;</code> + <code>space</code> → Creates a text block
              </li>
              <li>
                <code>*</code> + <code>space</code> → Creates a checkbox
              </li>
              <li>
                <code>-</code> + <code>space</code> → Creates a bullet point
              </li>
              <li>
                <code>Tab</code> → Creates a nested structure
              </li>
            </ul>

            <h2>🛆 Installation</h2>
            <h3>Using npm</h3>
            <pre>
              <code>npm install aditorx</code>
            </pre>
            <h3>Using yarn</h3>
            <pre>
              <code>yarn add aditorx</code>
            </pre>
            <h3>Using a CDN</h3>
            <pre>
              <code>{`<script src="https://unpkg.com/aditorx"></script>`}</code>
            </pre>

            <h2>💻 Initialization Examples</h2>
            <h3>Vanilla JavaScript</h3>
            <pre>
              <code>{`import { initializeAditorX } from "aditorx";

const editor = document.getElementById("editor-container");
initializeAditorX(editor, "");`}</code>
            </pre>

            <h3>React</h3>
            <pre>
              <code>{`import { useEffect, useRef } from "react";
import { initializeAditorX } from "aditorx";

function Editor() {
  const editorRef = useRef(null);
  useEffect(() => {
    if (editorRef.current) {
      initializeAditorX(editorRef.current, "");
    }
  }, []);
  return <div ref={editorRef} className="editor-container"></div>;
}`}</code>
            </pre>

            <h2>🎯 Browser Support</h2>
            <ul>
              <li>Chrome</li>
              <li>Firefox</li>
              <li>Edge</li>
              <li>Safari</li>
            </ul>
          </div>
          <div className="footer">
            <p>
              If you encounter any issues or have feature requests, please
              create an issue on{" "}
              <a href="https://github.com/imranafis/aditorx/issues">GitHub</a>.
            </p>

            <p>
              MIT License © 2024{" "}
              <a href="https://github.com/imranafis">Imran Nafis</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

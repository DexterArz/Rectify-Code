import React, { useRef, useState } from "react";
import "../assets/Styles/mainEditor.css";
import Files from "./Files";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const MainEditor = () => {
 const editorRef = useRef()
  const [EditroInput, setEditroInput] = useState("");
  const editorMount = (editor, monaco) =>{
    editorRef.current= editor;
    editor.focus();
  }
  return (
    <div id="container1">
      <main>
        <div id="code-space">
          <Editor

            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            value={EditroInput}
            nChange={(value) => setEditroInput(value)}
            onMount={editorMount}
          />
        </div>
        <div id="output">
          <div id="fileContainer">
            <Files />
            <Files />
          </div>
          <div id="termux">{EditroInput}</div>
        </div>
      </main>
    </div>
  );
};

export default MainEditor;

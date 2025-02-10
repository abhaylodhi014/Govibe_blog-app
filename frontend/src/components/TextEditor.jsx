"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

// Dynamically import react-quill to fix SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ value, onChange }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure component is mounted before rendering
  }, []);

  if (!mounted) return <div>Loading Editor...</div>;

  return <ReactQuill value={value} onChange={onChange} theme="snow" />;
};

export default TextEditor;

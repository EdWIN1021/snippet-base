"use client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface NoteProps {
  content: string;
}

const Note: React.FC<NoteProps> = ({ content }) => {
  return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>;
};

export default Note;

import { useParams } from "react-router-dom";

const Note = () => {
  const params = useParams();
  return <div>note {params.noteId}</div>;
};

export default Note;

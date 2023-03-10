import { Routes, Route } from "react-router-dom";
import { Home } from "pages/home/Home";
import { Character } from "pages/character/Character";
import { NotFound } from "pages/notFound/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="character" element={<Character />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

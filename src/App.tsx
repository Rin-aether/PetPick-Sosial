import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { LoginPage } from "./routes/LoginPage";
import { ProfilePage } from "./routes/ProfilePage";
import { GallelyPage } from "./routes/GalleryPage";
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/gallery" element={<GallelyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

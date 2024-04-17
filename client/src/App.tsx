import { Route, BrowserRouter, Routes } from "react-router-dom";
import { IntroductionPage } from "./pages/introduction";
import { SignupForm } from "./pages/signup";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { IntroductionPage } from "./pages/introduction";
import { SignupForm } from "./pages/signup";
import { Toaster } from "@/components/ui/toaster";
import { LoginForm } from "./pages/login";
import Common from "./components/layouts/common";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Common />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

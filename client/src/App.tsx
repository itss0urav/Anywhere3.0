import { Route, BrowserRouter, Routes } from "react-router-dom";
import { IntroductionPage } from "./pages/introduction";
import { SignupForm } from "./pages/signup";
import { Toaster } from "@/components/ui/toaster";
import { LoginForm } from "./pages/login";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

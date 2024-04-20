import { Route, BrowserRouter, Routes } from "react-router-dom";
import { IntroductionPage } from "./pages/introduction";
import { SignupForm } from "./pages/signup";
import { Toaster } from "@/components/ui/toaster";
import { LoginForm } from "./pages/login";
import { CreatePostFormPage } from "./pages/create-post";
import { CreatCommunityFormPage } from "./pages/create-community";
import HomePage from "./pages/home";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/post/create" element={<CreatePostFormPage />} />
          <Route path="/community/create" element={<CreatCommunityFormPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

import { SparklesCore } from "@/components/ui/SparklesCore";
import { Links } from "@/shared/styles/Links";

export function IntroductionPage() {
  return (
    <>
      <div className="flex justify-end bg-black gap-10 p-4">
        <Links to="/SignUp">SignUp</Links>
        <Links to="/LogIn">LogIn</Links>
        <Links to="/Help">Help</Links>
      </div>
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <h1 className="responsive-text font-bold text-center text-white relative z-20">
          Anywhere
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </>
  );
}

import { Navbar } from "@/components/navbar";
import Footer from "../ui/footer";
import { cn } from "@/utils/cn";

export function CommonLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className, "max-w-screen ")}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

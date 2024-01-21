import About from "@/components/about";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <About />
    </div>
  );
}

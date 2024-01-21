import About from "@/components/about";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col pt-16 sm:w-1/3 space-y-8 min-h-screen">
      <Header />
      <About />
    </div>
  );
}

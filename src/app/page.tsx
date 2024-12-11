import Header from "./components/layout/Hearder";
import IntroSection from "./components/IntroSection";
import SearchSection from "./components/SearchSection";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen w-full py-10 ">
        <div className="absolute inset-0 bg-[url('/spidermanBG.jpeg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 w-full flex flex-col items-center gap-14">
          <Header />
          <IntroSection />
          <SearchSection />
        </div>
      </div>
    </div>
  );
}

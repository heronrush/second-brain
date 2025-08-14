import Hero from "../components/landing/Hero";
import Topbar from "../components/landing/Topbar";

export default function LandingPage() {
  return (
    <div className="h-screen bg-linear-to-b from-[#eef2f7] to-[#cfe4ff]">
      <Topbar />
      <Hero />
    </div>
  );
}

import Navbar from "~/components/Navbar";
// @ts-ignore: no type declarations for PixelBlast.jsx
import PixelBlast from "~/components/PixelBlast";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import type { Resume } from "../../types";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
   const { auth } = usePuterStore();
  const location =useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  },[auth.isAuthenticated])
  return (
    <main className="relative bg-[url('/images/bg-main.svg')] bg-cover overflow-hidden">
  <Navbar />
      {/* PixelBlast Effect Section */}
      <div style={{ width: "100%", height: "150px", position: "relative" }}>
        <PixelBlast
          variant="diamond"
          pixelSize={6}
          color="#f0a3ab"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Navbar */}
    

      {/* Page Content */}
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>
      
{resumes && resumes.length > 0 && (
  <div className="resumes-section">
  {resumes.map((resume: Resume) => (
    <ResumeCard key={resume.id} resume={resume} />
  ))}
  </div>
)}
      
</section>
    </main>
  );
}

import Hero from "./components/Hero";
import FeaturedBrands from "./components/FeaturedBrands";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutSection from "./components/AboutSection";
import CocktailSection from "./components/CocktailSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedBrands />
      <FeaturedProducts />
      <AboutSection />
      <CocktailSection />
    </>
  );
}

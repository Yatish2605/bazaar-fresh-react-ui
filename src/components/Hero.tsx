
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 overflow-hidden">
      {/* Background gradient and image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25" />
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Fresh Produce Delivered to Your Doorstep
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Shop the best organic fruits and vegetables from local farmers, 
            harvested fresh and delivered straight to your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/products">
              <Button 
                size="lg"
                className="bg-bazaar-green hover:bg-bazaar-green-dark text-white font-semibold px-8 shine hover-shadow-grow"
              >
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 font-semibold px-8 hover-shadow-grow"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute bottom-0 right-0 w-1/3 h-40 bg-gradient-to-tl from-bazaar-green-light/30 to-transparent blur-2xl" />
    </section>
  );
};

export default Hero;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  // Listen for scroll events to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock function to simulate adding to cart
  const addToCart = () => {
    setCartItemCount(prev => prev + 1);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-bazaar-green font-poppins">Farmer<span className="text-bazaar-orange">Bazaar</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-bazaar-green transition-colors">Home</Link>
            <Link to="/products" className="font-medium hover:text-bazaar-green transition-colors">Products</Link>
            <Link to="/about" className="font-medium hover:text-bazaar-green transition-colors">About Us</Link>
            <Link to="/contact" className="font-medium hover:text-bazaar-green transition-colors">Contact</Link>
          </nav>

          {/* Search & Cart for desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search products..." 
                className="w-40 lg:w-64 pl-10 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>
            
            <div className="flex items-center space-x-2">
              <Link to="/products">
                <Button className="bg-bazaar-green hover:bg-bazaar-green/90 text-white">
                  BUY
                </Button>
              </Link>
              
              <Link to="/products">
                <Button className="bg-bazaar-orange hover:bg-bazaar-orange/90 text-white">
                  SELL
                </Button>
              </Link>
            </div>

            <Link to="/auth">
              <Button variant="ghost" size="icon" className="relative">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            <Button variant="ghost" size="icon" className="relative" onClick={addToCart}>
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-bazaar-orange text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-bazaar-green transition-colors">Home</Link>
              <Link to="/products" className="font-medium hover:text-bazaar-green transition-colors">Products</Link>
              <Link to="/about" className="font-medium hover:text-bazaar-green transition-colors">About Us</Link>
              <Link to="/contact" className="font-medium hover:text-bazaar-green transition-colors">Contact</Link>
              <Link to="/auth" className="font-medium hover:text-bazaar-green transition-colors">Login / Sign Up</Link>
              
              <div className="flex space-x-2 pt-2">
                <Link to="/products" className="flex-1">
                  <Button className="w-full bg-bazaar-green hover:bg-bazaar-green/90 text-white">
                    BUY
                  </Button>
                </Link>
                
                <Link to="/products" className="flex-1">
                  <Button className="w-full bg-bazaar-orange hover:bg-bazaar-orange/90 text-white">
                    SELL
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <div className="relative flex-1 mr-2">
                <Input 
                  type="search" 
                  placeholder="Search products..." 
                  className="w-full pl-10 rounded-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              </div>
              
              <div className="flex items-center space-x-2">                
                <Button variant="ghost" size="icon" className="relative" onClick={addToCart}>
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-bazaar-orange text-white text-xs font-bold px-2 py-1 rounded-full">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

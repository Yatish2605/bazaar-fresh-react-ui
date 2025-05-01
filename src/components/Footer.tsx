
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Farmer Bazaar</h3>
            <p className="text-gray-600 mb-4">
              We connect local farmers directly with consumers, providing fresh, 
              organic produce while supporting sustainable farming practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-bazaar-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-bazaar-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-bazaar-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-bazaar-green transition-colors">About Us</a>
              </li>
              <li>
                <a href="/products" className="text-gray-600 hover:text-bazaar-green transition-colors">Shop</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-bazaar-green transition-colors">Blog</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-bazaar-green transition-colors">FAQ</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-bazaar-green transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/delivery" className="text-gray-600 hover:text-bazaar-green transition-colors">Delivery Information</a>
              </li>
              <li>
                <a href="/returns" className="text-gray-600 hover:text-bazaar-green transition-colors">Returns Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-bazaar-green transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-bazaar-green transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p>123 Farm Road, Harvest Valley</p>
              <p>Greenfield, CA 95463</p>
              <p>Email: <a href="mailto:info@farmerbazaar.com" className="hover:text-bazaar-green transition-colors">info@farmerbazaar.com</a></p>
              <p>Phone: <a href="tel:+15551234567" className="hover:text-bazaar-green transition-colors">(555) 123-4567</a></p>
            </address>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Farmer Bazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

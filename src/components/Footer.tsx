import { Link } from 'react-router-dom';
import { Camera, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Camera className="h-6 w-6 text-accent" />
              <span>PixelMarket</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium digital images for your creative projects. Royalty-free, high-quality photography.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/gallery?category=nature" className="hover:text-accent transition-colors">Nature</Link></li>
              <li><Link to="/gallery?category=business" className="hover:text-accent transition-colors">Business</Link></li>
              <li><Link to="/gallery?category=abstract" className="hover:text-accent transition-colors">Abstract</Link></li>
              <li><Link to="/gallery?category=people" className="hover:text-accent transition-colors">People</Link></li>
              <li><Link to="/gallery?category=technology" className="hover:text-accent transition-colors">Technology</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/licensing" className="hover:text-accent transition-colors">Licensing</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for new images and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="h-9" />
              <Button size="sm" variant="accent">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PixelMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

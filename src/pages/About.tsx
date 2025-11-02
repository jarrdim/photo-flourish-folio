import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Camera, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">About PixelMarket</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted source for premium digital photography since 2024
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              We believe that every creative project deserves access to high-quality, 
              professionally curated images. PixelMarket connects talented photographers 
              with creators worldwide, making premium photography accessible to everyone.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Camera className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  Every image is professionally reviewed and meets our high standards
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Supporting photographers and creators in their creative journey
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Curated collections that inspire and elevate your projects
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  Driven by love for photography and creative expression
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Licensing */}
        <section className="py-16" id="licensing">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Licensing Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Standard License</h3>
                <p className="text-muted-foreground mb-2">
                  Perfect for most personal and commercial projects:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Use in websites, social media, and digital marketing</li>
                  <li>Print up to 500,000 copies</li>
                  <li>No attribution required</li>
                  <li>Cannot resell or redistribute as-is</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Extended License</h3>
                <p className="text-muted-foreground mb-2">
                  For unlimited commercial use and merchandise:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Everything in Standard License</li>
                  <li>Unlimited prints and impressions</li>
                  <li>Use on merchandise for resale</li>
                  <li>Transferable to clients</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

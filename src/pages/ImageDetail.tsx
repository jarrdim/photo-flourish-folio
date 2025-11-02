import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ImageCard } from '@/components/ImageCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Download, Share2, Heart, ZoomIn } from 'lucide-react';
import { sampleImages } from '@/data/images';

const ImageDetail = () => {
  const { id } = useParams();
  const image = sampleImages.find(img => img.id === id);
  
  if (!image) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Image Not Found</h1>
            <Button asChild>
              <Link to="/gallery">Back to Gallery</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedImages = sampleImages
    .filter(img => img.category === image.category && img.id !== image.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-accent">Home</Link>
            {' / '}
            <Link to="/gallery" className="text-muted-foreground hover:text-accent">Gallery</Link>
            {' / '}
            <span className="capitalize">{image.category}</span>
            {' / '}
            <span>{image.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Image Preview */}
            <div>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4 relative group">
                <img
                  src={image.preview}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ZoomIn className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Image Details */}
            <div>
              <div className="mb-6">
                <Badge className="mb-2 capitalize">{image.category}</Badge>
                <h1 className="text-4xl font-bold mb-4">{image.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {image.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Image Info */}
              <Card className="p-6 mb-6">
                <h3 className="font-semibold mb-4">Image Details</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Resolution</dt>
                    <dd className="font-medium">{image.resolution}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">File Size</dt>
                    <dd className="font-medium">{image.fileSize}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Formats</dt>
                    <dd className="font-medium">{image.format}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Orientation</dt>
                    <dd className="font-medium capitalize">{image.orientation}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">License</dt>
                    <dd className="font-medium">{image.license}</dd>
                  </div>
                </dl>
              </Card>

              {/* Pricing */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Choose Your License</h3>
                
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Standard License</h4>
                        <p className="text-sm text-muted-foreground">
                          For personal and commercial use
                        </p>
                      </div>
                      <span className="text-2xl font-bold">${image.price}</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      <li>• Use in digital and print media</li>
                      <li>• Up to 500,000 impressions</li>
                      <li>• Non-transferable</li>
                    </ul>
                    <Button variant="accent" className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Extended License</h4>
                        <p className="text-sm text-muted-foreground">
                          For unlimited commercial use
                        </p>
                      </div>
                      <span className="text-2xl font-bold">${image.extendedPrice}</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      <li>• Unlimited impressions</li>
                      <li>• Merchandise and resale rights</li>
                      <li>• Transferable license</li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  <Link to="/licensing" className="underline hover:text-accent">
                    Learn more about licensing
                  </Link>
                </p>
              </Card>
            </div>
          </div>

          {/* Related Images */}
          {relatedImages.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-6">Similar Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedImages.map((img) => (
                  <ImageCard key={img.id} image={img} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ImageDetail;

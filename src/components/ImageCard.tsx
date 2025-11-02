import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/data/images';

interface ImageCardProps {
  image: Image;
}

export const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <Card className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all">
      <Link to={`/image/${image.id}`}>
        <div className="aspect-[4/3] bg-muted relative overflow-hidden">
          <img
            src={image.thumbnail}
            alt={image.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
            <Button size="sm" variant="secondary" onClick={(e) => e.preventDefault()}>
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/image/${image.id}`}>
          <h3 className="font-semibold mb-1 hover:text-accent transition-colors">
            {image.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-3 capitalize">
          {image.category}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${image.price}</span>
          <Button size="sm" variant="accent">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

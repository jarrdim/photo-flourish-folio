import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

interface CategoryCardProps {
  name: string;
  slug: string;
  count: number;
}

export const CategoryCard = ({ name, slug, count }: CategoryCardProps) => {
  return (
    <Link to={`/gallery?category=${slug}`}>
      <Card className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all">
        <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{count} images</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

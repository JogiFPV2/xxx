import { PackageSearch } from "lucide-react";
import { ProductImage } from "./product-image";

interface Product {
  id: number;
  name: string;
  manufacturer: string;
  dimensions: string;
  stock: number;
  image: string;
  category: string;
}

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-md border p-8 text-center">
        <PackageSearch className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">Brak produktów</h3>
        <p className="text-sm text-muted-foreground">
          Nie znaleziono żadnych produktów w tej kategorii.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <div className="p-4">
        <div className="grid grid-cols-[160px_2fr_1fr_1fr_1fr] gap-4 font-semibold">
          <div>Zdjęcie</div>
          <div>Nazwa</div>
          <div>Producent</div>
          <div>Wymiary</div>
          <div>Stan magazynowy</div>
        </div>
      </div>
      <div className="border-t" />
      <div className="p-4 space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-[160px_2fr_1fr_1fr_1fr] gap-4 items-center"
          >
            <ProductImage src={product.image} alt={product.name} />
            <div className="font-medium">{product.name}</div>
            <div className="text-muted-foreground">{product.manufacturer}</div>
            <div className="text-muted-foreground">{product.dimensions}</div>
            <div className="text-muted-foreground">{product.stock} szt.</div>
          </div>
        ))}
      </div>
    </div>
  );
}

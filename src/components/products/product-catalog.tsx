import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CategorySidebar } from "./category-sidebar";
import { ProductTable } from "./product-table";

const categories = [
  { id: "all", name: "Wszystkie produkty" },
  { id: "caskets", name: "Trumny" },
  { id: "urns", name: "Urny" },
  { id: "accessories", name: "Akcesoria" },
];

const products = [
  {
    id: 1,
    name: "Trumna Dębowa Classic",
    manufacturer: "WoodCraft",
    dimensions: "200x80x60 cm",
    stock: 5,
    image: "https://dummyimage.com/160x90/666/fff&text=Trumna",
    category: "caskets",
  },
  {
    id: 2,
    name: "Urna Marmurowa Biała",
    manufacturer: "StoneArt",
    dimensions: "25x15x15 cm",
    stock: 12,
    image: "https://dummyimage.com/160x90/666/fff&text=Urna",
    category: "urns",
  },
];

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="flex h-screen bg-background">
      <CategorySidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="flex-1 p-6">
        <Card>
          <ProductTable products={filteredProducts} />
        </Card>
      </div>
    </div>
  );
}

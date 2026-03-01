export interface ProductImage {
  quality: "q30" | "q50" | "q75" | "q100";
  url: string;
  public_id: string;
}

export interface PaperSpecs {
  gsm: number;
  height: number;
  width: number;
  unit: "cm" | "inch";
}

export interface Pricing {
  originalPrice: number;
  salePrice: number;
  totalSaving: number;
}

export interface Product {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  pricing: Pricing;
  stock: number;
  stockStatus: "in_stock" | "out_of_stock";
  status: "active" | "inactive";
  isActive: boolean;
  paperSpecs: PaperSpecs;
  images: {
    primary: ProductImage[];
  };
  gallery: string[];
  productCollection: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
  totalSold?: number;
}

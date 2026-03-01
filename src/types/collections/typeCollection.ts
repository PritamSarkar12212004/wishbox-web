export interface CoverImage {
  public_id: string;
  url: string;
  _id: string;
}

export interface theme {
  primaryColor: string;
  secondaryColor: string;
}
export interface TypeCollection {
  categoryName: string;
  coverImages: CoverImage[];
  subtitle: string;
  title: string;
  _id: string;
  theme: theme;
  totalProducts: number;
}

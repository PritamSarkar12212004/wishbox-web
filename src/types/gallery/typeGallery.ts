export interface Version {
  _id: string;
  public_id: string;
  quality: "q50" | "q100";
  url: string;
}

export interface typeGallery {
  _id: string;
  createdAt: string;
  updatedAt: string;
  versions: Version[];
}

export interface Category {
  id: number;
  attributes: {
    name: string;
  };
}
export interface UpdatedTrash {
  id: number;
  attributes: {
    name: string;
    media: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
}

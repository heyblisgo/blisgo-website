export interface Category {
  id: string;
  name: string;
  trashWikis: {
    id: string;
    name: string;
    mediaData: {
      attributes: {
        formats: { thumbnail: { url: string } };
      };
    }[];
  }[];
}

export interface CategoryRes {
  id: string;
  attributes: {
    name: string;
    trash_wikis: {
      data: {
        id: string;
        attributes: {
          name: string;
          media: {
            data: {
              attributes: {
                formats: { thumbnail: { url: string } };
              };
            }[];
          };
          seo: {
            canonicalURL: string;
            slug: string;
          }[];
        };
      }[];
    };
  };
}

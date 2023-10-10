export interface News {
  id: string;
  attributes: {
    title: string;
    contents: string;
    published: string;
    media: {
      data: {
        id: string;
        attributes: {
          formats: { small: { url: string } };
        };
      }[];
    };
  };
}
export interface NewsList {
  data: News[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

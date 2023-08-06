export interface Wiki {
  id: string;
  name: string;
  tags: string[];
  recycle: boolean;
  process: string[];
  tip: string[];
  qna: string[];
  description: string;
  image: string;
  sort: Sort;
}

export interface Sort {
  name: string;
  description: string;
  image: string;
}

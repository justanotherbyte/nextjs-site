export type Article = {
  slug: string;
  title: string;
  description: string;
  created_at: Date;
  published: boolean;
  content: string;
};

export type Experience = {
  id: number;
  position: string;
  companyName: string;
  companyLink: string;
  companyIcon: string;
  startedAt: string;
  endedAt: string;
  description: string;
};

export type Book = {
  name: string;
  author: string;
  description: string;
  image: string;
};

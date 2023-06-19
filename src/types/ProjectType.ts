type ProjectSocialLinsk = {
  git: string;
  site: string;
};

export type ProjectType = {
  id: number;
  title: string;
  images: string[];
  links: ProjectSocialLinsk;
  tools: string[];
  description: string;
};

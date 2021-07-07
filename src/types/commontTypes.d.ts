interface IImage {
  uri: string;
}

interface ICategory {
  name: string;
}

interface IExpert {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
}

export interface IProperty {
  name: string;
  image: IImage;
  categories: Array<ICategory>;
  experts: Array<IExpert>;
}

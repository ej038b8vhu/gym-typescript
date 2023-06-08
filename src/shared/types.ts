//enum is special because it does exist after compile end
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element,
  title: string,
  description: string
}

//add ? to make type optional
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
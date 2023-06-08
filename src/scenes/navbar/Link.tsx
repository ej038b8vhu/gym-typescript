import { SelectedPage } from "@/shared/types";

//use type or interface => as long as you constant in whole project
type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;
  // 'as' treat target to specific enum

  return (
    <a
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </a>
  );
};

export default Link;

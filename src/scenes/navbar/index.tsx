import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "@/scenes/navbar/Link";
import ActionButton from "@/shared/ActionButton";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
          {/* LEFT SIDE */}
          <img src={Logo} alt="logo" />

          {/* RIGHT SIDE */}
          <div className={`${flexBetween} hidden w-full md:flex`}>
            {/* INNER LEFT SIDE */}
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link
                page="HOME"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>

            {/* INNER RIGHT SIDE */}
            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <ActionButton setSelectedPage={setSelectedPage}>
                Become a Member
              </ActionButton>
            </div>
          </div>

          {/* MOBILE BURGER */}
          <button
            className="rounded-full bg-secondary-500 p-2 md:hidden"
            onClick={() => setIsMenuToggle(!isMenuToggle)}
          >
            {!isMenuToggle && <Bars3Icon className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>
      {/* MOBILE NAV OPTIONS */}
      {isMenuToggle && (
        <div className="fixed bottom-0 right-0 z-30 h-full w-[300px] bg-primary-100 drop-shadow-xl md:hidden">
          <div className="flex flex-col gap-10 px-20 py-32 text-2xl font-bold">
            <XMarkIcon
              className="absolute right-8 top-8 h-6 w-6 cursor-pointer"
              onClick={() => setIsMenuToggle(!isMenuToggle)}
            />
            <Link
              page="HOME"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 gap-16 md:flex">
        {/* FIRST PART */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Congue vulputate conubia dictumst ultrices iaculis pharetra diam
            purus non. Condimentum nostra quis integer platea consequat per
            cubilia sodales at nunc. Eros congue per consectetuer ex sem nam
            placerat accumsan metus.
          </p>
          <p>© 2023 Evogym All Rights Reserved.</p>
        </div>

        {/* SECOND */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Sapien arcu blandit ornare congue</p>
          <p className="my-5">Ac accumsan euismod non dis</p>
          <p>Laoreet venenatis nostra torquent</p>
        </div>

        {/* THIRD */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Massa morbi ligula et iaculis</p>
          <p>(333) 825-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

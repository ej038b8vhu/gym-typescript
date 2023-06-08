type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[340px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 rounded-xl`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="mb-4 text-2xl">{name}</p>
        <p>{description}</p>
      </div>
      <img src={`${image}`} alt={image} className="rounded-xl" />
    </li>
  );
};

export default Class;

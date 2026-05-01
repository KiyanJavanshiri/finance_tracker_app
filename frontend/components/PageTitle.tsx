const PageTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <h2 className="mb-1 text-2xl font-semibold leading-normal text-black capitalize">
        {title}
      </h2>
      <p className="text-base font-normal leading-normal text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default PageTitle;

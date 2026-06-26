type PageTitleProps = {
  title: string;
  description?: string;
};

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="bg-[#ebe3d8] flex min-h-56 flex-col items-center justify-center">
      <h2 className="text-3xl text-primary">{title}</h2>
      <p className="max-w-md text-gray-600 text-center mt-2">{description}</p>
    </div>
  );
};

export default PageTitle;

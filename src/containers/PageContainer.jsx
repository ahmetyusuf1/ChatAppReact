const PageContainer = ({ children }) => {
  return (
    <div className="h-screen bg-[#242424] flex justify-center items-center">
      {children}
    </div>
  );
};

export default PageContainer;

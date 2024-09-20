export interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="container mx-auto items-center flex sm:flex-row flex-col">
      {children}
    </div>
  );
};

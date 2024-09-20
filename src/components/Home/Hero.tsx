import { MainContainer } from '../MainContainer';

export const HomeHero = () => {
  return (
    <div
      className="hero min-h-screen min-w-full items-center"
      
    >
      <MainContainer>
        <div className="hero-overlay bg-opacity-60 items-center"></div>
        <div className="hero-content text-neutral-content text-center w-full">
          <div className="w-full">
            <h1 className="mb-5 text-5xl font-bold">Home</h1>
           
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

import react from "react";
// hooks
import useFetch from './Hooks/useFetch'
// components
import Header from "./components/Header";
import Main from "./components/Main";
import HeroSection from "./components/HeroSection";
import SliderWrapper from "./components/SliderWrapper";
import IntroSlidesTitle from "./components/IntroSlidesTitle";
import Slide from "./components/Slide";
import Title from "./components/Title";
import Image from "./components/Image";
import Loading from "./components/Loading";
// img
import logoTwo from "./assets/images/icons/logo-2.png";



function App() {
  const {data , isLoading} = useFetch("https://valorant-api.com/v1/agents");

  return (
    <>
      {isLoading ? (
          <Loading />
      ) : (
        <>
          <Header />
          <Main>
            <HeroSection>
              <SliderWrapper>
                <IntroSlidesTitle>
                  <Title cName="agents" title="AGENTS" />
                  <Image
                    cName="logo-agents"
                    width="40px"
                    src={logoTwo}
                    alt="logo"
                  />
                </IntroSlidesTitle>

                {data && data.map((item, index) => {
                  return (
                    item.fullPortraitV2 !== null && (
                      <Slide
                        name={item.displayName}
                        img={item.fullPortraitV2}
                        powersIcon={item.abilities}
                        key={index}
                      />
                    )
                  );
                })}
              </SliderWrapper>
            </HeroSection>
          </Main>
        </>
      )}
    </>
  );
}

export default App;

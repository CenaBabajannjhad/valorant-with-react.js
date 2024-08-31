import { useEffect, useState } from "react";
// components
import Header from "./components/Header";
import Main from "./components/Main";
import HeroSection from "./components/HeroSection";
import SliderWrapper from "./components/SliderWrapper";
import IntroSlidesTitle from "./components/IntroSlidesTitle";
import Slide from "./components/Slide";
import Title from "./components/Title";
import Image from "./components/Image";
// import Loading from "./components/Loading";
// img
import logoTwo from "./assets/images/icons/logo-2.png";
// api
const API = "https://valorant-api.com/v1/agents";

function App() {
  const [data, setData] = useState([]);
  // fetch data
  useEffect(() => {
    async function getData() {
      const res = await fetch(API);
      const json = await res.json();
      setData(json.data);
    }
    getData();
  }, []);

  return (
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

            {data.map((item, index) => {
              // some char has more then 4 power , my ui created just for 4 power
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
  );
}

export default App;

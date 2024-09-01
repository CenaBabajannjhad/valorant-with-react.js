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
import Loading from "./components/Loading";
// img
import logoTwo from "./assets/images/icons/logo-2.png";
// api
const API = "https://valorant-api.com/v1/agents";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch data
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(API);
        if (res.ok) {
          // if response eq with ok 200 299
          const json = await res.json();
          setData(json.data);
          setIsLoading(true);
        } else {
          // else throw a new error with response status
          throw new Error(res.status);
        }
      } catch (err) {
        console.err(err);
      }
    }
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;

import Header from "./components/Header";
import Main from "./components/Main";
import HeroSection from "./components/HeroSection";
import SliderWrapper from "./components/SliderWrapper";
import IntroSlidesTitle from "./components/IntroSlidesTitle";
import Slide from "./components/Slide";
import Title from './components/Title'
import Description from "./components/Description";
import Image from "./components/Image";
// img
import logoTwo from "./assets/images/icons/logo-2.png";
import agentsimg from "./assets/images/Art.png";
import powerIcon from './assets/images/icons/Vector (1).png'




function App() {
  return (
    <>
      <Header></Header>

      <Main>
        <HeroSection>
          <SliderWrapper>
              <IntroSlidesTitle>
                <Title cName='agents' title='AGENTS'/>
                <Image cName='logo-agents' width='40px' src={logoTwo} alt='logo'/>
              </IntroSlidesTitle>


              <Slide>
                <Title cName='agent-name' title='phoenix' />
                <Description cName='agent-region' title='south korea'/>
                <Image cName='agent-img' src={agentsimg} alt='agent-img'/>

                <div className="powers-logo">
                  <Image width="25px" src={powerIcon} alt='powers'/>
                  <Image width="25px" src={powerIcon} alt='powers'/>
                  <Image width="25px" src={powerIcon} alt='powers'/>
                  <Image width="25px" src={powerIcon} alt='powers'/>
                </div>
              </Slide>


          </SliderWrapper>
        </HeroSection>
      </Main>
    </>
  );
}

export default App;

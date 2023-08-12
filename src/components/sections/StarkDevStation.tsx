import styled from "styled-components";
import Slider from "react-slick";
import Button from "../Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card1 from "/src/assets/Card1.png";
import Card2 from "/src/assets/Card2.png";
import Card3 from "/src/assets/Card3.png";
import Card4 from "/src/assets/Card4.png";
import Card5 from "/src/assets/Card5.png";
import Card6 from "/src/assets/Card6.png";
import Card7 from "/src/assets/Card7.png";
import Card8 from "/src/assets/Card8.png";
import Card9 from "/src/assets/Card9.png";
import Card10 from "/src/assets/Card10.png";

const CarouselContainer = styled.div`
  width: 100%;
  height: 110vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff 0%, #d81f3f 100%);

  @media (max-width: 40em) {
    height: 90vh; /* Altura reducida en dispositivos móviles */
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  outline: none;
  padding: 20px;
  position: relative;

  @media (max-width: 40em) {
    padding: 5px 10px 10px; /* Ajusta el relleno en dispositivos móviles */
  }
`;

const SlideImage = styled.img`
  width: 100%;
  max-height: 40vh;
  object-fit: contain;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px auto ; 
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }


  @media (max-width: 64em) {
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.theme.fontlg}; /* Ajuste del tamaño de fuente para pantallas medianas */
}
  @media (max-width: 40em) {
  width: 70%;
  font-size: ${(props) => props.theme.fontsm}; /* Tamaño de fuente para dispositivos móviles */
  text-align: center;
}
  @media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontsm};
  text-align: center;
}
`;

const SlideTitle = styled.h1`
  font-size: 56px;
  color: ${(props) => props.theme.text};
  margin: 40px auto 0; /* Ajuste de margen superior e inferior */
  text-align: center;
  text-transform: capitalize;
  border-left: 0px solid ${(props) => props.theme.accentColor}; /* Agregar borde en el lado izquierdo */
`;

const SlideTitle3 = styled.div`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 5px auto; /* Ajuste del margen */
  margin-top: 5px;
  text-align: center;
  

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontlg}; /* Ajuste del tamaño de fuente para pantallas medianas */
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd}; /* Tamaño de fuente para dispositivos móviles */
    text-align: center;
  }
  @media (max-width: 30em) {
    width: 70%;
    font-size: ${(props) => props.theme.fontsm};
    text-align: center;
  }
`;


const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 0px; /* Espacio de 5px desde el margen inferior */

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-bottom: 3rem ; 
    font-size: ${(props) => props.theme.fontlg}; /* Tamaño de fuente para pantallas medianas */
  }

  @media (max-width: 40em) {
    font-size: 12px; /* Tamaño de fuente más pequeño que xs para dispositivos móviles */
    text-align: center;
    margin-bottom: 0; /* Elimina el margen inferior en dispositivos móviles */
    padding-bottom: 10px; /* Agrega un espacio inferior en dispositivos móviles */
    
  }
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
`;

const TestYourSkills = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: <></>,
    nextArrow: <></>,
    infinite: true, // Carrusel infinito
  };

  return (
    <Section id="starkdevstation">
    <CarouselContainer>
      <SlideTitle>Stark Dev-Station</SlideTitle>
      <Slider {...settings}>
        
        <Slide>
        <SlideImage src={Card1} alt="Stark Easy card" />
        <SlideTitle3>
        A form that detects the balance of the selected tokens. A test token called NAI has been deployed on Cairo 1 
        (which allows free token minting), as well as tokens such as ETH, DAI, WBTC, or USDT. In the form, 
        you need to enter the Recipient, Amount, and a secret word "Nadai" to unlock the `Send` button.
        <br/><br/>
        In this section, we aim to showcase the power of customizing ERC-20 token transfers. You can view the 
        transaction data (`Calldata`) and see how it is executed in the explorer.
        </SlideTitle3>
          <ButtonContainer>
            <Button text="Send Token" link="/connect" />
          </ButtonContainer>
        </Slide>
        <Slide>
        <SlideImage src={Card2} alt="Stark Easy card" />
        <SlideTitle3>
        In this section we want to improve the experience of the community around the biweekly "Hablando de Starknet"
        Spanish-speaking show. Here we want to issue our POAPs under the form of NFTs on Starknet, where the secret word 
        mentioned during the Space will unlock the corresponding button to mint the `NHT` token. 
        <br/><br/>
        Therefore, in this section, you can learn about Starknet while being able to claim your "NHT" tokens with the 
        secret word mentioned in the podcast. Furthermore, these `NHT` tokens will be displayed on "Braavos", "Explorer" and more.
        </SlideTitle3>          
          <ButtonContainer>
            <Button text="Hablando de Starkent - POAP" link="/connect" />
          </ButtonContainer>
        </Slide>
       
        <Slide>
        <SlideImage src={Card3} alt="Stark Easy card" />
        <SlideTitle3>    
        A design gallery for each HDS-related ERC-721 token, loading the metadata of each space. You can also send a token by 
        providing the "From", "Recipient", and "Token ID" values along with the secret word to unlock the "Nadai" button.
        <br/><br/>
        In this section, we reinforce what was seen in the token form. This time, we will see how the design is visualized in the 
        transaction, the transaction data "Calldata", and how to easily transfer our POAP tokens.
        </SlideTitle3>
          <ButtonContainer>
            <Button text="Galery and Send NHT" link="/connect" />
          </ButtonContainer>
        </Slide>

        <Slide>
        <SlideImage src={Card4} alt="Stark Easy card" />
        <SlideTitle3>    
        This tab is dedicated to "Jueves de Cairo" which are "Cairo-Thursdays" organized by the Spanish-speaking 
        community. We will also add official resources such as the Cairo Book, Starknet Book, Cairo Lang Docs, and Starknet Docs.
        </SlideTitle3>          
          <ButtonContainer>
            <Button text="Cairo's Thursday and Resource" link="/connect" />
          </ButtonContainer>
        </Slide>

        <Slide>
        <SlideImage src={Card5} alt="Stark Easy card" />
        <SlideTitle3>    
        This tab is dedicated to the "Basecamp de Pioneros" the first decentralized basecamp for the Spanish-speaking community 
        powered by Starkware and led by some members of the community. You can also find a series of 7 workshops conducted by 
        L2 en Español, featuring Omar Espejel and StarknetEs.
        </SlideTitle3>         
          <ButtonContainer>
            <Button text="Workshop and Basecamp PIONEROS" link="/connect" />
          </ButtonContainer>
        </Slide>

        <Slide>
        <SlideImage src={Card6} alt="Stark Easy card" />
        <SlideTitle3>    
        This tab is designed for learning the Cairo syntax. The idea is to add the new syntax and have a simulation of the result 
        printed in the terminal by running the appropriate command.
        <br/><br/>
        In this section, you can enhance learning with basic examples taken from Cairo-by-Example, Cairo-Book, Starknet-Book, or 
        other libraries and resources. The goal is to read the code or contracts directly and test them without simulation, 
        making it easier to learn the syntax through clear examples.
        </SlideTitle3>      
          <ButtonContainer>
            <Button text="Terminal Sintaxis in Cairo" link="/connect" />
          </ButtonContainer>       
        </Slide>

        <Slide>
        <SlideImage src={Card7} alt="Stark Easy card" />
        <SlideTitle3>    
        This tab will teach you you the power of native Multicall in Cairo. In this form, you can "Mint" the "NAI" token and transfer both 
        "NAI" and "ETH" if desired, by executing 3 different calls, each with its own set of data "Calldata".
        <br/><br/>
        In this section, we can demonstrate how infinite approvals are no longer needed and how DeFi protocols in Starknet benefit 
        from this power. The idea is to add various Multicall forms, including one for UDC, and provide an easy way for developers 
        to deploy ERC-20, ERC-1155, AMM, Vault, or any other smart contract in Cairo that we want to include.
        </SlideTitle3>         
          <ButtonContainer>
            <Button text="Standar Smart Contract in Starknet" link="/connect" />
          </ButtonContainer>  
        </Slide>

        <Slide>
        <SlideImage src={Card8} alt="Stark Easy card" />
        <SlideTitle3>    
        This tab is designed to display contracts with just one click, using Starknet's Universal Contract Deploy (UDC) making 
        it easy, practical, and secure for all those who want to start testing in a simple way. You only need to decide what 
        type of contract you need and adjust its values according to your requirements.
        <br/><br/>
        Additionally, we will provide the necessary steps to convert the values to felt252, along with an explanation and 
        utility of each one.
        </SlideTitle3>          
          <ButtonContainer>
            <Button text="Deploy Standar Smart Contract UDC" link="/connect" />
          </ButtonContainer> 
        </Slide>

        <Slide>
        <SlideImage src={Card9} alt="Stark Easy card" />
        <SlideTitle3>    
        This tab will teach you you the power of native Multicall in Cairo. In this form, you can Mint the NAI token and transfer 
        both NAI and ETH if desired, by executing 3 different calls, each with its own set of data "Calldata".
        <br/><br/>
        In this section, we can demonstrate how infinite approvals are no longer needed and how DeFi protocols in Starknet 
        benefit from this power. The idea is to add various Multicall forms, including one for UDC, and provide an easy way 
        for developers to deploy ERC-20, ERC-1155, AMM, Vault, or any other smart contract in Cairo that we want to include.
        </SlideTitle3>         
          <ButtonContainer>
            <Button text="Multicall in Starknet (Part 1-2)" link="/connect" />
          </ButtonContainer>
        </Slide>

        <Slide>
        <SlideImage src={Card10} alt="Stark Easy card" />
        <SlideTitle3>    
        This tab will teach you you the power of native Multicall in Cairo. In this form, you can Mint the NAI token x100, by 
        executing 1 only call, each with its own set of data "Calldata".
        <br/><br/>
        </SlideTitle3>          
          <ButtonContainer>
            <Button text="Multicall in Starknet (Part 2-2)" link="/connect" />
          </ButtonContainer>
          
        </Slide>
        {/* ... otras diapositivas ... */}
      </Slider>
      <DotsContainer>
        <Slider {...settings} />
      </DotsContainer>
    </CarouselContainer>
    </Section>
  );
};

export default TestYourSkills;

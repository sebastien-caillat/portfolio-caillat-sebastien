import styled from "styled-components";

const GlobalContainer = styled.div`
  width: 100%;
  padding-bottom: 1%;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PageTitle = styled.h1`
  background: linear-gradient(to left, #ffb6c1, #cbc3e3 100%);
  background-position: 0 90%;
  background-size: 100% 2px;
  background-repeat: repeat-x; 
  padding-bottom: 0.5%;
  margin-bottom: -0.5%;
  @media(max-width: 768px) {
    padding-bottom: 3%;
  }
`

const PageSubtitle = styled.p`
  font-size: 30px;
  @media(max-width: 768px) {
    margin-top: 2%;
  }
`

const AboutMe = styled.h2`
  margin-left: 25%;
  @media(max-width: 1280px) {
    margin-left: 15%;
  }
  @media(max-width: 1280px) {
    margin-left: 0%;
    text-align: center;
  }
`

const InfosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const InfosBlock = styled.div`
  width: 50%;
  height: auto;
  margin-bottom: 3%;
  border: 1px solid black;
  border-radius: 10px;
  @media(max-width: 1280px) {
    width: 70%;
    margin-bottom: 8%;
  }
  @media(max-width: 768px) {
    width: 85%;
    margin: 0% 2% 8% 3%;
  }
`

const InfosBlockTitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25%;
  padding-top: 1%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: linear-gradient(to bottom right, #f39fdc 0%, #eab5e1 30%);
`

const InfosBlockText = styled.p`
  text-indent: 5%;
  padding: 0% 3% 0% 3%;
`

const MoreInfosBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1%;
  @media(max-width: 1280px) {
    margin: 2% 5% 0% 5%;
  }
  @media(max-width: 768px) {
    margin: -3% 5% 0% 5%; 
  }
`

const MoreInfosText = styled.p`
  text-align: center;
`

const CvRedirection = styled.a`
  font-weight: bold;
`

function Home() {
    return (
      <GlobalContainer>
        <TitleContainer>
            <PageTitle>
              Sébastien Caillat
            </PageTitle>
            <PageSubtitle>
              Développeur Web
            </PageSubtitle>
            </TitleContainer>
              <AboutMe>
                À propos
              </AboutMe>
        <InfosContainer>
                <InfosBlock>
                  <InfosBlockTitleBox> 
                    <h3>Mon Parcours</h3>
                  </InfosBlockTitleBox>
                  <InfosBlockText>
                    Après l'obtention d'une licence en Lettres & Sciences Humaines, j'ai choisi de me réorienter en suivant la formation diplômante Développeur Web d’Openclassrooms. Je suis à la recherche d’un premier emploi dans ce domaine afin de mettre en pratique les compétences ainsi acquises.
                  </InfosBlockText>
                </InfosBlock>
                <InfosBlock>
                  <InfosBlockTitleBox> 
                    <h3>Mes attentes</h3>
                  </InfosBlockTitleBox>
                  <InfosBlockText>
                  Passionné de culture japonaise et de jeux vidéos, je souhaiterais travailler sur des projets en lien avec ces passions. J’apprécie l’idée de travailler au sein d’une équipe réduite afin d'avoir un contact direct avec clients et collègues.
                  </InfosBlockText>
                </InfosBlock>
                <InfosBlock>
                  <InfosBlockTitleBox> 
                    <h3>Mes objectifs</h3> 
                  </InfosBlockTitleBox>
                    <ul>
                      <li>Me professionnaliser en participant à des projets variés</li>
                      <li>Développer ma capacité à travailler en équipe</li>
                      <li>Acquérir les savoirs et savoirs-faire nécessaire pour devenir développeur Fullstack</li>
                    </ul>
                </InfosBlock>
                <InfosBlock>
                  <InfosBlockTitleBox> 
                    <h3>Mes compétences et réalisations</h3> 
                  </InfosBlockTitleBox>
                  <InfosBlockText>
                    Pour une liste exhaustive de mes compétences, veuillez vous référer à mon <CvRedirection href="https://sebastien-caillat.tiiny.site/">CV</CvRedirection>. Mes réalisations dans le cadre de la formation sont disponibles sur mon GitHub accessible en bas de page et les plus récentes sont accessibles ici
                  </InfosBlockText>
                </InfosBlock>
        </InfosContainer>
        <MoreInfosBlock>
          <MoreInfosText>
          Pour en savoir plus, je vous invite à visiter mes différents réseaux ou à me contacter directement par téléphone ou par mail.
          </MoreInfosText>
        </MoreInfosBlock>
      </GlobalContainer>
    );
  }
  
export default Home;
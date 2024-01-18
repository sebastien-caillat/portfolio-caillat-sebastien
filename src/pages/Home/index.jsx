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
    display: none;
  }
`

const PageSubtitle = styled.p`
  font-size: 20px;
  @media(max-width: 768px) {
    display: none;
  }
`

const AboutMe = styled.h2`
  font-size: 30px;
  width: 6.5%;
  margin-left: 6%;
  background: linear-gradient(to left, #ffb6c1, #cbc3e3 100%);
  background-position: 0 100%;
  background-size: 100% 2px;
  background-repeat: repeat-x;
  @media(max-width: 1280px) {
    width: 15%;
  }
  @media(max-width: 768px) {
    width: 25%;
  }
`

const InfosContainer = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 2;
  grid-template-columns: repeat(2, 1fr);
  @media(max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const InfosBlock = styled.div`
  width: 70%;
  height: auto;
  margin: 0% 0% 3% 12%;
  padding: 0% 3% 0% 3%;
  border: 1px solid black;
  border-radius: 10px;
  background: linear-gradient(160deg, #ffb6c1 2%, #cbc3e3 40%);
  // background-color: #CBC3E3;
  box-shadow: 12px 12px 8px 1px #cbc3e3;
  @media(max-width: 1280px) {
    margin-bottom: 8%;
  }
  @media(max-width: 768px) {
    width: 85%;
    margin: 0% 2% 8% 3%;
  }
`

const MoreInfosBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
  @media(max-width: 1280px) {
    margin: 2% 5% 0% 5%;
  }
`

const MoreInfosText = styled.p`
  text-align: center;
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
                  <h3> Mon parcours </h3>
                    <p>
                      Après des études littéraires et notamment l'obtention d'une licence en Lettres & Sciences Humaines, j'ai décidé de me réorienter dans le domaine du développement web à la recherche de challenge.Nouvellement diplômé de la formation Développeur Web d’Openclassrooms, je suis à la recherche d’un premier emploi dans ce domaine. Ayant eu l’opportunité d’acquérir de nombreuses compétences grâce aux projets réalisés durant cette formation, j’ai à cœur de les mettre au plus vite en pratique.
                    </p>
                </InfosBlock>
                <InfosBlock>
                  <h3> Mes attentes </h3>
                    <p>
                      Passionné de culture japonaise et de jeux vidéo depuis mon plus jeune âge je souhaiterais mettre mes compétences en développement web au service d'une entreprise opérant dans ces secteurs d’activité.
                      J’affectionne particulièrement l’idée de travailler au sein d’une équipe réduite, privilégiant donc les petites et moyennes entreprises aux grands groupes.
                    </p>
                </InfosBlock>
                <InfosBlock>
                  <h3> Mes objectifs </h3>
                    <p>
                      J’ai pour objectif de devenir freelance après avoir acquis une expérience solide en entreprise et j’envisage la possibilité de m’installer au Japon pour pratiquer ce métier à terme.
                    </p>
                </InfosBlock>
                <InfosBlock>
                  <h3> Mes compétences et réalisations </h3>
                    <p>
                      Pour une liste exhaustive de mes compétences, veuillez vous référer à mon CV accessible en cliquant sur le lien en haut de page.Vous pouvez retrouver mes réalisations en cliquant sur l'icône GitHub présente en bas de page
                    </p>
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
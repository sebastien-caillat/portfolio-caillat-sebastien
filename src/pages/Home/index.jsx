import styled from "styled-components";

const GlobalContainer = styled.div`
  width: 100%;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 90%;
`
const PageTitle = styled.h1`
  // align-items: center;
`

const InfosContainer = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 2;
  grid-template-columns: repeat(2, 1fr);
`
const InfosBlock = styled.div`
  width: 70%;
  height: auto;
  margin: 3% 0% 0% 15%;
  padding-left: 1%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #CBC3E3;
  box-shadow: 12px 12px 8px 1px #CBC3E3;
`
const MoreInfosBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1%;
`


function Home() {
    return (
      <GlobalContainer>
        <TitleContainer>
            <PageTitle>
              Sébastien Caillat - Développeur Web basé à Paris
            </PageTitle>
              <h2>
                À propos
              </h2>
        </TitleContainer>
        <InfosContainer>
                <InfosBlock>
                  <h3> Mon parcours </h3>
                    <p>
                      Nouvellement diplômé de la formation Développeur Web d’Openclassrooms, je suis à la recherche d’un premier emploi dans ce domaine. Ayant eu l’opportunité d’acquérir de nombreuses compétences grâce aux projets réalisés durant cette formation, j’ai à cœur de les mettre au plus vite en pratique.
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
                      Vous pouvez retrouver mes réalisations en cliquant sur l'icône GitHub présente en bas de page
                    </p>
                </InfosBlock>
        </InfosContainer>
        <MoreInfosBlock>
          <p>
          Pour en savoir plus, je vous invite à visiter mes différents réseaux ou à me contacter directement par téléphone ou par mail.
          </p>
        </MoreInfosBlock>
      </GlobalContainer>
    );
  }
  
export default Home;
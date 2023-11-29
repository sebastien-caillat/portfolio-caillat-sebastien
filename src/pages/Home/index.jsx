import styled from "styled-components";

const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 90%;
`

const PageTitle = styled.h1`
  // align-items: center;
`

function Home() {
    return (
      <InfosContainer>
          <PageTitle>
            Sébastien Caillat - Développeur Web basé à Paris
          </PageTitle>
            <h2>
              À propos
            </h2>
              <h3> Mon parcours </h3>
                <p>
                  Nouvellement diplômé de la formation Développeur Web d’Openclassrooms, je suis à la recherche d’un premier emploi dans ce domaine. Ayant eu l’opportunité d’acquérir de nombreuses compétences grâce aux projets réalisés durant cette formation, j’ai à cœur de les mettre au plus vite en pratique.
                </p>
              <h3> Mes attentes </h3>
                <p>
                  Passionné de culture japonaise et de jeux vidéo depuis mon plus jeune âge je souhaiterais mettre mes compétences en développement web au service d'une entreprise opérant dans ces secteurs d’activité.
                  J’affectionne particulièrement l’idée de travailler au sein d’une équipe réduite, privilégiant donc les petites et moyennes entreprises aux grands groupes.
                </p>
              <h3> Mes objectifs </h3>
                <p>
                  J’ai pour objectif de devenir freelance après avoir acquis une expérience solide en entreprise et j’envisage la possibilité de m’installer au Japon pour pratiquer ce métier à terme.
                </p>
              <h3> Mes réalisations </h3>
                <p>
                  ...
                </p>
          <p>
          Pour en savoir plus, je vous invite à visiter mes différents réseaux ou à me contacter directement par téléphone ou par mail.
          </p>
      </InfosContainer>
    );
  }
  
  export default Home;
  
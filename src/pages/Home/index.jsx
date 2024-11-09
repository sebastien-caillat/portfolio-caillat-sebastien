import styled from "styled-components";
import colors from "../../utils/style/colors";

import htmllogo from "../../assets/icons/html.svg";
import csslogo from "../../assets/icons/css.svg";

import jslogo from "../../assets/icons/javascript.svg";
import nodejslogo from "../../assets/icons/nodejs.svg";
import strapilogo from "../../assets/icons/strapi.svg";
import gitlogo from "../../assets/icons/git.svg";
import githublogo from "../../assets/icons/github.svg";
import reactlogo from "../../assets/icons/react.svg";
import sasslogo from "../../assets/icons/sass.svg";
import mongodblogo from "../../assets/icons/mongodb.svg";
import restapilogo from "../../assets/icons/restapi.svg";
import expresslogo from "../../assets/icons/express.svg";
import axioslogo from "../../assets/icons/axios.svg";
import jwtlogo from "../../assets/icons/jsonwebtoken.svg";
import bcryptlogo from "../../assets/icons/bcrypt.svg";

import tslogo from "../../assets/icons/typescript.svg";
import figmalogo from "../../assets/icons/figma.svg";

import redux from "../../assets/icons/redux.svg";
import nextjslogo from "../../assets/icons/nextjs.svg";


// Styled components for the global container

const GlobalContainer = styled.div`
  width: 100%;
  padding-bottom: 1%;
  background: ${colors.backgroundmain};
  margin-top: -2%;
`

// Styled components for the Title section

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PageTitle = styled.h1`
  background: linear-gradient(to left, ${colors.accent}, ${colors.accent} 100%);
  background-position: 0 90%;
  background-size: 100% 2px;
  background-repeat: repeat-x; 
  padding-bottom: 0.5%;
  margin-bottom: -1%;
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

// Styled components for the Infos section

const InfosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const InfosBlock = styled.div`
  width: 90%;
  height: auto;
`

const InfosBlockTitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25%;
  padding-top: 1%;
`

const InfosBlockTitle = styled.h2`
`

const InfosBlockSubtitle = styled.h3`
`

// Styled components for the Skills section

const SkillsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SkillsIcons = styled.img`
    width: 6vh;
    height: 6vh;
    font-size: 35px;
    color: #fff;
    border-radius: 5px;
    margin: 10px;
    &:hover {
      pointer: cursor;
      transform: scale(1.1);
    }
`;


/**
 * Styled components for a tooltip container and tooltip text.
 * TooltipContainer is a styled div that serves as the container for the tooltip.
 * TooltipText is a styled span that represents the actual tooltip text.
 * The tooltip text is hidden by default and becomes visible on hover over the TooltipContainer.
 */

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  
  position: absolute;
  z-index: 1;
  bottom: 125%; 
  left: 50%; 
  margin-left: -60px; 

  opacity: 0;
  transition: opacity 0.3s;

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

// Text style for the Infos section

const InfosBlockText = styled.p`
  text-indent: 3%;
  line-height: 1.7;
`

const MoreInfosBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 1%;
  @media(max-width: 768px) {
    margin: 0% 5% 0% 5%; 
  }
`

const MoreInfosText = styled.p`
  text-align: center;
`

const CvRedirection = styled.a`
  font-weight: bold;
  &:visited {
    color: ${colors.accent};
  }
`

/**
 * Functional component that displays a tooltip when hovering over the children.
 * @param {{children}} children - The content that will trigger the tooltip on hover.
 * @param {{string}} text - The text to display in the tooltip.
 * @returns JSX element representing the tooltip component.
 */

const Tooltip = ({ children, text }) => (
  <TooltipContainer>
    {children}
    <TooltipText>{text}</TooltipText>
  </TooltipContainer>
);

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

        <InfosContainer>
                <InfosBlock>
                  <InfosBlockTitleBox> 
                    <InfosBlockTitle>Mon Parcours</InfosBlockTitle>
                  </InfosBlockTitleBox>
                  <InfosBlockText>
                    Après l'obtention d'une licence en Lettres & Sciences Humaines, j'ai choisi de me réorienter en suivant la formation diplômante Développeur Web délivrée par Openclassrooms. Je suis à la recherche d’un premier emploi dans ce domaine afin de mettre en pratique les compétences ainsi acquises.
                  </InfosBlockText>
                </InfosBlock>
                <InfosBlock>
                  <InfosBlockTitleBox> 
                    <InfosBlockTitle>Mes attentes</InfosBlockTitle>
                  </InfosBlockTitleBox>
                  <InfosBlockText>
                  Passionné de culture japonaise et de jeux vidéos, je souhaiterais travailler sur des projets en lien avec ces passions. J’apprécie l’idée de travailler au sein d’une équipe réduite afin d'avoir un contact direct avec clients et collègues.
                  </InfosBlockText>
                </InfosBlock>
                <InfosBlock>
                  <InfosBlockTitleBox> 
                    <InfosBlockTitle>Mes objectifs</InfosBlockTitle> 
                  </InfosBlockTitleBox>
                    <ul>
                      <li>Me professionnaliser en participant à des projets variés</li>
                      <li>Développer ma capacité à travailler en équipe</li>
                      <li>Acquérir les savoirs et savoirs-faire nécessaire pour devenir développeur Fullstack</li>
                    </ul>
                </InfosBlock>
                <InfosBlock>
                  <InfosBlockTitleBox> 
                    <InfosBlockTitle>Mes compétences et réalisations</InfosBlockTitle> 
                  </InfosBlockTitleBox>
                  <InfosBlockText>
                    Pour une liste exhaustive de mes compétences, veuillez vous référer à mon <CvRedirection href="https://amber-kandace-43.tiiny.site/">CV</CvRedirection>. Mes réalisations dans le cadre de la formation sont disponibles sur mon GitHub accessible en bas de page et les plus récentes sont accessibles sur la page Réalisations.
                  </InfosBlockText>
                </InfosBlock>
                <InfosBlock>
                  <InfosBlockSubtitle>Niveau avancé</InfosBlockSubtitle>
                    <SkillsSection>
                      <Tooltip text="HTML5">
                        <SkillsIcons src={htmllogo} alt="html" />
                      </Tooltip>
                      <Tooltip text="CSS3">
                        <SkillsIcons src={csslogo} alt="css" />
                      </Tooltip>
                    </SkillsSection>
                  <InfosBlockSubtitle>Niveau intermédiaire</InfosBlockSubtitle>
                    <SkillsSection>
                      <Tooltip text="Javascript">
                      <SkillsIcons src={jslogo} alt="javascript" />
                      </Tooltip>
                      <Tooltip text="Node.js">
                        <SkillsIcons src={nodejslogo} alt="nodejs" />
                      </Tooltip>
                      <Tooltip text="React">
                        <SkillsIcons src={reactlogo} alt="react" />
                      </Tooltip>
                      <Tooltip text="Strapi">
                      <SkillsIcons src={strapilogo} alt="strapi" />
                      </Tooltip>
                      <Tooltip text="MongoDB">
                        <SkillsIcons src={mongodblogo} alt="mongodb" />
                      </Tooltip>
                      <Tooltip text="Git">
                        <SkillsIcons src={gitlogo} alt="git" />
                      </Tooltip>
                      <Tooltip text="Github">
                        <SkillsIcons src={githublogo} alt="github" />
                      </Tooltip>
                      <Tooltip text="RestAPI">
                        <SkillsIcons src={restapilogo} alt="restapi" />
                      </Tooltip>
                      <Tooltip text="Express">
                        <SkillsIcons src={expresslogo} alt="express" />
                      </Tooltip>
                      <Tooltip text="Axios">
                        <SkillsIcons src={axioslogo} alt="axios" />
                      </Tooltip>
                      <Tooltip text="JsonWebToken">
                        <SkillsIcons src={jwtlogo} alt="jsonwebtoken" />
                      </Tooltip>
                      <Tooltip text="Bcrypt">
                        <SkillsIcons src={bcryptlogo} alt="bcrypt" />
                      </Tooltip>
                      <Tooltip text="Sass">
                        <SkillsIcons src={sasslogo} alt="sass" />
                      </Tooltip>
                    </SkillsSection>
                  <InfosBlockSubtitle>Niveau débutant</InfosBlockSubtitle>
                    <SkillsSection>
                      <Tooltip text="Typescript">
                        <SkillsIcons src={tslogo} alt="typescript" />
                      </Tooltip>
                      <Tooltip text="Figma">
                        <SkillsIcons src={figmalogo} alt="figma" />
                      </Tooltip>
                      <Tooltip text="Next.js">
                      <SkillsIcons src={nextjslogo} alt="nextjs" />
                    </Tooltip>
                    </SkillsSection>
                  <InfosBlockSubtitle>Interessé par</InfosBlockSubtitle>
                    <Tooltip text="Redux">
                      <SkillsIcons src={redux} alt="redux" />
                    </Tooltip>
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
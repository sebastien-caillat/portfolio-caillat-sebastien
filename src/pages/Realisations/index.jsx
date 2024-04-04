import styled from "styled-components";
import websitesdata from "../../assets/data/websitesdata.json";
import { Link } from  "react-router-dom";
import colors from "../../utils/style/colors";

    const GlobalContainer = styled.div`
    width: 100%;
    padding-bottom: 4%;
    margin-top: -2%;
    background: ${colors.backgroundmain};
    `

    const TitleContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    const RealisationTitle = styled.h1`
        text-align: center;
        background: linear-gradient(to left, #ffb6c1, #cbc3e3 100%);
        background-position: 0 90%;
        background-size: 100% 2px;
        background-repeat: repeat-x; 
        padding-bottom: 0.5%;
        margin-bottom: -0.5%;
    `

    const  ProjectsSection = styled.div`
        display: flex;
        justify-content: center;
        @media(max-width: 1024px) {
            flex-direction: column;
            align-items: center;
        }
    `

    const ProjectCard = styled.div`
        width: 500px;
        height: 500px;
        background-color: ${colors.backgroundcard};
        border-radius: 30px;
        margin: 4% 2% 0% 2%;
        @media(max-width: 768px) {
            width: 350px;
            height: 350px;
        }
    `

    const ProjectCardImg = styled.img`
        width: 100%;
        height: 55%;
        object-fit: fill;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;

    `

    const ProjectCardInfos = styled.div`
        display: flex;
        align-items: left;
        flex-direction: column;
        margin: -4% 0% 2% 4%;
    `

    const ProjectCardTitle = styled.h2`
        color: ${colors.secondary};
        @media(max-width: 768px) {
            font-size: 24px;
        }
    `
    
    const ProjectCardText = styled.p`
        width: 90%;
        word-break: break-word;
        margin-top: -5%;
        color: ${colors.secondary};
        @media(max-width: 768px) {
            font-size: 16px;
        }
    `

    const  ProjectVisitButton = styled(Link)`
        width: 30%;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
        background-color: #80669d;
        border-radius: 30px;
        padding: 1%;
        text-align: center;
        text-decoration: none;
        &:hover{
          transform: scale(1.1);  
        }
        @media(max-width: 768px) {
            width: 60%;
        }
    `

    const websitesData = websitesdata;

function Realisation() {
    return(
        <GlobalContainer>
            <TitleContainer>
                <RealisationTitle>Réalisations</RealisationTitle>
            </TitleContainer>
            <ProjectsSection>
                {websitesData.map(({ id, title, description,imgUrl, linkUrl }) => (
                    <ProjectCard key={id}>
                        <ProjectCardImg src={imgUrl} alt={description} />
                        <ProjectCardInfos>
                            <ProjectCardTitle>{title}</ProjectCardTitle>
                            <ProjectCardText>{description}</ProjectCardText>
                            <ProjectVisitButton to={linkUrl}>Voir le site</ProjectVisitButton>
                        </ProjectCardInfos>
                        
                    </ProjectCard>
                ))}
            </ProjectsSection>
        </GlobalContainer>
    )
}

export default Realisation;
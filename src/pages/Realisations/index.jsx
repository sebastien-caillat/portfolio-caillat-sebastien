import styled from "styled-components";
import websitesdata from "../../assets/data/websitesdata.json";
import { Link } from  "react-router-dom";

    const GlobalContainer = styled.div`
    width: 100%;
    margin-bottom: 5%;
    `

    const RealisationTitle = styled.h1`
        text-align: center;
    `

    const  ProjectsSection = styled.div`
        display: flex;
        justify-content: space-around;
    `

    const ProjectCard = styled.div`
        width: 500px;
        height: 500px;
        background-color: #f5f5f5;
        border-radius: 30px;
    `

    const ProjectCardImg = styled.img`
        width: 100%;
        height: 55%;
        object-fit: cover;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;

    `

    const ProjectCardInfos = styled.div`
        display: flex;
        align-items: left;
        flex-direction: column;
        margin-left: 4%;
    `

    const ProjectCardTitle = styled.h2`
    `
    
    const ProjectCardText = styled.p`
        width: 90%;
        word-break: break-word;
        margin-top: -5%;
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
    `

    const websitesData = websitesdata;

function Realisation() {
    return(
        <GlobalContainer>
            <RealisationTitle>Réalisations</RealisationTitle>
            <ProjectsSection>
                {websitesData.map(({ id, title, description,imgUrl, linkUrl }) => (
                    <ProjectCard key={id}>
                        <ProjectCardImg src={imgUrl} alt={description} />
                        <ProjectCardInfos>
                            <ProjectCardTitle>{title}</ProjectCardTitle>
                            <ProjectCardText>{description}</ProjectCardText>
                            <ProjectVisitButton to={linkUrl}>View Website</ProjectVisitButton>
                        </ProjectCardInfos>
                        
                    </ProjectCard>
                ))}
            </ProjectsSection>
        </GlobalContainer>
    )
}

export default Realisation;
import styled from "styled-components"

const Box = styled.div`
    padding: 5% 2.5%;
    background: #252525;
    position: absolute;
    bottom: 0;
    width: 95%;
`;
 
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;
 
const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;
 
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;

const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;

function Footer() {
    return(
        <Box>
            <h1
                style={{
                    color: "#fff",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                Me contacter
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>LinkedIn</Heading>
                    </Column>
                    <Column>
                        <Heading>GitHub</Heading>
                    </Column>
                    <Column>
                        <Heading>E-mail</Heading>
                    </Column>
                    <Column>
                        <Heading>Téléphone</Heading>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};

export default Footer;

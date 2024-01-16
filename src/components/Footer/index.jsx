import styled from "styled-components"

import { FaGithubSquare, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const linkedInUrl = 'https://www.linkedin.com/in/sebastien-caillat/';
const githubUrl = 'https://github.com/sebastien-caillat';

const Box = styled.div`
    background: #252525;
    position: absolute;
    width: 100%;
`;
 
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;
 
const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;
 
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ContactIcons = styled.div`
    width: 4vh;
    height: 4vh;
    font-size: 35px;
    color: #fff;
    margin: 10px;
    &:hover {
        font-size: 40px;
    }
`;

function Footer() {
    return(
        <Box>
            <h1
                style={{
                    color: "#fff",
                    textAlign: "center",
                    marginTop: "30px",
                }}
            >
                Contacts
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <ContactIcons onClick={() => { window.location.href = linkedInUrl; } }>
                            <FaLinkedin />
                        </ContactIcons>
                    </Column>
                    <Column>
                        <ContactIcons>
                            <FaGithubSquare onClick={() => { window.location.href = githubUrl; } } />
                        </ContactIcons>
                    </Column>
                    <Column>
                        <ContactIcons>
                            <IoMdMail onClick={() => { window.location.href = 'mailto:sebastien.caillat96@gmail.com' } } />
                        </ContactIcons>
                    </Column>
                    <Column>
                        <ContactIcons>
                            <FaPhoneAlt onClick={() => { window.location.href = 'callto:0778815580' } } />
                        </ContactIcons>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};

export default Footer;

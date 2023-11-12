import { FooterContainer } from "./Footer.styles";
import CustomButton from "../Button";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="FooterDiv">
        <p className="ready">
          Ready to create Your <br /> Magical Link-Heaven
        </p>
        <CustomButton variant="filled" type="button" className="btn">
          Create a linkVault
        </CustomButton>
      </div>
      <p className="build">Created for Algorand's Build a Bull Hackathon</p>
    </FooterContainer>
  );
};

export default Footer;

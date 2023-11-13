import { useNavigate } from "react-router-dom";
import { ButtonWrap, ButtonImage, Top, MainContainer } from "./Services.styles";

const Services = () => {
  const navigate = useNavigate();
  const payBills = () => {
    navigate("/pay-bills");
  };
  const sendMoney = () => {
    navigate("/send-money");
  };

  return (
    <MainContainer>
      <Top>
        <ButtonWrap>
          <ButtonImage onClick={sendMoney} src="/assets/svg/sendmoney.svg" />
          <ButtonImage onClick={payBills} src="/assets/svg/paybills.svg" />
        </ButtonWrap>
      </Top>
    </MainContainer>
  );
};

export default Services;

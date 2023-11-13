import styled from "styled-components";
import { flexCenter } from "../../styles/__mixins";

export const LaunchContainer = styled.div`
  ${flexCenter()};
  flex-direction: column;
  width: 500px;
  margin: auto;
  gap: 1rem;

  .owned__assets {
    position: unset;
    width: 100%;
    max-height: 14rem;
  }

  .copy__icon {
    width: 18px;
  }

  button {
    > div {
      gap: 0.5rem;
    }
  }

  .button__transparent {
    background: white !important;
    border: 1px solid #653780 !important;
    color: var(--vault-primary) !important;
  }

  .launch__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .launch__body {
    border: solid 2px var(--vault-primary);
    background: linear-gradient(180deg, rgba(254, 247, 249, 0) 0%, #fef7f9 100%);
    box-shadow: 0px 23px 28px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    width: 100%;
    padding: 3rem;

    .buttons__container {
      ${flexCenter()};
      justify-content: space-between;
      margin-top: 4rem;
      width: 100%;
      gap: 0.9rem;

      button {
        width: 80%;
        padding: 0.6rem 0rem;
      }

      .claim__button {
        background: #e53f71;
      }

      .deposit__button {
        background: transparent;
        color: var(--vault-primary);
        border: 1px solid var(--vault-primary);
      }
    }
  }
`;

import { InfoBlock, InfoContainer, InfoImg, InfoLegendBlock, InfoLegendDesc, InfoLegendName, InfoName, InfoTitle } from "./CharacterCard.styled";

export const CharacterCard = ({character}) => {
    return (
      <InfoContainer>
        <InfoImg src={character.image} alt="foto of character" />
        <InfoName>{character.name}</InfoName>
        <InfoBlock>
          <InfoTitle>Informations</InfoTitle>
          <InfoLegendBlock>
          <InfoLegendName>Gender</InfoLegendName>
          <InfoLegendDesc>{character.gender}</InfoLegendDesc>
          </InfoLegendBlock>
          <InfoLegendBlock>
          <InfoLegendName>Status</InfoLegendName>
          <InfoLegendDesc>{character.status}</InfoLegendDesc>
          </InfoLegendBlock>
          <InfoLegendBlock>
          <InfoLegendName>Specie</InfoLegendName>
          <InfoLegendDesc>{character.species}</InfoLegendDesc>
          </InfoLegendBlock>
          <InfoLegendBlock>
          <InfoLegendName>Origin</InfoLegendName>
          <InfoLegendDesc>{character.origin.name}</InfoLegendDesc>
          </InfoLegendBlock>
          <InfoLegendBlock>
          <InfoLegendName>Type</InfoLegendName>
          <InfoLegendDesc>{!character.type ? `Unknown` : character.type}</InfoLegendDesc>
          </InfoLegendBlock>
        </InfoBlock>
      </InfoContainer>
    );
}
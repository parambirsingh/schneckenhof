export const WineFragment = graphql`
  fragment WineFragment on Wine {
    type
    id
    name
    premium
    image
    vintage
    varietal
    price
    priority
    content
    awardText
    availability
    awardLevel
    packaging {
      displayName
      measure
      unitOfMeasure
    }
  }
`;

import * as Styled from 'src/components/Loader/styles'

const Loader = () => {
  return (
    <Styled.LoaderGrid className="lds-grid">
      <Styled.LoaderItem
        positionTop="0"
        positionLeft="0"
        animationDelay="0"
      ></Styled.LoaderItem>
      <Styled.LoaderItem
        positionTop="0"
        positionLeft="32"
        animationDelay="-0.4"
      ></Styled.LoaderItem>
      <Styled.LoaderItem
        positionTop="0"
        positionLeft="64"
        animationDelay="-0.8"
      ></Styled.LoaderItem>
      <Styled.LoaderItem
        positionTop="32"
        positionLeft="0"
        animationDelay="-0.4"
      ></Styled.LoaderItem>
      <Styled.LoaderItem
        positionTop="32"
        positionLeft="32"
        animationDelay="-0.8"
      ></Styled.LoaderItem>
      <Styled.LoaderItem
        positionTop="32"
        positionLeft="64"
        animationDelay="-1.2"
      ></Styled.LoaderItem>
      <Styled.LoaderItem
        positionTop="64"
        positionLeft="0"
        animationDelay="-0.8"
      ></Styled.LoaderItem>
      <Styled.LoaderItem
        positionTop="64"
        positionLeft="32"
        animationDelay="-1.2"
      ></Styled.LoaderItem>
      <Styled.LoaderItem
        positionTop="64"
        positionLeft="64"
        animationDelay="-1.6"
      ></Styled.LoaderItem>
    </Styled.LoaderGrid>
  )
}

export default Loader

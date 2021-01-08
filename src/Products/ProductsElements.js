import styled from 'styled-components';

export const ProductsElements = styled.div`
text-align:center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-items: center;
width:100vw;
`
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw; 
  min-height: 100vh;
  background: #150f0f;
  color: #faf3dd
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  animation: fadeAndScale 1s cubic-bezier(0.39, -1.05, 0.58, 1.95);
  animation-delay: -0.2s;
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #f8f8ff;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 2rem;
  font-size: 2rem;
`;


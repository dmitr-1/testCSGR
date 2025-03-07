import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: 20px;
`;

export const Header = styled.header`
  background-color: #ffffff;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardForm = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  flex: 1;
  height: 50%
  
`;

export const CardList = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  flex: 1;
  
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;
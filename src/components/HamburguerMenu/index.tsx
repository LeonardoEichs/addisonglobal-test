import { Container, Bar } from "./styles";

function HamburguerMenu({ ...rest }) {
  return (
    <Container {...rest}>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </Container>
  );
}

export default HamburguerMenu;

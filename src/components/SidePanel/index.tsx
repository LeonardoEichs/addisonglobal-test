import { ReactNode } from "react";

import { DarkButton } from "components/Button";

import {
  Container,
  Panel,
  SelectedItemsDisplay,
  SelectedItems,
} from "./styles";

interface SidePanelProps {
  children?: ReactNode;
}

function SidePanel({ children }: SidePanelProps) {
  return (
    <Container>
      <Panel>
        <span>&#215;</span>
        <SelectedItemsDisplay>
          <SelectedItems>
            <h1>Man United to WIN</h1>
            <h2>1.2</h2>
            <DarkButton>Delete</DarkButton>
          </SelectedItems>
        </SelectedItemsDisplay>
      </Panel>
    </Container>
  );
}

export default SidePanel;

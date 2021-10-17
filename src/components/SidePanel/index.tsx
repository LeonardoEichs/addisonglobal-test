import { ReactNode } from "react";

import { DarkButton } from "components/Button";

import {
  Container,
  Panel,
  SelectedItemsDisplay,
  SelectedItems,
} from "./styles";

interface SidePanelProps {
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}

function SidePanel({ isSidePanelOpen, setIsSidePanelOpen }: SidePanelProps) {
  if (!isSidePanelOpen) return null;
  return (
    <Container>
      <Panel>
        <span onClick={() => setIsSidePanelOpen(false)}>&#215;</span>
        <SelectedItemsDisplay>
          <SelectedItems>
            <h1>Man United to WIN</h1>
            <h2>1.2</h2>
            <DarkButton>Delete</DarkButton>
          </SelectedItems>
          <SelectedItems>
            <h1>Man United to WIN</h1>
            <h2>1.2</h2>
            <DarkButton>Delete</DarkButton>
          </SelectedItems>
          <SelectedItems>
            <h1>Man United to WIN</h1>
            <h2>1.2</h2>
            <DarkButton>Delete</DarkButton>
          </SelectedItems>
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

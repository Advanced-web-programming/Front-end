import styled from "styled-components";

import { DroneTemplate } from "../../template/drone/DroneTemplate";

const DronePage = styled.div`
  overflow-y: auto;
`;

export default function Main() {
  return (
    <DronePage>
      <DroneTemplate />
    </DronePage>
  );
}

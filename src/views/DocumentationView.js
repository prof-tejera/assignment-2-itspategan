import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import ControlButton from "../components/generic/ControlButton";
import DisplayRounds from "../components/generic/DisplayRounds";
import DisplayTime from "../components/generic/DisplayTime";
import Input from "../components/generic/Input";
import SimpleText from "../components/generic/SimpleText";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
            title="Control button "
            component={<ControlButton />}
            propDocs={[
              {
                prop: "value",
                description: "Changes the text",
                type: "string",
              },
            ]}
          />
          <DocumentComponent
            title="Control button "
            component={<ControlButton />}
            propDocs={[
              {
                prop: "value",
                description: "Changes the text",
                type: "string",
              },
            ]}
          />
          <DocumentComponent
            title="Disply Rounds "
            component={<DisplayRounds />}
            propDocs={[
              {
                prop: "value",
                description: "Changes the number",
                type: "int",
                defaultValue: 0,
              },
            ]}
          />
          <DocumentComponent
            title="Display time "
            component={<DisplayTime />}
            propDocs={[
              {
                prop: "value",
                description: "Changes the number",
                type: "int",
              },
            ]}
          />
          <DocumentComponent
            title="Input "
            component={<Input />}
            propDocs={[
              {
                prop: "null",
              },
            ]}
          />
          <DocumentComponent
            title="Simple text "
            component={<SimpleText />}
            propDocs={[
              {
                prop: "null",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;

import {
  Container,
  Text,
  Input,
  Image,
  Button,
  Row,
  Col,
  Grid,
} from "@nextui-org/react";
import React, { useState } from "react";
// import { storage } from "@serverless/cloud";

const DeckForm = () => {
  const [files, setFiles] = useState([]);
  const [currentImage, setImage] = useState();
  const [name, setName] = useState();
  const handleFormSubmit = () => {};
  const file = null;

  const handleOnChange = (e) => {
    console.log("FILES:", e.target.files[0]);
    const newFiles = files.concat(e.target.files[0]);
    setFiles(newFiles);
  };

  const handleNameOnChange = (e) => {
    setName(e.target.value);
  };

  const makeImageUrl = (file) => {
    return URL.createObjectURL(file);
  };

  console.log("FILES:", files);

  return (
    <Container xl>
      <Text margin="0 0 36px 0" h3 color="primary">
        Deck Form
      </Text>

      <Grid.Container gap={2}>
        <Grid xs={7} sm={4}>
          <Input
            fullWidth
            value={name}
            onChange={handleNameOnChange}
            bordered
            labelPlaceholder="Deck Name"
            color="primary"
          />
        </Grid>
        <Grid xs={7} sm={4}>
          <Input
            fullWidth
            bordered
            color="primary"
            value={file}
            areia-label="file-uploader"
            type="file"
            onChange={handleOnChange}
          />
        </Grid>
      </Grid.Container>
      <Row css={{ marginTop: "24px" }}>
        <Col>
          <Button>Save</Button>
        </Col>
      </Row>
      <Container fluid css={{ display: "flex" }}>
        <Row wrap="wrap" gap={1}>
          {files.length > 0 &&
            files.map((file) => {
              return (
                <Col span={4} css={{ mt: "1.25rem" }}>
                  <Image
                    object-fit="initial"
                    width={320}
                    height={180}
                    src={makeImageUrl(file)}
                    css={{ border: "1px solid $primary", borderRadius: "16px" }}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
};

export default DeckForm;

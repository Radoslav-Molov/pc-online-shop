import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Container, Button, Form, Alert } from "react-bootstrap";
import style from "../CreateProducts/Create.module.css";
import { addSchema } from "../Validation";
import { baseURL } from "../../util/http-request-url";

function Create(props) {
  const [title, setTitle] = useState("");
  const [caseName, setCaseName] = useState("");
  const [motherboard, setMotherboard] = useState("");
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [gpu, setGpu] = useState("");
  const [psu, setPsu] = useState("");
  const [image, setImage] = useState("");
  const [reviewLink, setReviewLink] = useState("");
  const [price, setPrice] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editProduct, setEditProduct] = useState("");
  const [validated, setValidated] = useState(true);
  const [show, setShow] = useState(false);

  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onCaseHandler = (e) => {
    setCaseName(e.target.value);
  };
  const onMotherboardHandler = (e) => {
    setMotherboard(e.target.value);
  };
  const onCpuHandler = (e) => {
    setCpu(e.target.value);
  };
  const onRamHandler = (e) => {
    setRam(e.target.value);
  };
  const onStorageHandler = (e) => {
    setStorage(e.target.value);
  };
  const onGpuHandler = (e) => {
    setGpu(e.target.value);
  };
  const onPsuHandler = (e) => {
    setPsu(e.target.value);
  };
  const onImageHandler = (e) => {
    setImage(e.target.value);
  };
  const onYoutubeHandler = (e) => {
    setReviewLink(e.target.value);
  };
  const onPriceHandler = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    if (props.edit === "true") {
      setIsEdit(true);

      axios.get(`${baseURL}/products/${props.id}`).then((res) => {
        setEditProduct(res.data);
        setTitle(res.data.title);
        setCaseName(res.data.case);
        setMotherboard(res.data.motherboard);
        setCpu(res.data.cpu);
        setRam(res.data.ram);
        setStorage(res.data.storage);
        setGpu(res.data.gpu);
        setPsu(res.data.psu);
        setImage(res.data.image);
        setReviewLink(res.data.reviewLink);
        setPrice(res.data.price);
      });
    } else {
      setIsEdit(false);
    }
  }, [props.edit]);

  const onAddHandler = async (e) => {
    e.preventDefault();
    const isValid = await addSchema.isValid({
      title,
      caseName,
      motherboard,
      cpu,
      ram,
      storage,
      gpu,
      psu,
      image,
      reviewLink,
      price,
    });
    setValidated(isValid);

    if (!isEdit) {
      axios
        .post(`${baseURL}/products`, {
          title: title,
          case: caseName,
          motherboard: motherboard,
          cpu: cpu,
          ram: ram,
          storage: storage,
          gpu: gpu,
          psu: psu,
          image: image,
          reviewLink: reviewLink,
          price: price,
        })
        .then((res) => console.log(res));
      if (!isValid) {
        setShow(true);
      }
    } else {
      axios
        .patch(`${baseURL}/products/${props.id}`, {
          title: title,
          case: caseName,
          motherboard: motherboard,
          cpu: cpu,
          ram: ram,
          storage: storage,
          gpu: gpu,
          psu: psu,
          image: image,
          reviewLink: reviewLink,
          price: price,
        })
        .then((res) => console.log(res));
    }
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [show]);

  return (
    <Modal size="lg" {...props} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {isEdit ? (
            <strong>Edit product</strong>
          ) : (
            <strong>Add new product</strong>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show ? (
          <Alert
            className={style.notification}
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>Invalid credentials!</Alert.Heading>
          </Alert>
        ) : (
          ""
        )}
        <Container>
          <h4>
            <strong>Product information</strong>
          </h4>
          <Form noValidate validated={validated} id={style.order_form}>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                defaultValue={isEdit ? editProduct.title : ""}
                onBlur={onTitleHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicCase">
              <Form.Label>Case</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter case model"
                defaultValue={isEdit ? editProduct.case : ""}
                onBlur={onCaseHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicMotherboard">
              <Form.Label>Motherboard</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter motherboard model"
                defaultValue={isEdit ? editProduct.motherboard : ""}
                onBlur={onMotherboardHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicCpu">
              <Form.Label>CPU</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CPU model"
                defaultValue={isEdit ? editProduct.cpu : ""}
                onBlur={onCpuHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicRAM">
              <Form.Label>RAM</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter RAM type"
                defaultValue={isEdit ? editProduct.ram : ""}
                onBlur={onRamHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicStorage">
              <Form.Label>Storage</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter storage type"
                defaultValue={isEdit ? editProduct.storage : ""}
                onBlur={onStorageHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicGPU">
              <Form.Label>GPU</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter GPU model"
                defaultValue={isEdit ? editProduct.gpu : ""}
                onBlur={onGpuHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPSU">
              <Form.Label>PSU</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PSU model"
                defaultValue={isEdit ? editProduct.psu : ""}
                onBlur={onPsuHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicImage">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="link"
                placeholder="Enter thumbnail link"
                defaultValue={isEdit ? editProduct.image : ""}
                onBlur={onImageHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicYT">
              <Form.Label>YT link</Form.Label>
              <Form.Control
                type="link"
                placeholder="Enter Youtube review link"
                defaultValue={isEdit ? editProduct.reviewLink : ""}
                onBlur={onYoutubeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Set price"
                defaultValue={isEdit ? editProduct.price : ""}
                onBlur={onPriceHandler}
              />
            </Form.Group>
            <Button
              onClick={onAddHandler}
              className="mt-2"
              variant="secondary"
              type="submit"
            >
              {isEdit ? "EDIT" : "PLACE ORDER"}
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Create;

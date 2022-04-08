import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Container, Button, Form } from "react-bootstrap";
import style from "../CreateProducts/Create.module.css";

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

      axios
        .get(`http://localhost:5000/api/products/${props.id}`)
        .then((res) => {
          setEditProduct(res.data);
          // setTitle(res.data.title),
          //   setCaseName(res.data.caseName),
          //   setMotherboard(res.data.motherboard),
          //   setCpu(res.data.cpu),
          //   setRam(res.data.ram),
          //   setStorage(res.data.storage),
          //   setGpu(res.data.gpu),
          //   setPsu(res.data.psu),
          //   setImage(res.data.image),
          //   setReviewLink(res.data.reviewLink),
          //   setPrice(res.data.price);
        });
    } else {
      setIsEdit(false);
    }
  }, [props.edit]);

  const onAddHandler = (e) => {
    e.preventDefault();
    if (isEdit) {
      axios
        .patch(`http://localhost:5000/api/products/${props.id}`, {
          title: editProduct.title,
          case: editProduct.case,
          motherboard: editProduct.motherboard,
          cpu: editProduct.cpu,
          ram: editProduct.ram,
          storage: editProduct.storage,
          gpu: editProduct.gpu,
          psu: editProduct.psu,
          image: editProduct.image,
          reviewLink: editProduct.reviewLink,
          price: editProduct.price,
        })
        .then((res) => console.log(res));
    } else {
      axios
        .post("http://localhost:5000/api/products", {
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
        <Container>
          <h4>
            <strong>Product information</strong>
          </h4>
          <Form id={style.order_form}>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onBlur={onTitleHandler}
                defaultValue={isEdit ? editProduct.title : ""}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicCase">
              <Form.Label>Case</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter case model"
                onBlur={onCaseHandler}
                defaultValue={isEdit ? editProduct.case : ""}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicMotherboard">
              <Form.Label>Motherboard</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter motherboard model"
                onBlur={onMotherboardHandler}
                defaultValue={isEdit ? editProduct.motherboard : ""}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicCpu">
              <Form.Label>CPU</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CPU model"
                onBlur={onCpuHandler}
                defaultValue={isEdit ? editProduct.cpu : ""}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicRAM">
              <Form.Label>RAM</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter RAM type"
                onBlur={onRamHandler}
                defaultValue={isEdit ? editProduct.ram : ""}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicStorage">
              <Form.Label>Storage</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter storage type"
                onBlur={onStorageHandler}
                defaultValue={isEdit ? editProduct.storage : ""}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicGPU">
              <Form.Label>GPU</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter GPU model"
                onBlur={onGpuHandler}
                defaultValue={isEdit ? editProduct.gpu : ""}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPSU">
              <Form.Label>PSU</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PSU model"
                onBlur={onPsuHandler}
                defaultValue={isEdit ? editProduct.psu : ""}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicImage">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="link"
                placeholder="Enter thumbnail link"
                onBlur={onImageHandler}
                defaultValue={isEdit ? editProduct.image : ""}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicYT">
              <Form.Label>YT link</Form.Label>
              <Form.Control
                type="link"
                placeholder="Enter Youtube review link"
                onBlur={onYoutubeHandler}
                defaultValue={isEdit ? editProduct.reviewLink : ""}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Set price"
                onBlur={onPriceHandler}
                defaultValue={isEdit ? editProduct.price : ""}
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

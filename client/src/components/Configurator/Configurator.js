import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Form, Image, Button, ListGroup, Alert } from "react-bootstrap";
import { UserContext } from "../../UserContext";
import style from "../Configurator/Configurator.module.css";
import { baseURL } from "../../util/http-request-url";

function Configurator({}) {
  const { user, _ } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const [selectedCaseTitle, setSelectedCaseTitle] = useState(
    "Phanteks Eclipse P360A"
  );
  const [selectedCaseImg, setSelectedCaseImg] = useState(
    "https://static3.caseking.de/media/image/geph-130_geph_130_01.jpg"
  );
  const [isIntel, setIsIntel] = useState(true);
  const [total, setTotal] = useState(110);
  const [setup, setSetup] = useState({
    caseImg: "https://static3.caseking.de/media/image/geph-130_geph_130_01.jpg",
    case: "110",
    caseName: "Phanteks Eclipse P360A",
    motherboard: "",
    motherboardName: "",
    cpu: "",
    cpuName: "",
    ram: "",
    ramName: "",
    storage: "",
    storageName: "",
    gpu: "",
    gpuName: "",
    psu: "",
    psuName: "",
  });

  const currSetup = Object.create(setup);

  const onCaseSelecthandler = (e) => {
    setSelectedCaseImg(e.target.src);
    setSelectedCaseTitle(e.target.id);
    let caseCost = e.target.value;
    currSetup["case"] = caseCost;
    currSetup["caseName"] = e.target.id;
    currSetup["caseImg"] = selectedCaseImg;
    setSetup(currSetup);
  };

  const onSocketSelecthandler = (e) => {
    if (e.target.value === "amd") {
      setIsIntel(false);
    } else {
      setIsIntel(true);
    }
  };

  const onOptionSelect = (e) => {
    let key = e.currentTarget.children[0].name;
    let cost = Number(e.currentTarget.children[0].value);
    let componentName = e.currentTarget.children[1].textContent;
    let componentKey = key + "Name";

    currSetup[key] = cost;
    currSetup[componentKey] = componentName;

    setSetup(currSetup);
  };

  useEffect(() => {
    let sum =
      Number(setup.case) +
      Number(setup.motherboard) +
      Number(setup.cpu) +
      Number(setup.ram) +
      Number(setup.storage) +
      Number(setup.gpu) +
      Number(setup.psu);
    setTotal(sum);
  }, [setup]);

  const onOrderHandler = () => {
    axios
      .post(`${baseURL}/cart`, {
        uid: user.id,
        title: "Custom build",
        image: selectedCaseImg,
        price: total,
      })
      .then((res) => setShow(true))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [show]);

  return (
    <div>
      <div id={style.config_wrapper}>
        <div id={style.img_wrapper}>
          <div key={`inline-radio`} className="mb-3" id={style.case_select}>
            <h5>CHOOSE PC CASE:</h5>
            <Form.Check
              inline
              label="Phanteks Eclipse P360A / 110$"
              name="case"
              src="https://static3.caseking.de/media/image/geph-130_geph_130_01.jpg"
              type="radio"
              title="Phanteks Eclipse P360A"
              value="110"
              id={`Phanteks Eclipse P360A`}
              onChange={onCaseSelecthandler}
            />
            <Form.Check
              inline
              label="Phanteks Evolv Shift 2 Case  / 110$"
              name="case"
              src="https://media.ldlc.com/r1600/ld/products/00/05/77/05/LD0005770547_1.jpg"
              type="radio"
              value="110"
              id={`Phanteks Evolv Shift 2`}
              onChange={onCaseSelecthandler}
            />
            <Form.Check
              inline
              label="Lian Li O11 Air Mini Case   / 89.99$"
              name="case"
              src="https://c1.neweggimages.com/ProductImage/AFSTS21082699EYR.jpg"
              type="radio"
              value="89.99"
              id={`Lian Li O11 Air Mini`}
              onChange={onCaseSelecthandler}
            />
            <Form.Check
              inline
              label="Fractal Design Meshify 2  / 139.99$"
              name="case"
              src="https://desktop.bg/system/images/270696/normal/fractal_design_meshify_2_clear_tg.jpg"
              type="radio"
              value="139.99"
              id={`Fractal Design Meshify 2`}
              onChange={onCaseSelecthandler}
            />
          </div>
          <Image src={selectedCaseImg} id={style.case_img} />
          <div id={style.title.container}>
            <p>{selectedCaseTitle}</p>
          </div>
        </div>
        <div id={style.options}>
          <h5>MOTHERBOARD SOCKET OPTIONS</h5>
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="Intel LGA 1200 Socket"
              name="socket"
              type="radio"
              value="intel"
              id={`inline-radio-1`}
              onChange={onSocketSelecthandler}
            />
            <Form.Check
              inline
              label="AMD AM4 Socket"
              name="socket"
              type="radio"
              value="amd"
              id={`inline-radio-2`}
              onChange={onSocketSelecthandler}
            />
            <div id={style.components}>
              {isIntel
                ? [
                    <div className={style.each_component}>
                      <h5>Motherboard</h5>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="motherboard"
                          value="350"
                          className={style.input}
                        ></input>
                        <span>Gigabyte Z490 Ultra</span>
                        <span className={style.span_price}>+ 350$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="motherboard"
                          value="266"
                          className={style.input}
                        ></input>
                        <span>MSI MPG Z490 Carbon</span>
                        <span className={style.span_price}>+ 266$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="motherboard"
                          value="368"
                          className={style.input}
                        ></input>
                        <span>MSI MPG Z490 Plus</span>
                        <span className={style.span_price}>+ 368$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="motherboard"
                          value="159"
                          className={style.input}
                        ></input>
                        <span>MSI MPG Z490 Plus</span>
                        <span className={style.span_price}>+ 159$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="motherboard"
                          value="620"
                          className={style.input}
                        ></input>
                        <span>ASUS ROG Maximus XII </span>
                        <span className={style.span_price}>+ 620$</span>
                      </button>
                    </div>,
                    <div className={style.each_component}>
                      <h5>CPU's</h5>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="cpu"
                          value="445"
                          className={style.input}
                        ></input>
                        <span>Core I9-11900K</span>
                        <span className={style.span_price}>+ 445$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="cpu"
                          value="341"
                          className={style.input}
                        ></input>
                        <span>Core I7-11700K</span>
                        <span className={style.span_price}>+ 341$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="cpu"
                          value="200"
                          className={style.input}
                        ></input>
                        <span>Core I5-10500</span>
                        <span className={style.span_price}>+ 200$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="cpu"
                          value="299"
                          className={style.input}
                        ></input>
                        <span>Core I5-12600k</span>
                        <span className={style.span_price}>+ 299$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="cpu"
                          value="120"
                          className={style.input}
                        ></input>
                        <span>Core I3-12100f</span>
                        <span className={style.span_price}>+ 120$</span>
                      </button>
                    </div>,
                  ]
                : [
                    <div className={style.each_component}>
                      <h5>Motherboard</h5>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="motherboard"
                          value="220"
                          className={style.input}
                        ></input>
                        <span>ASRock X570 Phantom</span>
                        <span className={style.span_price}>+ 220$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="motherboard"
                          value="440"
                          className={style.input}
                        ></input>
                        <span>Asus ROG Crosshair VIII</span>
                        <span className={style.span_price}>+ 440$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="motherboard"
                          value="238"
                          className={style.input}
                        ></input>
                        <span>MSI MPG X570 Pro</span>
                        <span className={style.span_price}>+ 238$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="motherboard"
                          value="190"
                          className={style.input}
                        ></input>
                        <span>ASRock X570S PG Riptide</span>
                        <span className={style.span_price}>+ 190$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="motherboard"
                          value="336"
                          className={style.input}
                        ></input>
                        <span>Gigabyte X570S Aorus Master</span>
                        <span className={style.span_price}>+ 336$</span>
                      </button>
                    </div>,
                    <div className={style.each_component}>
                      <h5>CPU's</h5>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="cpu"
                          value="600"
                          className={style.input}
                        ></input>
                        <span>Ryzen 9 6980X</span>
                        <span className={style.span_price}>+ 600$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="cpu"
                          value="449"
                          className={style.input}
                        ></input>
                        <span>Ryzen 9 5980X</span>
                        <span className={style.span_price}>+ 449$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="cpu"
                          value="333"
                          className={style.input}
                        ></input>
                        <span>Ryzen 7 5800X</span>
                        <span className={style.span_price}>+ 333$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="cpu"
                          value="333"
                          className={style.input}
                        ></input>
                        <span>Ryzen 7 5825U</span>
                        <span className={style.span_price}>+ 333$</span>
                      </button>
                      <button
                        href=""
                        onClick={onOptionSelect}
                        className={style.select_option}
                      >
                        <input
                          type="radio"
                          name="cpu"
                          value="234"
                          className={style.input}
                        ></input>
                        <span>Ryzen 5 5600X</span>
                        <span className={style.span_price}>+ 234$</span>
                      </button>
                    </div>,
                  ]}

              <div className={style.each_component}>
                <h5>RAM</h5>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="ram"
                    value="60"
                    className={style.input}
                  ></input>
                  <span>8GB DDR4, 3200Mhz</span>
                  <span className={style.span_price}>+ 60$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="ram"
                    value="100"
                    className={style.input}
                  ></input>
                  <span>16GB DDR4, 3200Mhz</span>
                  <span className={style.span_price}>+ 100$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="ram"
                    value="140"
                    className={style.input}
                  ></input>
                  <span>24GB DDR4, 3200Mhz</span>
                  <span className={style.span_price}>+ 140$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="ram"
                    value="270"
                    className={style.input}
                  ></input>
                  <span>32GB DDR4, 3200Mhz</span>
                  <span className={style.span_price}>+ 270$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="ram"
                    value="400"
                    className={style.input}
                  ></input>
                  <span>64GB DDR4, 3200Mhz</span>
                  <span className={style.span_price}>+ 400$</span>
                </button>
              </div>
              <div className={style.each_component}>
                <h5>Storage</h5>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="storage"
                    value="30"
                    className={style.input}
                  ></input>
                  <span>256GB SSD NVMe</span>
                  <span className={style.span_price}>+ 30$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="storage"
                    value="50"
                    className={style.input}
                  ></input>
                  <span>512GB SSD NVMe</span>
                  <span className={style.span_price}>+ 50$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="storage"
                    value="100"
                    className={style.input}
                  ></input>
                  <span>1TB SSD NVMe</span>
                  <span className={style.span_price}>+ 100$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="storage"
                    value="180"
                    className={style.input}
                  ></input>
                  <span>2TB SSD NVMe</span>
                  <span className={style.span_price}>+ 180$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="storage"
                    value="350"
                    className={style.input}
                  ></input>
                  <span>2x2TB SSD NVMe</span>
                  <span className={style.span_price}>+ 350$</span>
                </button>
              </div>
              <div className={style.each_component}>
                <h5>Video Card (GPU)</h5>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="gpu"
                    value="1270"
                    className={style.input}
                  ></input>
                  <span>Nvidia GeForce RTX 3080</span>
                  <span className={style.span_price}>+ 1270$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="gpu"
                    value="953"
                    className={style.input}
                  ></input>
                  <span>AMD Radeon RX 6800 XT</span>
                  <span className={style.span_price}>+ 953$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="gpu"
                    value="725"
                    className={style.input}
                  ></input>
                  <span>Nvidia GeForce RTX 3060 Ti</span>
                  <span className={style.span_price}>+ 725$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="gpu"
                    value="740"
                    className={style.input}
                  ></input>
                  <span>Nvidia GeForce RTX 3070</span>
                  <span className={style.span_price}>+ 740$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="gpu"
                    value="1349"
                    className={style.input}
                  ></input>
                  <span>AMD Radeon RX 6900 XT</span>
                  <span className={style.span_price}>+ 1349$</span>
                </button>
              </div>
              <div className={style.each_component}>
                <h5>Power Supply (PSU)</h5>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="psu"
                    value="206"
                    className={style.input}
                  ></input>
                  <span>Corsair RM750x</span>
                  <span className={style.span_price}>+ 206$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="psu"
                    value="351"
                    className={style.input}
                  ></input>
                  <span>Seasonic Prime TX-1000</span>
                  <span className={style.span_price}>+ 351$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="psu"
                    value="60"
                    className={style.input}
                  ></input>
                  <span>Corsair CX450</span>
                  <span className={style.span_price}>+ 60$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="psu"
                    value="170"
                    className={style.input}
                  ></input>
                  <span>XPG Core Reactor 650W</span>
                  <span className={style.span_price}>+ 170$</span>
                </button>
                <button
                  href=""
                  onClick={onOptionSelect}
                  className={style.select_option}
                >
                  <input
                    type="radio"
                    name="psu"
                    value="609"
                    className={style.input}
                  ></input>
                  <span>Corsair AX1600i</span>
                  <span className={style.span_price}>+ 609$</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={style.price}>
        {show ? (
          <Alert
            className={style.notification}
            variant="success"
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>Item added to cart!</Alert.Heading>
          </Alert>
        ) : (
          ""
        )}
        <ListGroup id={style.setupList} variant="flush">
          <h4>Current Setup:</h4>
          <ListGroup.Item>
            <strong>CASE:</strong>{" "}
            {setup.caseName === "" ? "Not selected" : setup.caseName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>MOTHERBOARD:</strong>{" "}
            {setup.motherboardName === ""
              ? "Not selected"
              : setup.motherboardName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>CPU:</strong>{" "}
            {setup.cpuName === "" ? "Not selected" : setup.cpuName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>RAM:</strong>{" "}
            {setup.ramName === "" ? "Not selected" : setup.ramName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>STORAGE:</strong>{" "}
            {setup.storageName === "" ? "Not selected" : setup.storageName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>GPU:</strong>{" "}
            {setup.gpuName === "" ? "Not selected" : setup.gpuName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>PSU:</strong>{" "}
            {setup.psuName === "" ? "Not selected" : setup.psuName}
          </ListGroup.Item>
        </ListGroup>
        Total: <strong>{total}$</strong>
      </div>
      <Button id={style.order_btn} onClick={onOrderHandler} variant="secondary">
        PLACE ORDER
      </Button>
    </div>
  );
}

export default Configurator;

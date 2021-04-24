import React, { Component } from "react";
import Glasstitle from "./Glasstitle";

class Glasses extends Component {
  state = {
    glassImg: "./img/glassesImage/v5.png",
    glassCost: "$50",
    glassName: "GUCCI G8759H",
  };

  chooseGlasses = (type) => {
    switch (type) {
      case "chocolate":
        this.setState({
          glassImg: "./img/glassesImage/v1.png",
          glassCost: "$30",
          glassName: "GUCCI G8850U",
        });

        break;
      case "americaFlag":
        this.setState({
          glassImg: "./img/glassesImage/v2.png",
          glassCost: "$50",
          glassName: "GUCCI G8759H",
        });

        break;
      case "pilot":
        this.setState({
          glassImg: "./img/glassesImage/v3.png",
          glassCost: "$30",
          glassName: "DIOR D6700HQ",
        });

        break;
      case "red":
        this.setState({
          glassImg: "./img/glassesImage/v4.png",
          glassCost: "$30",
          glassName: "DIOR D6005U",
        });

        break;
      case "icecream":
        this.setState({
          glassImg: "./img/glassesImage/v5.png",
          glassCost: "$30",
          glassName: "PRADA P8750",
        });

        break;
      case "white":
        this.setState({
          glassImg: "./img/glassesImage/v6.png",
          glassCost: "$50",
          glassName: "GUCCI G8759H",
        });

        break;
      case "tiger":
        this.setState({
          glassImg: "./img/glassesImage/v7.png",
          glassCost: "$50",
          glassName: "GUCCI G8759H",
        });

        break;
      case "matrix":
        this.setState({
          glassImg: "./img/glassesImage/v8.png",
          glassCost: "$50",
          glassName: "GUCCI G8759H",
        });

        break;
      case "pilotBlue":
        this.setState({
          glassImg: "./img/glassesImage/v9.png",
          glassCost: "$50",
          glassName: "GUCCI G8759H",
        });

        break;
    }
  };

  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <Glasstitle />
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <section className="model d-flex justify-content-center col-5">
                <div
                  className="card text-left"
                  style={{ width: 300, position: "relative" }}
                >
                  <img
                    className="card-img-top"
                    src="./img/glassesImage/model.jpg"
                    alt="hinh model"
                  />
                  <img
                    src={this.state.glassImg}
                    alt="kinh"
                    style={{
                      width: 170,
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "16%",
                    }}
                  />
                  <div className="card-body">
                    <span className="card-title badge-danger h3 px-2 rounded">
                      {this.state.glassCost}
                    </span>
                    <p className="card-text mt-2">{this.state.glassName}</p>
                  </div>
                </div>
              </section>
              <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlasses("chocolate")}
                  >
                    <img
                      src="./img/glassesImage/v1.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlasses("americaFlag")}
                  >
                    <img
                      src="./img/glassesImage/v2.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlasses("pilot")}
                  >
                    <img
                      src="./img/glassesImage/v3.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlasses("red")}
                  >
                    <img
                      src="./img/glassesImage/v4.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlasses("icecream")}
                  >
                    <img
                      src="./img/glassesImage/v5.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlasses("white")}
                  >
                    <img
                      src="./img/glassesImage/v6.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlasses("tiger")}
                  >
                    <img
                      src="./img/glassesImage/v7.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlasses("matrix")}
                  >
                    <img
                      src="./img/glassesImage/v8.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlasses("pilotBlue")}
                  >
                    <img
                      src="./img/glassesImage/v9.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Glasses;

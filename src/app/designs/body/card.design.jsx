import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardDesign(props) {
  console.log(props)
  function renderView() {
    if(props.name === 'homeThumbnail') {
      return (
        <div>
          <Card
            style={{
              width: "14.5rem",
              maxHeight: "29rem",
              marginTop: 3,
              boxShadow: "3px 3px 3px 3px #f5f5f5",
            }}
          >
            <Link to={`/viewproduct/${props.items.id}`} className="link">
              <Card.Header>
                {/* <Card.Text> */}
                <Box display="flex" justifyContent="center">
                  {props.status === "online" ? (
                    <Typography
                      component={"span"}
                      align="center"
                      className="mr-auto"
                      style={{ fontSize: "10px", color: "#4CAF50" }}
                    >
                      Online
                    </Typography>
                  ) : (
                    <Typography
                      component={"span"}
                      align="center"
                      className="mr-auto"
                      style={{ fontSize: "10px", color: "red" }}
                    >
                      Offline
                    </Typography>
                  )}
                  <Typography
                    component={"span"}
                    align="center"
                    style={{ fontSize: "10px", color: "blue" }}
                  >
                    ₱ {props.items.price}
                  </Typography>
                </Box>
                {/* </Card.Text> */}
              </Card.Header>
              <Box display="flex" justifyContent="center">
                <Card.Img
                  variant="top"
                  src={props.items.image}
                  style={{
                    width: "auto",
                    height: "160px",
                    marginBottom: "-15%",
                    padding: "28px",
                  }}
                />
              </Box>
              <Card.Body>
                <Box
                  textOverflow="ellipsis"
                  maxHeight="70px"
                  height="70px"
                  overflow="hidden"
                  display="flex"
                  justifyContent="center"
                  marginTop="4%"
                >
                  <Typography align="center" variant="button">
                    <strong>{props.items.title}</strong>
                  </Typography>
                </Box>

                {/* <Card.Text style={{  }}> */}
                {/* <GadgetShortDetailsComponent /> */}
                <Typography variant="caption">
                  <strong>Details:</strong>
                </Typography>
                <Box
                  component={"div"}
                  overflow="hidden"
                  className="productViewDetails"
                >
                  {props.items.description}
                </Box>
                {/* </Card.Text> */}
              </Card.Body>
              <Card.Footer>
                <Box component={"div"} display="flex" justifyContent="center">
                  <Typography
                    component={"span"}
                    align="center"
                    className="mr-auto"
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    <i className="fas fa-clock"></i> {props.items.timestamp}
                  </Typography>
                  <Typography
                    component={"span"}
                    align="center"
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    <i className="fas fa-store"></i> {props.stores}
                  </Typography>
                </Box>
              </Card.Footer>
            </Link>
          </Card>
        </div>
      );
    } else if (String(props.subcategory) === String(props.subcat)) {
      return (
        <div>
          <Card
            style={{
              width: "14.5rem",
              maxHeight: "29rem",
              marginTop: 3,
              boxShadow: "3px 3px 3px 3px #f5f5f5",
            }}
          >
            <Link to={`/viewproduct/${props.allproducts.id}`} className="link">
              <Card.Header>
                {/* <Card.Text> */}
                <Box display="flex" justifyContent="center">
                  {props.allproducts.status === "online" ? (
                    <Typography
                      component={"span"}
                      align="center"
                      className="mr-auto"
                      style={{ fontSize: "10px", color: "#4CAF50" }}
                    >
                      Online
                    </Typography>
                  ) : (
                    <Typography
                      component={"span"}
                      align="center"
                      className="mr-auto"
                      style={{ fontSize: "10px", color: "red" }}
                    >
                      Offline
                    </Typography>
                  )}
                  <Typography
                    component={"span"}
                    align="center"
                    style={{ fontSize: "10px", color: "blue" }}
                  >
                    ₱ {props.allproducts.price}
                  </Typography>
                </Box>
                {/* </Card.Text> */}
              </Card.Header>
              <Box display="flex" justifyContent="center">
                <Card.Img
                  variant="top"
                  src={props.allproducts.image}
                  style={{
                    width: "auto",
                    height: "160px",
                    marginBottom: "-15%",
                    padding: "28px",
                  }}
                />
              </Box>
              <Card.Body>
                <Box
                  textOverflow="ellipsis"
                  maxHeight="70px"
                  height="70px"
                  overflow="hidden"
                  display="flex"
                  justifyContent="center"
                  marginTop="4%"
                >
                  <Typography align="center" variant="button">
                    <strong>{props.allproducts.title}</strong>
                  </Typography>
                </Box>

                {/* <Card.Text style={{  }}> */}
                {/* <GadgetShortDetailsComponent /> */}
                <Typography variant="caption">
                  <strong>Details:</strong>
                </Typography>
                <Box
                  component={"div"}
                  overflow="hidden"
                  className="productViewDetails"
                >
                  {props.allproducts.description}
                </Box>
                {/* </Card.Text> */}
              </Card.Body>
              <Card.Footer>
                <Box component={"div"} display="flex" justifyContent="center">
                  <Typography
                    component={"span"}
                    align="center"
                    className="mr-auto"
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    <i className="fas fa-clock"></i> {props.allproducts.timestamp}
                  </Typography>
                  <Typography
                    component={"span"}
                    align="center"
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    <i className="fas fa-store"></i> {props.stores}
                  </Typography>
                </Box>
              </Card.Footer>
            </Link>
          </Card>
        </div>
      );
    }
  }
  return renderView();
}
export default CardDesign;

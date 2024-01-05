import { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

const History = () => {
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    const getDogInfoFromLocalStorage = () => {
      const storedDogList = JSON.parse(localStorage.getItem("dogs")) || [];
      console.log(storedDogList);
      setDogList(storedDogList);
    };

    getDogInfoFromLocalStorage();
  }, []);

  function handleAddToCart(dog) {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [
      ...existingCart,
      {
        name: dog.name,
        image: dog.image,
        price: dog.price,
      },
    ];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <>
      <Container>
        <Row
          xs={1}
          sm={2}
          md={3}
          style={{
            flexShrink: 0,
            width: "100%",
            maxWidth: "100%",
            paddingRight: "calc(var(--bs-gutter-x) * .5)",
            paddingLeft: "calc(var(--bs-gutter-x) * 1.5)",
            marginTop: "var(--bs-gutter-y)",
          }}
        >
          {dogList.map((dog, i) => {
            return (
              <div key={i} className="col-lg-4 mb-4">
                <Card style={{ width: "300px" }}>
                  <Card.Img
                    variant="top"
                    src={dog.image}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body className="bg-dark">
                    <Card.Text
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      <div>
                        <h5>{dog.name}</h5>
                        <h6>{dog.price}</h6>
                      </div>

                      <Button
                        style={{ height: "40px" }}
                        variant="primary"
                        onClick={() => {
                          handleAddToCart(dog);
                        }}
                      >
                        Add To Cart
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default History;

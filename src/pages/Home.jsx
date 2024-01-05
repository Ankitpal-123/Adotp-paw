import { useState } from "react";
import { Card, Container, Button, Row } from "react-bootstrap";

const Home = () => {
  const [dog, setDog] = useState({
    name: "Briard",
    image: "https://images.dog.ceo/breeds/briard/n02105251_3551.jpg",
    price: "₹12,000",
  });

  const handleGetRandom = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const dogInfo = {
        name: formatText(data.message),
        image: data.message,
        price: generateRandomPrice(),
      };

      const existingDogList = JSON.parse(localStorage.getItem("dogs")) || [];

      existingDogList.push(dogInfo);

      localStorage.setItem("dogs", JSON.stringify(existingDogList));

      setDog(dogInfo);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  };

  function handleAddToCart() {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(dog);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  }

  function formatText(text) {
    const preWord = text.split("/")[4];
    const words = preWord.split("-");
    const formattedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const formattedText = formattedWords.join(" ");

    return formattedText;
  }

  function generateRandomPrice() {
    const minPrice = 5000;
    const maxPrice = 20000;
    const step = 1000;

    const randomPrice =
      Math.floor(Math.random() * ((maxPrice - minPrice) / step + 1)) * step +
      minPrice;

    return `₹${randomPrice.toLocaleString("en-IN")}`;
  }

  console.log(dog);

  return (
    <Container fluid="md">
      <Row xs={1} sm={2} md={3}>
        <Card className="m-auto" style={{ width: "800px" }}>
          <Card.Img
            variant="top"
            src={dog.image}
            style={{ height: "400px", objectFit: "cover" }}
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
                  handleAddToCart();
                }}
              >
                Add To Cart
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>

      <div className="d-flex justify-content-center mt-3">
        <Button
          variant="primary"
          onClick={() => {
            handleGetRandom();
          }}
        >
          Get Random Dog
        </Button>
      </div>
    </Container>
  );
};

export default Home;

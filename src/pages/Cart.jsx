import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const CartDetail = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleDeleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <Container fluid="md" style={{ marginTop: "80px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((dog, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={dog.image}
                  alt={dog.name}
                  style={{ height: "50px", width: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{dog.name}</td>
              <td>{dog.price}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CartDetail;

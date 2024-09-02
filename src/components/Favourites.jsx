import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const myList = useSelector((state) => state.myList);
  const dispatch = useDispatch();
  return (
    <Container>
      <h2>My list of favourite companies</h2>
      <ListGroup>
        {myList.map((company, i) => (
          <ListGroupItem key={i}>
            <Link to={`${company}`}>{company}</Link>
            <Button
              variant="danger"
              className="ml-3"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: company })
              }
            >
              Remove
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};
export default Favourites;

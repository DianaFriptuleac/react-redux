import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";

const Favourites = () => {
  const myList = useSelector((state) => state.myList.content);
  const dispatch = useDispatch();
  return (
    <Container>
      <Link to="/" className="text-decoration-none text-dark ">
        <h2 className="text-center my-3">My list of favourite companies</h2>
      </Link>

      <ListGroup>
        {myList.map((company, _id) => (
          <ListGroupItem key={_id} className="d-flex justify-content-between">
            <Link to={`/${company}`}>{company}</Link>
            <Button
              variant="danger"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: company })
              }
            >
              <BsTrash3 />
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};
export default Favourites;

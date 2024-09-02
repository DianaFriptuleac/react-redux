import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";

const Favourites = () => {
  const myList = useSelector((state) => state.myList);
  const dispatch = useDispatch();
  return (
    <Container>
         <Link to="/">
         <h2 className="text-center my-3">My list of favourite companies</h2>
      </Link>
     
      <ListGroup>
        {myList.map((company, _id) => (
          <ListGroupItem key={_id}>
            <Link to={`/${company}`}>{company}</Link>
            <Button
              variant="danger"
              className="ms-3"
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


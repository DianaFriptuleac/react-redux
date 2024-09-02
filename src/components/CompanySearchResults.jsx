import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListIndicator from "./ListIndicator";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch()
  const myList = useSelector(state => state.myList)

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
  }, [params.company]);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleList = ()=>{
if(myList.includes(params.company)) {
  dispatch({type: "REMOVE_FROM_FAVOURITES",payload:params.company})
}else{
  dispatch ({type:"ADD_TO_FAVOURITES", payload:params.company})
}
  }

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <ListIndicator/>
          <Button onClick={handleList}>
            {myList.includes(params.company) ?"Remove" : "Add"}
          </Button>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
  
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

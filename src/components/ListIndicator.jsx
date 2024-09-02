import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux'

const ListIndicator = () => {
  const navigate = useNavigate()
   // Accedo direttamente a myList
  const myList = useSelector((state) => state.myList)

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/favourites')}
        className="d-flex align-items-center"
      >
      <FaHeart />
        <span className="ms-2">{myList.length}</span> {/* Mostro il numero di preferiti */}
      </Button>
    </div>
  )
}

export default ListIndicator

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const cartlist = [
  {
    id: "1",
    pic: "https://dummyimage.com/450x300/e6e6ed/0a0a0a",
    item: "fancy product",
    price: "$40.00 - $80.00",
  },
  {
    id: "2",
    pic: "https://dummyimage.com/450x300/e6e6ed/0a0a0a",
    item: "Special Item",
    price: "$18.00",
  },
  {
    id: "3",
    pic: "https://dummyimage.com/450x300/e6e6ed/0a0a0a",
    item: "Sale Item",
    price: "$25.00",
  },
  {
    id: "4",
    pic: "https://dummyimage.com/450x300/e6e6ed/0a0a0a",
    item: "Popular Item",
    price: "$40.00",
  },
  {
    id: "5",
    pic: "https://dummyimage.com/450x300/e6e6ed/0a0a0a",
    item: "Sale Item",
    price: "$25.00",
  },
  {
    id: "6",
    pic: "https://dummyimage.com/450x300/e6e6ed/0a0a0a",
    item: "Fancy Product",
    price: "$120.00 - $280.00",
  },
  {
    id: "7",
    pic: "https://dummyimage.com/450x300/e6e6ed/0a0a0a",
    item: "Special Item",
    price: "$18.00",
  },
  {
    id: "8",
    pic: "https://dummyimage.com/450x300/e6e6ed/0a0a0a",
    item: "Popular Item",
    price: "$40.00",
  },
];
export function Card({ count, setCount }) {
 
  return (
    <div>
      <div className="cart">
        {cartlist.map((value, index) => (
          <div className="items1" key={index}>
            <img src={value.pic} alt={value.item}></img>
            <div className="b1">
              <h2>{value.item}</h2>
              <h3 className="p1">{value.price}</h3>
              <Button
                className="bt"
                id={value.item}
                startIcon={<AddIcon />}
                onClick={() => setCount(count + 1)}
              >
                Add to Cart
              </Button>{" "}
              <br />
              <Button
                className="bt1"
                id={value.price}
                startIcon={<DeleteIcon />}
                onClick={() => setCount(count - 1)}
              >
                Remove from Cart
              </Button>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "./Slice2";

export default function FoodCart({ food, price }) {
    const [inCart, setInCart] = useState(false);
    const dispatch = useDispatch();

    function handleClick() {
        if (inCart) {
            dispatch(removeItems());
            setInCart(false);
        } else {
            dispatch(addItems());
            setInCart(true);
        }
    }

    return (
        <div style={styles.card}>
            <h3 style={styles.foodName}>{food}</h3>
            <p style={styles.price}>₹{price}</p>
            <button
                onClick={handleClick}
                style={{
                    ...styles.button,
                    backgroundColor: inCart ? "#ff4d4d" : "#4CAF50"
                }}
            >
                {inCart ? "Remove" : "Add"}
            </button>
        </div>
    );
}

const styles = {
    card: {
        padding: "15px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        width: "160px",
        backgroundColor: "#fff"
    },
    foodName: {
        fontSize: "18px",
        margin: "10px 0",
        color: "#333"
    },
    price: {
        fontSize: "16px",
        color: "#666"
    },
    button: {
        padding: "8px 14px",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px",
        marginTop: "10px"
    }
};

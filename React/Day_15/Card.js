import { useState } from "react";
import FoodCart from "./FoodCart";

const foodItems = [
    { id: 1, food: 'Pizza', price: '200' },
    { id: 2, food: 'Burger', price: '120' },
    { id: 3, food: 'Pasta', price: '180' },
    { id: 4, food: 'Sandwich', price: '90' },
    { id: 5, food: 'Fried Rice', price: '150' },
    { id: 6, food: 'Noodles', price: '130' },
    { id: 7, food: 'Samosa', price: '20' },
    { id: 8, food: 'Chowmein', price: '110' },
    { id: 9, food: 'Dosa', price: '100' },
    { id: 10, food: 'Paneer Tikka', price: '220' },
];

export default function Card() {
    return (
        <div style={styles.container}>
            {foodItems.map((value) => {
                return (
                    <div key={value.id} style={styles.card}>
                        <FoodCart food={value.food} price={value.price} />
                    </div>
                );
            })}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
    },
    card: {
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        backgroundColor: "#fff",
        transition: "transform 0.2s",
    }
};

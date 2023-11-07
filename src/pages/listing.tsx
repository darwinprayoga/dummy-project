import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  QuerySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [items, setItems] = useState<
    Array<{ name: string; price: string; id: string }>
  >([]);
  const [newItem, setNewItem] = useState<{
    name: string;
    price: string;
    id: string;
  }>({ name: "", price: "", id: "" });
  const [total, setTotal] = useState<number>(0);

  // Add item to database
  const addItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.price !== "") {
      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        price: newItem.price,
      });
      setNewItem({ name: "", price: "", id: "" });
    }
  };

  // Read items from database
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let itemsArr: Array<{ name: string; price: string; id: string }> = [];

      snapshot.forEach((itemDoc) => {
        const itemData = itemDoc.data();
        if (itemData && itemData.name && itemData.price) {
          itemsArr.push({
            name: itemData.name,
            price: itemData.price,
            id: itemDoc.id,
          });
        }
      });
      setItems(itemsArr);

      // Read total from itemsArr
      const calculateTotal = () => {
        const totalPrice = itemsArr.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0,
        );
        setTotal(totalPrice);
      };
      calculateTotal();
      return () => unsubscribe();
    });
  }, []);

  // Delete items from database
  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <main className="bg-white ">
      <div className="min-h-screen z-10 w-full max-w-5xl items-center justify-between text-sm ">
        <div className="flex items-center w-screen py-8 px-12 xl:px-24 lg:px-18 md:px-12 md:py-12 sm:px-8 sm:py-8">
          <div className="w-1/2 flex flex-col justify-center space-y-4 xl:space-y-8 xl:py-24 lg:space-y-8 lg:py-24 md:space-y-4 sm:space-y-4">
            <div className="text-black font-bold text-5xl xl:w-2/3 xl:text-7xl lg:w-2/3 lg:text-6xl md:w-4/5 md:text-5xl sm:w-4/5 sm:text-4xl">
              Our Expense Tracker
            </div>
            <p className="text-black text-xs lg:text-lg md:text-sm sm:text-sm sm:w-3/4">
              Discover the power of 'Our Expense Tracker' and take control of
              your finances like never before.
            </p>
            <div className="flex flex-wrap space-x-2">
              <button className="text-white bg-[#3461FF] font-medium rounded-full text-xs px-2 lg:h-12 lg:px-6 md:h-8 md:text-sm md:px-4 sm:h-6">
                Lets Track
              </button>
            </div>
          </div>
          <div className="shadow-2xl bg-white rounded-lg items-center justify-between p-6 h-min">
            <form className="grid grid-cols-6 items-center text-black ">
              <input
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                className="col-span-3 p-3 border rounded-lg hover:border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="text"
                placeholder="Enter Item"
              />
              <input
                value={newItem.price}
                onChange={(e) =>
                  setNewItem({ ...newItem, price: e.target.value })
                }
                className="col-span-2 p-3 border mx-3 rounded-lg hover:border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                type="number"
                placeholder="Enter $"
              />
              <button
                onClick={addItem}
                className="bg-[#3461FF] text-white  p-3 text-xl rounded-lg"
                type="submit"
              >
                +
              </button>
            </form>
            <ul>
              {items.map((item, id) => (
                <li key={id} className="my-4 w-full flex justify-between">
                  <div className="text-black p-4 w-full flex justify-between rounded-lg col-span-3 border">
                    <span className="capitalize">{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-[#ff3d47] ml-3 w-16 rounded-lg"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            {items.length < 1 ? (
              ""
            ) : (
              <div className="flex justify-between p-3 text-black">
                <span>Total</span>
                <span>${total}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

import React, { useEffect, useState } from "react";
import "../../App.css";
import PropertyTableRow from "./PropertyTableRow";
// firebase
import { db } from "../../../app/utils/firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
function PropertyTables() {
  // styles
  const tableStyle = {
    borderCollapse: "collapse",
    border: "blue",
    letterSpacing: "1px",

    fontSize: "0.8rem",
    width: "100%",
    color: "black",
    backgroundColor: "#F5F5F5",
  };

  const cellStyle = {
    // border: "1px solid rgb(190, 190, 190)",
    padding: "5px 10px",
  };
  // state to hold the all properties list
  const [propertyList, setPropertyList] = useState([]);
  useEffect(() => {
    // get saved portfolio list from database
    // const portfolioListRef = collection(db, `user_data/testUser/portfolio`);

    // try {
    //   const q = query(portfolioListRef, orderBy("dateAdded", "desc"));
    //   const allDocs = onSnapshot(q, (snapshot) => {
    //     const items = [];
    //     snapshot.forEach((doc) => {
    //       items.push({ ...doc.data() });
    //       setsavedPortfolioList(items);
    //     });
    //   });
    // } catch (err) {
    //   console.log(err);
    // }

    // get saved properties from database
    const listRef = collection(db, `user_data/testUser/properties`);

    try {
      const q = query(listRef, orderBy("numberOfUnits", "desc"));
      const allDocs = onSnapshot(q, (snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data() });
          setPropertyList(items);
        });
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="propTable">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle} scope="col" className="propertyColor">
              Property
            </th>
            <th style={cellStyle} className="propertyColor">
              Type
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Total Units
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Active Units
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Menu
            </th>
          </tr>
        </thead>
        <tbody>
          {propertyList.map((property) => (
            <PropertyTableRow
              key={property.key}
              propertyKey={property.key}
              name={property.name}
              address={property.address}
              numberOfUnits={property.numberOfUnits}
              availableUnits={property.availableUnits}
              propertyType={property.propertyType}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyTables;

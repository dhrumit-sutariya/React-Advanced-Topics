import React, { useState, useEffect } from "react";

const IndexedDb = () => {
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    const request = window.indexedDB.open("IndexDemo", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains("demo")) {
        db.createObjectStore("demo", { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      setDatabase(db);
    };

    request.onerror = (event) => {
      console.error("Error opening IndexedDB", event.target.error);
    };

    return () => {
      if (database) {
        database.close();
      }
    };
  }, []);

  const addData = (data) => {
    if (database) {
      const transaction = database.transaction(["demo"], "readwrite");
      const objectStore = transaction.objectStore("demo");

      const request = objectStore.add(data);

      request.onsuccess = () => {
        console.log("Data added successfully");
      };

      request.onerror = (event) => {
        console.log("Error adding data", event.target.error);
      };
    }
  };

  const retrieveData = () => {
    if (database) {
      const transaction = database.transaction(["demo"], "readonly");
      const objectStore = transaction.objectStore("demo");

      const request = objectStore.getAll();

      request.onsuccess = (event) => {
        console.log("Data retrieved successfully", event.target.result);
      };

      request.onerror = (event) => {
        console.error("Error retrieving data", event.target.error);
      };
    }
  };

  return (
    <div>
      <h1>Indexed DB</h1>
      <button onClick={() => addData({ name: "dhrumit", age: 23 })}>
        Add Data
      </button>
      <button onClick={retrieveData}>Retrieve Data</button>
    </div>
  );
};

export default IndexedDb;

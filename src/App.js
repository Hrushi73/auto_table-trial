import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./App.css";

function App() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");

  const getPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#my-table" });
    doc.save("table.pdf");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={firstname}
        onChange={(e) => setfirstname(e.target.value)}
      />
      <header className="App-header">
        <table id="my-table">
          <tbody>
            <tr>
              <td colspan="7"> hi enter following details in the form</td>
            </tr>
            <tr>
              <td colspan="3">first name</td>
              <td colspan="4">{firstname}</td>
            </tr>
            <tr>
              <td colspan="3">lastname</td>
              <td colspan="4">
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
                {lastname}
              </td>
            </tr>
            <tr>
              <td colspan="3">5</td>
              <td colspan="4">6</td>
            </tr>
          </tbody>
        </table>

        <button onClick={getPDF}>get pdf</button>
      </header>
    </div>
  );
}

export default App;

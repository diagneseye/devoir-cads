import './App.css';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

function App() {
  const [employes, setEmployes] = useState([]);
  useEffect(() => {
    const fetchEMployees = async () => {
      const resp = await fetch("https://dummy.restapiexample.com/api/v1/employees")
      const employes_json = await resp.json()
      setEmployes(employes_json);
    };
    fetchEMployees();
  }, []);


  return (
    <div className="App">
      
         <Table striped bordered hover>
            <thead >
              <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Salaires</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody >
              {employes.map((e) => (
                <tr >
                  <td>{e.id}</td>
                  <td>{e.employee_name}</td>
                  <td>{e.employee_salary}</td>
                  <td>{e.employee_age}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>

            </tfoot>
          </Table>
        </div>

  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table} from 'react-bootstrap'
function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const getEmployees = async () => {
      const data = await axios.get('http://localhost:3000/employees');
      // fetch() : json parse 직접 ==> response.json() 호출
      // axios() : json 자동으로 parse ==> state에 바로 담으면 됨
      console.log(data);
      setEmployees(data.data); // setEmployees(data)
    };
    getEmployees();
  }, []);
  return (
    <div>
      <h1>사원목록</h1>
      <table>
        <tr>
          <th>사번</th>
          <th>이름</th>
          <th>이메일</th>
          <th>전화번호</th>
        </tr>
        {employees.map((emp) => (
          <tr key={emp._id}>
            <td>{emp.employee_id}</td>
            <td>
              {emp.first_name} {emp.last_name}
            </td>
            <td>{emp.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;

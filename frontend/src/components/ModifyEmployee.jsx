import { useState } from 'react';
import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
function ModifyExmployee() {
  const [validated, setValidated] = useState(false);
  const modalStyle = {
    display: 'block',
    position: 'fixed',
    zIndex: 999,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    updateEmployee();
  };
  const updateEmployee = async () => {
    await axios
      .post('http://localhost:3000/employees', {
        employee_id: document.querySelector('#EmpId').value,
        first_name: document.querySelector('#EmpFirstName').value,
        last_name: document.querySelector('#EmpLastName').value,
        hire_date: document.querySelector('#EmpHireDate').value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="modal show" style={modalStyle}>
      <Modal.Dialog fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>사원정보 수정</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="EmpId">
              <Form.Label>사번</Form.Label>
              <Form.Control type="number" placeholder="사번을 입력하세요" required/>
              <Form.Text className="text-muted">
                추후 사번은 자동 생성되어 부여될 예정입니다.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="EmpFirstName">
              <Form.Label>성</Form.Label>
              <Form.Control type="text" placeholder="성 을 입력하세요" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="EmpLastName">
              <Form.Label>이름</Form.Label>
              <Form.Control type="text" placeholder="이름을 입력하세요" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="EmpHireDate">
              <Form.Label>입사일</Form.Label>
              <Form.Control type="date" placeholder="입사일을 선택하세요" required />
              <Form.Text className="text-muted">
                입사일을 선택하지 않으면, 등록일 기준으로 저장됩니다.
              </Form.Text>
            </Form.Group>
            <Button type="submit">등록</Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModifyExmployee;

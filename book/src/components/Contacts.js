import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Contact from "./Contact";

const Contacts = () => {
  useEffect(() => {
    getContacts();
  }, []);

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getContacts = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=12");
      setContacts(res.data.results);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Fragment>
      <Row>
        {loading &&
          contacts.map((contact) => (
            <Col sm={12} md={6} lg={4} key={contact.login.uuid}>
              <Contact contact={contact} />

              {/* {task.map((tasks) => (<div className='gi' key={tasks.id} >  {tasks.id} </div>))} */}
            </Col>
          ))}
      </Row>
    </Fragment>
  );
};

export default Contacts;

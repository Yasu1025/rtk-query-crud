import React, { memo, useEffect, VFC } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetContactsQuery } from "../services/contactsApi";
import { Contact } from "../models/contact.model";

const Home: VFC = memo(() => {
  const { data, isLoading, error } = useGetContactsQuery();

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong...");
    }
  }, [error]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <Link to="/addContact">
        <button className="btn btn-add">Add New Contact</button>
      </Link>
      <br />
      <br />
      <table className="styled-table">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((contact: Contact, index: number) => (
            <tr key={contact.id}>
              <th scope="row">{index + 1}</th>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.contact}</td>
              <td>
                <Link to={`/edit-contact/${contact.id}`}>
                  <button className="btn btn-edit">Edit</button>
                </Link>
                <button className="btn btn-delete">Delete</button>
                <Link to={`/info/${contact.id}`}>
                  <button className="btn btn-view">View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default Home;

import React from "react";
import "./users.css";

function Users() {
  const data = [
    {
      name: "Vonc",
      city: "france",
      count: "1,082",
      stack: "git, github, spring-boot",
    },
    {
      name: "imhvost",
      city: "Ukraine",
      count: "3321",
      stack: "javascript, vuejs3, html",
    },
    {
      name: "Vonc",
      city: "france",
      count: "1,082",
      stack: "git, github, spring-boot",
    },
    {
      name: "Tanaike",
      city: "japan",
      count: "275",
      stack: "flutter, dart, android",
    },
    {
      name: "Vonc",
      city: "france",
      count: "1,082",
      stack: "git, github, spring-boot",
    },
    {
      name: "imhvost",
      city: "Ukraine",
      count: "3321",
      stack: "javascript, vuejs3, html",
    },
    {
      name: "Vonc",
      city: "france",
      count: "1,082",
      stack: "git, github, spring-boot",
    },
    {
      name: "Tanaike",
      city: "japan",
      count: "275",
      stack: "flutter, dart, android",
    },
    {
      name: "Tanaike",
      city: "japan",
      count: "275",
      stack: "flutter, dart, android",
    },
    {
      name: "Vonc",
      city: "france",
      count: "1,082",
      stack: "git, github, spring-boot",
    },
    {
      name: "imhvost",
      city: "Ukraine",
      count: "3321",
      stack: "javascript, vuejs3, html",
    },
    {
      name: "Vonc",
      city: "france",
      count: "1,082",
      stack: "git, github, spring-boot",
    },
    {
      name: "Tanaike",
      city: "japan",
      count: "275",
      stack: "flutter, dart, android",
    },
    {
      name: "Tanaike",
      city: "japan",
      count: "275",
      stack: "flutter, dart, android",
    },
    {
      name: "Vonc",
      city: "france",
      count: "1,082",
      stack: "git, github, spring-boot",
    },
    {
      name: "imhvost",
      city: "Ukraine",
      count: "3321",
      stack: "javascript, vuejs3, html",
    },
    {
      name: "Vonc",
      city: "france",
      count: "1,082",
      stack: "git, github, spring-boot",
    },
    {
      name: "Tanaike",
      city: "japan",
      count: "275",
      stack: "flutter, dart, android",
    }
  ];
  return (
    <div>
      <p style={{ MarginTop: "1000px" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eaque
        zsdgdgdfrhhhhh Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur rem fugiat molestiae animi vero rerum et est dolores repellat
        quasi quam ab cumque aut dolore iste excepturi tenetur, sequi quos.
      </p>

      <div className="users container">
        <div className="row">
          {data.map((e, id) => {
            return (
              <div className="users_ele col-sm-3 col-lg-2 m-4" key={id}>
                <h3>{e.name}</h3>
                <p className="text-muted">{e.city}</p>
                <p>{e.count}</p>
                <p>{e.stack}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;

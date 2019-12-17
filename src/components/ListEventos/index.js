/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-parens */
import React from "react";
import Container from "react-materialize/lib/Container";
import { NavLink, Redirect } from "react-router-dom";

// export const Eventos = ({ eventos, loading }) => {
export const Eventos = ({ dados }) => {
  //   if (loading) {
  //     return <h2>Loading...</h2>;
  //   }
  //   const listaEventos = (dados) => {
  //     console.log("sd");
  // };
  console.log(`${dados}teste`);
  const listaEventos = () => dados.results.map(res => (
            <div key={res} className="ui card">
                <div className="image">
                    <img src="/images/avatar2/large/kristy.png" />
                </div>
                <div className="content">
                    <a className="header">Kristy</a>
                    <div className="meta">
                        <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                        Kristy is an art director living in New York.
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon" />
                        22 Friends
                    </a>
                </div>
            </div>
            // <div className="col s4">
            //     <div key={res} className="card">
            //         <div className="card-image waves-effect waves-block waves-light">
            //             <img className="activator" src="images/office.jpg" />
            //         </div>
            //         <div className="card-content">
            //             <span className="card-title activator grey-text text-darken-4">
            //                 {res.titulo}
            //                 <i className="material-icons right">more_vert</i>
            //             </span>
            //             <p>
            //                 <a>
            //                     <NavLink to={`/perfil/eventos/${res.idEvento}`}>
            //                         This is a link
            //                     </NavLink>
            //                 </a>
            //             </p>
            //         </div>
            //         <div className="card-reveal">
            //             <span className="card-title grey-text text-darken-4">
            //                 {res.titulo}
            //                 <i className="material-icons right">close</i>
            //             </span>
            //             <p>{res.titulo}</p>
            //         </div>
            //     </div>
            // </div>
  ));

  return (
        <div className="card">{listaEventos()}</div>
        // <>
        //         {eventos.map((evento) => (
        //             <div key={evento.idEvento} className="card">
        //                 <div className="card-image waves-effect waves-block waves-light">
        //                     <img className="activator" src="images/office.jpg" />
        //                 </div>
        //                 <div className="card-content">
        //                     <span className="card-title activator grey-text text-darken-4">
        //                         {evento.titulo}
        //                         <i className="material-icons right">more_vert</i>
        //                     </span>
        //                     <p>
        //                         <a href="#">This is a link</a>
        //                     </p>
        //                 </div>
        //                 <div className="card-reveal">
        //                     <span className="card-title grey-text text-darken-4">
        //                         {evento.titulo}
        //                         <i className="material-icons right">close</i>
        //                     </span>
        //                     <p>{evento.titulo}</p>
        //                 </div>
        //             </div>
        //         ))}
        // </>
  );
};

// {
/* <ul className="list-group mb-4">
  {eventos.map((evento) => (
    <li key={evento.id} className="list-group-item">
      {evento.titulo}
    </li>
  ))}
</ul> */
// }

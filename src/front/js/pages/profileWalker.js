import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";


export const profileWalker = () => {
	const { store, actions } = useContext(Context);
<div class="container">
	<div class="row">
		<div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div class="card">
                    <img class="card-img-top" src="https://picsum.photos/200/150/?random
">
                    <div class="card-block">
                        <figure class="profile">
                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt="">
                        </figure>
                        <h4 class="card-title mt-3">Tawshif Ahsan Khan</h4>
                        <div class="meta">
                            <a>Friends</a>
                        </div>
                        <div class="card-text">
                            Tawshif is a web designer living in Bangladesh.
                        </div>
                    </div>
                     <!--<div class="card-footer">
                        <small>Last updated 3 mins ago</small>
                        <button class="btn btn-secondary float-right btn-sm">show</button>
                    </div>-->
                    <div class="card-footer tab-card-header">
                      <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">One</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Two</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">Three</a>
                        </li>
                      </ul>
                    </div>
                    
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                        <h5 class="card-title">Acerca de mi/h5>
                        <p class="card-text">Descrición de acerca de mi</p>
                        <a href="#" class="btn btn-primary">Boton opiconal</a>              
                      </div>
                      <div class="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                        <h5 class="card-title">Mis servicios</h5>
                        <p class="card-text">LISTA DE MIS SERVICIOS</p>
                      </div>
                      <div class="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
                        <h5 class="card-title">Fotos de mis paseos</h5>
                        <p class="card-text">Desplegado de fotos</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>              
                      </div>
                    </div>
                </div>
            </div>
	</div>
</div>
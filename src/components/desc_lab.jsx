import React from "react";

function desc_lab() {
  return (
    <div className="desc_lab_center">
      <div className="row featurette desc-lab">
        <div className="col-md-7 texto-lab">
          <h2 className="featurette-heading">
            First featurette heading.{" "}
            <span class="text-muted">It'll blow your mind.</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5 imagen-lab">
          <img
            className="featurette-image img-fluid mx-auto"
            src="src/assets/circuito.png"
            data-holder-rendered="true"
          />
        </div>
      </div>
    </div>
  );
}

export default desc_lab;

import { useState } from "react";

export const ProductCard = ({product}) => {

    return (
        <div class="card card-vertical d-flex direction-column relative shadow">
     <div class="card-image-container">
          {/* <img class="card-image" src={image} alt="shoes" /> */}
     </div>
     <div class="card-details">
          {/* <div class="card-title">{title}</div> */}
          <div class="card-description">

          </div>
     </div>
</div>
    )
}
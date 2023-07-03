import React from "react"
function About() {
  return (
    <div className="container">
      <strong ><h1 className="my-5">About MyNoteBook</h1></strong>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>What is MyNoteBook?</strong>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>It is Web App for saving your important Notes.</strong> So you can access them whenever you need them. 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Functionalties</strong>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              <strong>It have many features.</strong> Like adding, updating and deleting your notes.<br/>
              You can also give you notes a meaningful title and tag for your better understanding with your notes.
               
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Security</strong>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              <strong>Your notes is alway secure with us.</strong> No one can watch your note because its contain a secure authentication and authorization features.     
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

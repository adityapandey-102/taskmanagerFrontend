import React from 'react'
import { Link } from 'react-router-dom'



function Home(props) {
  const card = {
    "height": "232px",

  }

  return (
    <>

      <main className="px-3 text-center">
        <img className='homepage mb-3' src="./homepage.png" alt="khuadu" />
        <h1>Create your Task.</h1>
        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className="lead">
          <Link to="/notes" className="btn btn-lg btn-light fw-bold border-white bg-white">Create Task Now</Link>
        </p>
      </main>




      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card" style={card}>
              <div class="card-body">
                <h5 class="card-title">About TaskTracker</h5>
                <p class="card-text">TaskTracker is a user-friendly and efficient task management website designed to help you stay organized and on top of your daily activities. Whether you're a professional managing multiple projects or simply trying to keep track of personal tasks, TaskTracker provides you with the tools you need to streamline your workflow.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
           <div class="card" style={card}>
              <div class="card-body">
                <h5 class="card-title">Task Categorization</h5>
                <p class="card-text">TaskTracker allows you to categorize your tasks into three main categories: "To-Do," "Doing," and "Done." This intuitive system helps you prioritize and visualize your tasks easily.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
           <div class="card" style={card}>
              <div class="card-body">
                <h5 class="card-title">Task Creation</h5>
                <p class="card-text">Creating tasks on TaskTracker is a breeze. Simply enter a task title, description, due date, and assign it to one of the three categories. You can also add labels or tags for better organization.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
           <div class="card" style={card}>
              <div class="card-body">
                <h5 class="card-title">Task Updates</h5>
                <p class="card-text">As your tasks progress, TaskTracker lets you easily update them. You can change the status, due date, or category of a task with a few clicks.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
           <div class="card" style={card}>
              <div class="card-body">
                <h5 class="card-title">Drag-and-Drop Functionality</h5>
                <p class="card-text">One of the standout features of TaskTracker is its drag-and-drop functionality. You can effortlessly move tasks between categories by clicking and dragging them to the desired section. This dynamic system ensures that your task list always reflects your current priorities.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
           <div class="card" style={card}>
              <div class="card-body">
                <h5 class="card-title">Task Details</h5>
                <p class="card-text">TaskTracker provides a dedicated space for each task, allowing you to view and edit all the task details in one place. You can add notes, set reminders, and track progress.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
           <div class="card" style={card}>
              <div class="card-body">
                <h5 class="card-title">Task Deletion</h5>
                <p class="card-text">Completed or no longer relevant tasks can be deleted with ease. TaskTracker makes it simple to declutter your task list.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
           <div class="card" style={card}>
              <div class="card-body">
                <h5 class="card-title">User-Friendly Interface</h5>
                <p class="card-text">TaskTracker boasts an intuitive and visually appealing user interface that is easy to navigate. The clean design ensures a smooth and hassle-free experience.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
           <div class="card" style={card}>
              <div class="card-body">
                <h5 class="card-title">Mobile Compatibility</h5>
                <p class="card-text">TaskTracker is responsive and can be accessed on various devices, including smartphones and tablets, so you can manage your tasks on the go.</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <footer className="mt-auto text-white-50">
        <p>Task Manager Created by <a href="https://www.linkedin.com/in/aditya-pandey-0661881ba/" className="text-white">@Aditya Pandey</a>, <a href="https://github.com/adityapandey-102" className="text-white">(GitHub repo)</a>.</p>
      </footer>
    </>
  )
}

export default Home

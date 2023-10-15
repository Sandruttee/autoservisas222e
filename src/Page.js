import React from "react";

export default function Page() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html" title="Homepage">
          Autoservisas
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="projects.html"
                title="Rezervacija"
              >
                Rezervacija
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="contactme.html" title="Kontaktai">
                Kontaktai
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

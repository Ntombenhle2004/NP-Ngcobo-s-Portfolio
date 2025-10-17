function Projects() {
  return (
    <section className="projects fade-in">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>iSintuCoders</h3>
          <p>
            Online shopping system built with .NET 8, ASP.NET Core MVC, and
            Azure Storage.
          </p>
        </div>
        <div className="project-card">
          <h3>photoAnalysis</h3>
          <p>
            Web app using Microsoft Cognitive Services and Azure Blob Storage
            for image analysis.
          </p>
        </div>
        <div className="project-card">
          <h3>Converter Hub</h3>
          <p>
            Multi-functional web app with calculators and converters built using
            HTML, CSS, and JS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

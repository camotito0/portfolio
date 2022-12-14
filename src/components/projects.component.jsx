/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import data from '../projects';

function projectsComponent() {
	return (
		<section className="projects-section">
			<button>Projects</button>
			<div className='projects-container'>
				{data.projects.map(project => {
				return	<div className='project'>
									<img src={project.img} alt="project-img"/>
									<h5>{project.name}</h5>
									<p>{project.description}</p>
									<div className='project-stack'>
										<a href={project.repo.link} target="_blank" > {project.repo.icon}</a>
										<div className="project-technologies">
											{project.technologies.map(icon => {
												return icon
											})}
										</div>
									</div>
								</div>
				})}
			</div>
		</section>
	);
}

export default projectsComponent;
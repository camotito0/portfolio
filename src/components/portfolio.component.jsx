import Technologies from "./technologies.components";
import Projects from "./projects.component";

function portfolioComponent() {
	return (
		<main>
			<div className="portfolio-title">
				<h3>Diana<br/>Llerena Castro</h3>
				<h1>PORTFOLIO</h1>
			</div>
			<Technologies/>
			<Projects/>
		</main>
	);
}

export default portfolioComponent;
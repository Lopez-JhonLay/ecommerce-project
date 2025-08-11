import "./NotFoundPage.css";

import Header from "../../components/Header";

function NotFoundPage() {
	return (
		<div className="not-found-container">
			<Header />
			<div className="not-found-content">
				<h1 className="error-code">404</h1>
				<h2 className="error-message">Page Not Found</h2>
				<p className="error-description">
					The page you&apos;re looking for doesn&apos;t exist or has been moved.
				</p>
				<a
					href="/"
					className="back-home-btn"
				>
					Go Back Home
				</a>
			</div>
		</div>
	);
}

export default NotFoundPage;

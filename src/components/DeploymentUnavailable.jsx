import '../App.css';

export default function DeploymentUnavailable() {
    return (
    <div className="container text-center pageContainer">
      <div className="row">
        <div className="col-12">
            <p>
                This application can not be deployed. It can run only on local PC.
            </p>
            <p>
                Please, follow README-guide to install and run it on your local PC.
            </p>
        </div>
      </div>
    </div> 
  );
}
import React  from 'react';

class SingleProject extends React.Component {
    render() {
        return (
            <div class="row" style={{height: '30%'}}>

                        <div class="col-lg-6 mb-4">

                             <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                                </div>
                                <div class="card-body">
                                    <h4 class="small font-weight-bold">Server Migration <span
                                            class="float-end">20%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{width: "20%"}}></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Sales Tracking <span
                                            class="float-end">40%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-warning" role="progressbar" style={{width: "40%"}}></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Customer Database <span
                                            class="float-end">60%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "60%"}}></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Payout Details <span
                                            class="float-end">80%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-info" role="progressbar" style={{width: "80%"}}></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Account Setup <span
                                            class="float-end">Complete!</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-success" role="progressbar" style={{width: "100%"}}></div>
                                    </div>
                                </div>
                            </div>
                            </div>

                            {/* illustration  */}
                            <div class="col-lg-6 mb-4">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                                </div>
                                <div class="card-body">
                                    <div class="text-center">
                                        <img class="img-fluid px-3 px-sm-4 mt-3 mb-5" style={{width: "25rem"}}
                                            src="http://athena.ecs.csus.edu/~garciajm/img/undraw_posting_photo.svg"/>
                                    </div>
                                    <p>Add some quality, svg illustrations to your project courtesy of <a
                                            target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                        constantly updated collection of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                                        <a target="#" href="https://undraw.co/" style={{textDecoration: "none"}}>Browse Illustrations on
                                        unDraw &rarr;</a>
                                </div>
                            </div>
                            </div>
                            {/* end of Illustration */}
                            </div>
        )
    }
}
export default SingleProject;

var viewModel = function(data) {
    var self = this;
    self.taskRecords = ko.observableArray([

  JenkinsJobList: {
    EPD_Jobs: [
      {
      "build_name": "#197 GET_Const_Non_EPD",
      "build_no": 197,
      "build_url": "http://jenkins.elastica-inc.com:8080/job/gw-perf-non-epd/197/",
      "description": "Direct GW no HA for 2.95-3rc Iteration 2"
    },
    {
      "build_name": "#198 GET_Const_Non_EPD",
      "build_no": 198,
      "build_url": "http://jenkins.elastica-inc.com:8080/job/gw-perf-non-epd/197/",
      "description": "Direct GW no HA for 2.95-3rc Iteration 2"
    }],
    Non_EPD_Jobs: [{
      "build_name": "#199 GET_Const_Non_EPD",
      "build_no": 199,
      "build_url": "http://jenkins.elastica-inc.com:8080/job/gw-perf-non-epd/197/",
      "description": "Direct GW no HA for 2.95-3rc Iteration 2"
    }],
    Reach_Jobs: [{
      "build_name": "#200 GET_Const_Non_EPD",
      "build_no": 200,
      "build_url": "http://jenkins.elastica-inc.com:8080/job/gw-perf-non-epd/197/",
      "description": "Direct GW no HA for 2.95-3rc Iteration 2"
    }]
  }

]);
};
ko.applyBindings(new viewModel());

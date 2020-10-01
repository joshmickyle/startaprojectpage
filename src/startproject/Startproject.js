import React from "react";
import "./Startproject.css";

// const Startproject = () => {
//   return (
//     <div>
//       <h1>Start Project</h1>
//       <CustomizedSlider />
//     </div>
//   );
// };

// export default Startproject;
// import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500 + theme.spacing(10) * 2,
  },
  margin: {
    height: theme.spacing(10),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
const marks = [
  {
    value: 0,
    label: "Probono",
  },
  {
    value: 10,
    label: "10K",
  },
  {
    value: 20,
    label: "20K",
  },
  {
    value: 30,
    label: "30K",
  },
  {
    value: 40,
    label: "40K",
  },
  {
    value: 50,
    label: "50K",
  },
  {
    value: 60,
    label: "60K",
  },
  {
    value: 70,
    label: "70K",
  },
  {
    value: 80,
    label: "80K",
  },
  {
    value: 90,
    label: "90K",
  },
  {
    value: 100,
    label: "100K+",
  },
];

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
export default function Startproject() {
  const classes = useStyles();

  return (
    <div>
      <div id="section1">
        <div className="pageheading">
          <div class="container">
            <div class="centered">
              <h1>START A PROJECT</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="pageheading2">
          <h1>READY TO GET STARTED?</h1>
          <p1>
            This is the first step to boldly take your brand where no brand has
            gone before! Just complete this quick form and one of our helpful
            team members will be in touch shortly.
          </p1>
        </div>
      </div>
      <div>
        <div className="pageform">
          <h1>SELECT ALL THAT APPLY</h1>
          <div>
            <ul class="tg-list">
              <li class="tg-list-item">
                <h4>Web Development</h4>
                <input class="tgl tgl-flip" id="cb2" type="checkbox" />
                <label
                  class="tgl-btn"
                  data-tg-off="No"
                  data-tg-on="Yes!"
                  for="cb2"
                ></label>
              </li>
              <li class="tg-list-item">
                <h4>Minimal Viable Product</h4>
                <input class="tgl tgl-flip" id="cb3" type="checkbox" />
                <label
                  class="tgl-btn"
                  data-tg-off="No"
                  data-tg-on="Yes!"
                  for="cb3"
                ></label>
              </li>
              <li class="tg-list-item">
                <h4>Robotic Process Automation</h4>
                <input class="tgl tgl-flip" id="cb4" type="checkbox" />
                <label
                  class="tgl-btn"
                  data-tg-off="No"
                  data-tg-on="Yes!"
                  for="cb4"
                ></label>
              </li>
              <li class="tg-list-item">
                <h4>Cloud Solutions</h4>
                <input class="tgl tgl-flip" id="cb5" type="checkbox" />
                <label
                  class="tgl-btn"
                  data-tg-off="No"
                  data-tg-on="Yes!"
                  for="cb5"
                ></label>
              </li>
            </ul>
          </div>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input
                    placeholder="First Name"
                    id="first_name"
                    type="text"
                    class="validate"
                  />
                </div>
                <div class="input-field col s6">
                  <input
                    placeholder="Last Name"
                    id="last_name"
                    type="text"
                    class="validate"
                  />
                </div>
              </div>
              <div class="row">
                <div class="input-field col s6">
                  <input
                    placeholder="Company Name"
                    id="company_name"
                    type="text"
                    class="validate"
                  />
                </div>
                <div class="input-field col s6">
                  <input
                    placeholder="Website Address"
                    id="website_name"
                    type="text"
                    class="validate"
                  />
                </div>
              </div>
              <div class="row">
                <div class="input-field col s6">
                  <input
                    placeholder="Email"
                    id="email_name"
                    type="email"
                    class="validate"
                  />
                </div>
                <div class="input-field col s6">
                  <input
                    placeholder="Phone Number"
                    id="number_name"
                    type="number"
                    class="validate"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="slidertool">
          <div className={classes.root}>
            <h1>BUDGET ESTIMATE</h1>
            <Typography gutterBottom>
              Slide the LC logo to set the budget for your project
            </Typography>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={10}
              marks={marks}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

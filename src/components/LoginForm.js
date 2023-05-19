// LoginForm.js

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import { runCypressTest } from "../../cypress/e2e/spec.cy";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  textArea: {
    width: "2000px",
    maxWidth: "60%",
    minHeight: "100px",
    resize: "vertical",
  },
  urlInput: {
    width: "100%",
    maxWidth: "60%",
  },
}));

const ResultArea = ({ result }) => {
  const classes = useStyles();

  return (
    <TextareaAutosize
      className={classes.textArea}
      rowsMin={4}
      value={result || "No Data"}
    />
  );
};

const runCypressTest = (username, password, url) => {
  // cy.visit(url);
  // cy.get("#username").type(username);
  // cy.get("#password").type(password);
  // cy.get("#login-button").click();
};

const LoginForm = () => {
  const classes = useStyles();

  const [username, setUsername] = useState("dimitri.rybak@atos.net");
  const [password, setPassword] = useState("P2}4)+~;NNN!");
  const [result, setResult] = useState("");
  const [url, setUrl] = useState(
    "https://atos-information.eu10.hanacloudservices.cloud.sap/sap/fpa/ui/tenants/45a5b/app.html#/story2&/s2/73C9A8872316A29B4C3582ECA8F6C831/?url_api=true&preview=true&mode=view&view_id=story2"
  );

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    setResult("Hello Dimitri");
    runCypressTest(username, password, url); // Execute Cypress test
    // Reset the form
    // setUsername("");
    // setPassword("");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="url"
            label="Website URL"
            variant="outlined"
            value={url}
            onChange={handleUrlChange}
            className={classes.urlInput}
          />
        </Grid>
        <Grid item>
          <Button
            id="login-button"
            className={classes.submitButton}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Grid>
        <Grid item>
          <ResultArea result={result} />
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;

// This is just an example,
// so you can safely delete all default props below

export default {
  // menu
  Dardboard: "Dardboard",
  Management: "Management",
  Agents: "Agents",
  "Agents.Install": "Install",

  agents: {
    newAgent: "Deploy a new agent",
    chooseTheOperatingSystem: "Choose the operating system",
    chooseTheVersion: "Choose the version", //2
    chooseTheArchitecture: "Choose the architecture", //3
    wazuhServerAddress: "Wazuh server address", //4
    textbody4:
      "This is the address the agent uses to communicate with the Wazuh server." +
      "It can be an IP address or a fully qualified domain name (FQDN).",
    optionalSettings: "Optional settings", //5
    installAndEnrollTheAgent: "Install and enroll the agent", //6
    startTheAgent: "Start the agent", //7
  },
  // common
  goHome: "Go Home",
  pageNothing: "Oops. Nothing here...",
  refresh: "Refresh",

  chosseLanguage: "Chosse Language",
  failed: "Action failed",
  success: "Action was successful",
  auth: {
    username: "Username",
    password: "Password",
    forgotPassword: "Forgot password?",
    signin: "Sign in",
    enterSignin: "Please enter your signin and password!",
    logout: "Logout",
  },
  validations: {
    required: "Field is required",
  },
};

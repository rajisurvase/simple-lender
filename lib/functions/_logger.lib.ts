type Logtype = "log" | "error" | "warn" | "debug";
type consoleMessage= any[] 

const logger = (() => {
  const areLogsEnabled = process.env.NEXT_areLogsEnabled;

  const print = (type: Logtype, ...messages:consoleMessage) => {
    if (areLogsEnabled) {
      switch (type) {
        case "log":
          console.log(
            "%c Log:",
            "background: blue; color: white;",
            ...messages
          );
          break;
        case "warn":
          console.warn(
            "%c Warning:",
            "background: orange; color: white;",
            ...messages
          );
          break;
        case "error":
          console.error(
            "%c Error:",
            "background: red; color: white;",
            ...messages
          );
          break;
        case "debug":
        default:
          console.log(
            "%c Log:",
            "background: green; color: white;",
            ...messages
          );
      }
    }
  };

  return {
    debug: print.bind(null, "debug"),
    log: print.bind(null, "log"),
    warn: print.bind(null, "warn"),
    error: print.bind(null, "error")
  };
})();

export default logger;

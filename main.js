const app = require("./app");

app.listen(process.env.PORT || 8081, () => {
    console.log("Serving the EdFlix application");
});

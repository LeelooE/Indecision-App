"use strict";

var visibility = false;
var AppRoot = document.getElementById("app");
var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};
var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Vsibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleVisibility },
            visibility ? "Hide Details" : "Show Details"
        ),
        visibility && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "Hey. These are some details you can now see!"
            )
        )
    );

    ReactDOM.render(template, AppRoot);
};

render();

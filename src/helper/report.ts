const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Talisman Automation Report",
    pageTitle: "Talisman Automation",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Casius - PC",
        platform: {
            name: "Windows",
            version: "14.1",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Talisman Application" },
            { label: "Release", value: "1.1.1" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});
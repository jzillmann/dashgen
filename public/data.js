// data.js - can be overriden by static site generator.

const reportsCreatedAt = new Date('Fri, 18 Oct 2019 10:00:03 GMT');

const reports = {
    demo1: [
        {
            "name": "Entity Counts",
            "counts": {
                "headers": ["Users", "Projects", "Archived Projects", "Links"],
                "values": [103, 55, 1, 23]
            },
            "details": {}
        },
        {
            "name": "Project Compilations",
            "counts": {
                "headers": ["Projects", "Success", "Failures", "Missing", "Time"],
                "values": [55, 50, 5, 1, "3.068 s"]
            },
            "details": {
                "headers": ["Project", "Referenced Projects", "Missing Projects", "Failures"],
                "rows": [
                    ["p18", "[p10, p3, p14, p13]", "[p3]", ""],
                    ["p19", "[p3]", "[p3]", "something.projects.ArtifactV1 cannot be cast to something.projects.Artifact"],
                    ["p33", "[]", "[]", "Could not find artifact 'user 2.xls' not found, only: [reports.pdf, user.xls]"],
                    ["p37", "[]", "[]", "Could not find artifact 'user 2.xls' not found, only: [reports.pdf, user.xls]"],
                    ["p40", "[]", "[]", "Could not find artifact 'user 2.xls' not found, only: [reports.pdf, user.xls]"],
                    ["p41", "[]", "[]", "Could not find user 'u23' not found, only: [u2, u3]"]
                ]
            }
        }
    ],
    demo2: [
        {
            "name": "Entity Counts",
            "counts": {
                "headers": ["Users", "Projects", "Archived Projects", "Links"],
                "values": [23, 40, 0, 108]
            },
            "details": {}
        },
        {
            "name": "Project Compilations",
            "counts": {
                "headers": ["Projects", "Success", "Failures", "Missing", "Time"],
                "values": [40, 39, 1, 0, "2.068 s"]
            },
            "details": {
                "headers": ["Project", "Referenced Projects", "Missing Projects", "Failures"],
                "rows": [
                    ["p3", "[]", "[]", "Could not find artifact 'weather 2.xls' not found, only: [reports.pdf]"]
                ]
            }
        }
    ]
}
// data.js - can be overriden by static site generator.

const dataCreatedAt = new Date('2019-10-18T10:00:03.064Z');

const data = [
    {
        "name": "Entity Counts",
        "sourceName": "demo1",
        "sourceDate": "2019-10-17T12:27:48.566Z",
        "metrics": {
            "Users": 103,
            "Projects": 55,
            "Archived Projects": 1,
            "Links": 23
        },
        "details": {}
    },
    {
        "name": "Project Compilations",
        "sourceName": "demo1",
        "sourceDate": "2019-10-17T12:27:48.566Z",
        "metrics": {
            "Projects": 55,
            "Success": 50,
            "Failures": 5,
            "Missing": 1,
            "Time": "3.068 s"
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
    },
    {
        "name": "Entity Counts",
        "sourceName": "demo2",
        "sourceDate": "2019-10-17T12:45:48.566Z",
        "metrics": {
            "Users": 23,
            "Projects": 40,
            "Archived Projects": 0,
            "Links": 108
        },
        "details": {}
    },
    {
        "name": "Project Compilations",
        "sourceName": "demo2",
        "sourceDate": "2019-10-17T12:45:48.566Z",
        "metrics": {
            "Projects": 40,
            "Success": 39,
            "Failures": 1,
            "Missing": 0,
            "Time": "2.068 s"
        },
        "details": {
            "headers": ["Project", "Referenced Projects", "Missing Projects", "Failures"],
            "rows": [
                ["p3", "[]", "[]", "Could not find artifact 'weather 2.xls' not found, only: [reports.pdf]"]
            ]
        }
    },
    {
        "name": "Entity Counts",
        "sourceName": "demo3",
        "sourceDate": "2019-10-17T12:49:48.566Z",
        "metrics": {
            "Users": 1,
            "Projects": 2,
            "Archived Projects": 0,
            "Links": 1
        },
        "details": {}
    }
]
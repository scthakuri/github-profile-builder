import { SocialGeneratorProps } from "./type";

export const themeOptions = [
    {
        label: "For the badge",
        value: "for-the-badge"
    },
    {
        label: "Flat",
        value: "flat"
    },
    {
        label: "Flat Square",
        value: "flat-square"
    },
    {
        label: "Plastic",
        value: "plastic"
    }
];

export const socialURLGenerator = {
    "twitter": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&logoColor=white)](https://twitter.com/${username})`;
            return false;
        }
    },
    "codepen": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Codepen](https://img.shields.io/badge/Codepen-%23000000.svg?logo=Codepen&logoColor=white)](https://codepen.io/${username})`;
            return false;
        }
    },
    "codesandbox": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Codesandbox](https://img.shields.io/badge/Codesandbox-%2348a4f0.svg?logo=Codesandbox&logoColor=white)](https://codesandbox.com/${username})`;
            return false;
        }
    },
    "stackoverflow": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Stackoverflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?logo=stack-overflow&logoColor=white)](https://stackoverflow.com/users/${username})`;
            return false;
        }
    },
    "linkedin": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Linkedin](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/${username})`;
            return false;
        }
    },
    "facebook": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/${username})`;
            return false;
        }
    },
    "instagram": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/${username})`;
            return false;
        }
    },
    "dribble": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Dribbble](https://img.shields.io/badge/Dribbble-%23EA4C89.svg?logo=Dribbble&logoColor=white)](https://dribbble.com/${username})`;
            return false;
        }
    },
    "behance": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Behance](https://img.shields.io/badge/Behance-1769ff?logo=behance&logoColor=white)](https://behance.com/${username})`;
            return false;
        }
    },
    "hashnode": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Hashnode](https://img.shields.io/badge/Hashnode-%232962FF.svg?logo=Hashnode&logoColor=white)](https://hashnode.com/${username})`;
            return false;
        }
    },
    "medium": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Medium](https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white)](https://medium.com/${username})`;
            return false;
        }
    },
    "youtube": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Youtube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/channel/${username})`;
            return false;
        }
    },
    "codechef": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Codechef](https://img.shields.io/badge/Codechef-%23746161.svg?logo=Codechef&logoColor=white)](https://codechef.com/users/${username})`;
            return false;
        }
    },
    "hackerrank": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Hackerrank](https://img.shields.io/badge/Hackerrank-%231BA94C.svg?logo=Hackerrank&logoColor=white)](https://hackerrank.com/${username})`;
            return false;
        }
    },
    "codeforces": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Codeforces](https://img.shields.io/badge/Codeforces-%231D84C7.svg?logo=Codeforces&logoColor=white)](https://codeforces.com/profile/${username})`;
            return false;
        }
    },
    "topcoder": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Topcoder](https://img.shields.io/badge/Topcoder-%231263A0.svg?logo=Topcoder&logoColor=white)](https://topcoder.com/members/${username})`;
            return false;
        }
    },
    "hackerearth": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Hackerearth](https://img.shields.io/badge/Hackerearth-%232C3454.svg?logo=Hackerearth&logoColor=white)](https://hackerearth.com/${username})`;
            return false;
        }
    },
    "rss": {
        generate : (username : String) => {
            if( username.length > 0 )
                return `[![Rss](https://img.shields.io/badge/RSS-%23FF6600.svg?logo=RSS&logoColor=white)](${username})`;
            return false;
        }
    }
}
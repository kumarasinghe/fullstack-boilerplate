import { FacebookIcon, InstagramIcon, TwitterIcon } from "~/libs/icons";

export default {
    pages: [
        {
            title: "Contact Us",
            path: "/contacts-us",
        },
        {
            title: "Privacy Policy",
            path: "/privacy-policy",
        },
        {
            title: "Terms of Service",
            path: "/terms-of-service",
        },
    ],
    socialAccounts: [
        {
            title: "Facebook",
            icon: <FacebookIcon />,
            url: "https://www.facebook.com",
        },
        {
            title: "Instagram",
            icon: <InstagramIcon />,
            url: "https://www.instagran.com",
        },
        {
            title: "Twitter",
            icon: <TwitterIcon />,
            url: "https://www.twitter.com",
        },
    ],
};

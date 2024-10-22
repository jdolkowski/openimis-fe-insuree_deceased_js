import React from "react";
import messages_en from "./translations/en.json";
import AccountBalance from "@material-ui/icons/AccountBalance";
import {FormattedMessage} from "react-intl";
import {
    MODULE_NAME
} from "./constants";

const INSUREE_DECEASED_ROUTE = "/insureeDeceased"

const DEFAULT_CONFIG = {
    "translations": [{key: "en", messages: messages_en}],
    "admin.MainMenu": [
        {
            text: "Insuree Deceased",
            icon: <AccountBalance/>,
            route: INSUREE_DECEASED_ROUTE,
        },
    ]
}

export const InsureeDeceasedModule = (cfg) => {
    return {...DEFAULT_CONFIG, ...cfg};
}
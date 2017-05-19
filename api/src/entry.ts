// This file serves as the "start" of the application. All dependency injections, all configs, and everything should be in this file.
// This is the "setup"

import * as StripeNode from "stripe"
import { keys } from "lodash"


var Transactor = StripeNode('apiKey')


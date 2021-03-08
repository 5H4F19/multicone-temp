import authModelData  from '../data/auth.model.data.js'
import authCntlrData from '../data/auth.cntlr.data.js'
import authRouteData from '../data/auth.route.data.js'
import controllerData from '../data/cntlr.data.js'
import modelData from '../data/model.data.js'
import GenModel from "./model.gen.js"
import GenCntlr from "./cntlr.gen.js"
import GenRoute from "./route.gen.js"
import { initError } from '../utils/console.js'
import fs from 'fs'

export const auth = () => {
    const json = process.cwd() + '/package.json'
    if (fs.existsSync(json)) {
        GenModel('user', authModelData, () => GenCntlr('user', authCntlrData, GenRoute))
    } else {
        initError()
    }
}

export const MRC = (name) => {
    const json = process.cwd() + '/package.json'
    if (fs.existsSync(json)) {
        GenModel(name, modelData, (name) => GenCntlr(name, controllerData, GenRoute,'mrc'),'mrc')
    } else {
        initError()
    }
}